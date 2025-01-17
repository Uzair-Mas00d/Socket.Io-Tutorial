import { useAppStore } from "@/store";
import { HOST } from "@/utils/constant";
import { createContext, useContext, useEffect, useRef } from "react";
import { io } from "socket.io-client";

const SocketContex = createContext(null);

export const useSocket = () => {
  return useContext(SocketContex);
};

export const SocketProvider = ({ children }) => {
  const socket = useRef();
  const { userInfo } = useAppStore();

  useEffect(() => {
    if (userInfo) {
      socket.current = io(HOST, {
        withCredentials: true,
        query: { userId: userInfo.id },
      });
      socket.current.on("connect", () => {
        console.log("connected to socket server");
      });

      const handleReciveMessage = (message) => {
        const { selectedChatData, selectedChatType, addMessage } =
          useAppStore.getState();
        if (
          selectedChatType !== undefined &&
          (selectedChatData._id === message.sender._id ||
            selectedChatData._id === message.recipient._id)
        ) {
          console.log("Message recived", message);
          addMessage(message);
        }
      };

      const handleReciveChannelMessage = (message) => {
        const { selectedChatData, selectedChatType, addMessage, addChannelInChannelList } =
          useAppStore.getState();
        if (
          selectedChatType !== undefined &&
          selectedChatData._id === message.channelId
        ) {
          addMessage(message);
        }
        addChannelInChannelList(message);
      };

      socket.current.on("reciveMessage", handleReciveMessage);
      socket.current.on("recive-channel-message", handleReciveChannelMessage);

      return () => {
        socket.current.disconnect();
      };
    }
  }, [userInfo]);

  return (
    <SocketContex.Provider value={socket.current}>
      {children}
    </SocketContex.Provider>
  );
};

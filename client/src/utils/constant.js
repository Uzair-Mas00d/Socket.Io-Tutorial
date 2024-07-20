export const HOST = import.meta.env.VITE_SERVER_URL

export const AUTH_ROUTE = "api/auth"
export const SIGNUP_ROUTE = `${AUTH_ROUTE}/signup`
export const LOGIN_ROUTE = `${AUTH_ROUTE}/login`
export const GE_USER_INFO = `${AUTH_ROUTE}/user-info`
export const UPDATE_PROFILE_ROUTE = `${AUTH_ROUTE}/update-profile`
export const ADD_PROFILE_IMAGE_ROUTE = `${AUTH_ROUTE}/add-profile-image`
export const REMOVE_PROFILE_IMAGE_ROUTE = `${AUTH_ROUTE}/remove-profile-image`
export const LOGOUT_ROUTE = `${AUTH_ROUTE}/logout`

export const CONTACT_ROUTE = "api/contacts"
export const SEARCH_CONTACTS_ROUTE = `${CONTACT_ROUTE}/search`
export const GET_DM_CONTACTS_ROUTE = `${CONTACT_ROUTE}/get-contacts-for-dm`
export const GET_ALL_CONTACTS_ROUTE = `${CONTACT_ROUTE}/get-all-contacts`

export const MESSAGES_ROUTE = "api/messages"
export const GET_ALL_MESSAGES_ROUTE = `${MESSAGES_ROUTE}/get-messages`
export const UPLOAD_FILE_ROUTE = `${MESSAGES_ROUTE}/upload-file`

export const CHANNELS_ROUTES = "api/channel"
export const CREATE_CHANNEL_ROUTE = `${CHANNELS_ROUTES}/create-channel`
export const GET_USER_CHANNEL_ROUTE = `${CHANNELS_ROUTES}/get-user-channels`
export const GET_CHANNEL_MESSAGES_ROUTE = `${CHANNELS_ROUTES}/get-channel-messages`
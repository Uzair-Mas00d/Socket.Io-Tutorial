import mongooes from "mongoose";

const channelSchema = new mongooes.Schema({
  name: {
    type: String,
    required: true,
  },
  members: [{ type: mongooes.Schema.ObjectId, ref: "Users", required: true }],
  admin: { type: mongooes.Schema.ObjectId, ref: "Users", required: true },
  messages: [{ type: mongooes.Schema.ObjectId, ref: "Messages", required: false }],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

channelSchema.pre("save", function(next) {
    this.updatedAt = Date.now()
    next()
})

channelSchema.pre("findOneAndUpdate", function(next) {
    this.set({ updatedAt: Date.now() })
    next()
})

const Channel = mongooes.model("Channels", channelSchema);
export default Channel;
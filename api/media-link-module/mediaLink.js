"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const contentType = ["CHILD_ABUSE", "FAKE_NEWS", "PORNOGRAPHIC", "POLICY"];
const state = ["VALID", "INVALID"];
const status = ["VOTING", "CONSENSUS", "NO_CONSENSUS"];
const MediaLinkSchema = new Schema({
  link: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  typeOfContent: { type: String, enum: contentType, required: true, default: "CHILD_ABUSE" },
  platform: { type: String, required: true },
  threshHold: { type: Number, default: 3 },
  limitDate: { type: Date, required: true },

  // system generated
  state: { type: String, enum: state, required: true, default: "VOTING" },
  status: { type: String, enum: status, required: true, default: "" },
  forVotes: { type: Number, default: 0 },
  againstVotes: { type: Number, default: 0 },
  createdBy: { type: Schema.ObjectId, default: null },
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("MediaLink", MediaLinkSchema);

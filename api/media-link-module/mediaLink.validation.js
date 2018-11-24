"use strict";

/*
 * This file contains code for validation of request params 
*/

const Joi = require("joi");
const contentType = ["CHILD_ABUSE", "FAKE_NEWS", "PORNOGRAPHIC", "POLICY"];
const option = ["YES", "NO"];

const strictChecking = {
  allowUnknownBody: false,
  allowUnknownHeaders: true,
  allowUnknownQuery: false,
  allowUnknownParams: false,
  allowUnknownCookies: false
};

const createMediaLink = {
  options: strictChecking,
  body: {
    link: Joi.string().required(),
    title: Joi.string().required(),
    typeOfContent: Joi.string().valid(contentType).required(),
    platform: Joi.string().required(),
    threshHold: Joi.number().optional()
  }
};

const voteMediaLink = {
  options: strictChecking,
  params: {
    mediaLinkId: Joi.string().required()
  },
  body: {
    vote: Joi.string().valid(option).required()
  }
};


const deleteMediaLink = {
  options: strictChecking,
  params: {
    mediaLinkId: Joi.string().required()
  }
};

const getMediaLink = {
  options: strictChecking,
  params: {
    mediaLinkId: Joi.string().required()
  }
};

const getMediaLinkList = {
  options: strictChecking,
  query: {}
};

module.exports = {
  createMediaLink,
  voteMediaLink,
  getMediaLink,
  deleteMediaLink,
  getMediaLinkList
};

"use strict";

/*
 * This file imports all the required controllers
 */

const express = require("express");
const app = express();

const MediaLinkRoute = require("./media-link-module/mediaLink.route");

app.use(MediaLinkRoute);

module.exports = app;

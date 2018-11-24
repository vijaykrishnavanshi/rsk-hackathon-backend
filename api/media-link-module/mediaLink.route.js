"use strict";

/*
 * This file contails all the routes that are related to 
 * auth of the user. 
*/
const express = require("express");
const router = express.Router();
const validate = require("express-validation");
const validation = require("./mediaLink.validation");
const MediaLinkController = require("./mediaLink.controller");
const { logger } = require("../../utils");

/**
 * @api {mediaLink} /create Create [POST]
 * @apiGroup MediaLink
 * @apiDescription This api is to create mediaLink by the user.
 * @apiParam {String} link Title of the mediaLink.
 * @apiParam {String} title Body of the mediaLink.
 * @apiParam {String} typeOfContent Body of the mediaLink.
 * @apiParam {String} platform Body of the mediaLink.
 * @apiParam {String} threshold Threshold of the mediaLink Voting Round.
 * @apiParam {String} limit Number of days the link will be in voting round.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *        "success": "true",
 *        "message": "Created",
 *        "data": {<magic link object>}
 *     }
 *
 * @apiErrorExample Error-Response 403:
 *     HTTP/1.1 403 Unable to signup.
 *     {
 *        "success": "false",
 *        "message": "Unable to signup",
 *        "data": {}
 *     }
 * @apiErrorExample Error-Response 500:
 *     HTTP/1.1 500 Error on server side.
 *     {
 *        "success": "false",
 *        "message": "Something went wrong",
 *        "data": {}
 *     }
 */

router
  .route("/create")
  .post(validate(validation.createMediaLink), (req, res) => {
    // send only the data that is required by the controller
    const response = {
      success: false,
      message: "",
      data: {}
    };
    logger.info(req.body);
    MediaLinkController.create(req.body)
      .then(mediaLink => {
        if (!mediaLink) {
          response.success = false;
          response.message = "Something went wrong";
          return res.status(500).json(response);
        } else {
          response.success = true;
          response.message = "Success";
          response.data = mediaLink;
          return res.status(201).json(response);
        }
      })
      .catch(err => {
        logger.error(err);
        response.success = false;
        response.message = err.message;
        return res.status(403).json(response);
      });
  });

/**
 * @api {post} /media-link/<mediaLinkId>/vote Vote [POST]
 * @apiGroup MediaLink
 * @apiDescription This api is to vote on mediaLink by the user.
 * @apiParam (param) {String} mediaLinkId ID of the mediaLink.
 * @apiParam (body) {String} vote YES or NO.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *        "success": "true",
 *        "message": "Voted",
 *        "data": {}
 *     }
 *
 * @apiErrorExample Error-Response 403:
 *     HTTP/1.1 403 Unable to vote.
 *     {
 *        "success": "false",
 *        "message": "Unable to vote",
 *        "data": {}
 *     }
 * @apiErrorExample Error-Response 500:
 *     HTTP/1.1 500 Error on server side.
 *     {
 *        "success": "false",
 *        "message": "Something went wrong",
 *        "data": {}
 *     }
 */

router
  .route("media-link/:mediaLinkId/vote")
  .post(validate(validation.voteMediaLink), (req, res) => {
    // send only the data that is required by the controller
    const response = {
      success: false,
      message: "",
      data: {}
    };
    MediaLinkController.vote(req.params, req.body)
      .then(mediaLink => {
        if (!mediaLink) {
          response.success = false;
          response.message = "Something went wrong";
          return res.status(500).json(response);
        } else {
          response.success = true;
          response.message = "Success";
          response.data = {};
          return res.status(201).json(response);
        }
      })
      .catch(err => {
        logger.error(err);
        response.success = false;
        response.message = err.message;
        return res.status(403).json(response);
      });
  });

/**
 * @api {get} /media-link/<mediaLinkId> Get One MediaLink [GET]
 * @apiGroup MediaLink
 * @apiDescription This api is to get single mediaLink by the user.
 * @apiParam {String} mediaLinkId ID of the mediaLink.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *        "success": "true",
 *        "message": "Fetched",
 *        "data": {<media-link-object>}
 *     }
 *
 * @apiErrorExample Error-Response 403:
 *     HTTP/1.1 403 Unable to fetch.
 *     {
 *        "success": "false",
 *        "message": "Unable to fetch",
 *        "data": {}
 *     }
 * @apiErrorExample Error-Response 500:
 *     HTTP/1.1 500 Error on server side.
 *     {
 *        "success": "false",
 *        "message": "Something went wrong",
 *        "data": {}
 *     }
 */

router
  .route("/mediaLinks/:mediaLinkId")
  .get(validate(validation.getMediaLink), (req, res) => {
    // send only the data that is required by the controller
    const response = {
      success: false,
      message: "",
      data: {}
    };
    MediaLinkController.get(req.params)
      .then(mediaLink => {
        if (!mediaLink) {
          response.success = false;
          response.message = "Something went wrong";
          return res.status(500).json(response);
        } else {
          response.success = true;
          response.message = "Success";
          response.data = mediaLink;
          return res.status(201).json(response);
        }
      })
      .catch(err => {
        logger.error(err);
        response.success = false;
        response.message = err.message;
        return res.status(403).json(response);
      });
  });

/**
 * @api {delete} /delete/<mediaLinkId> Delete MediaLink [DELETE]
 * @apiGroup MediaLink
 * @apiDescription This api is to delete mediaLink by the user.
 * @apiParam {String} mediaLinkId ID of the mediaLink.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *        "success": "true",
 *        "message": "Deleted",
 *        "data": {}
 *     }
 *
 * @apiErrorExample Error-Response 403:
 *     HTTP/1.1 403 Unable to delete.
 *     {
 *        "success": "false",
 *        "message": "Unable to delete",
 *        "data": {}
 *     }
 * @apiErrorExample Error-Response 500:
 *     HTTP/1.1 500 Error on server side.
 *     {
 *        "success": "false",
 *        "message": "Something went wrong",
 *        "data": {}
 *     }
 */

router
  .route("/delete/:mediaLinkId")
  .delete(validate(validation.deleteMediaLink), (req, res) => {
    // send only the data that is required by the controller
    const response = {
      success: false,
      message: "",
      data: {}
    };
    logger.info(req.body);
    MediaLinkController.delete(req.body)
      .then(mediaLink => {
        if (!mediaLink) {
          response.success = false;
          response.message = "Something went wrong";
          return res.status(500).json(response);
        } else {
          response.success = true;
          response.message = "Success";
          response.data = {};
          return res.status(201).json(response);
        }
      })
      .catch(err => {
        logger.error(err);
        response.success = false;
        response.message = err.message;
        return res.status(403).json(response);
      });
  });

/**
 * @api {get} /media-links Get Multiple MediaLinks [GET]
 * @apiGroup MediaLink
 * @apiDescription This api is to get multiple mediaLinks.
 * @apiParam {String} mediaLinkId ID of the mediaLink.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *        "success": "true",
 *        "message": "Created",
 *        "data": {
 *          mediaLinkList: [{
 *            "_id": "<mediaLinkId>",
 *            "link": "<link>",
 *            "title": "<title>",
 *            "typeOfContent": "<typeOfContent>",
 *            "status": "<status>",
 *            "state": "<state>"
 *          }]
 *        }
 *     }
 *
 * @apiErrorExample Error-Response 403:
 *     HTTP/1.1 403 Unable to signup.
 *     {
 *        "success": "false",
 *        "message": "Unable to signup",
 *        "data": {}
 *     }
 * @apiErrorExample Error-Response 500:
 *     HTTP/1.1 500 Error on server side.
 *     {
 *        "success": "false",
 *        "message": "Something went wrong",
 *        "data": {}
 *     }
 */

router
  .route("/media-links")
  .get(validate(validation.getMediaLinkList), (req, res) => {
    // send only the data that is required by the controller
    const response = {
      success: false,
      message: "",
      data: {}
    };
    logger.info(req.query);
    MediaLinkController.getList(req.query)
      .then(mediaLinks => {
        if (!mediaLinks) {
          response.success = false;
          response.message = "Something went wrong";
          return res.status(500).json(response);
        } else {
          response.success = true;
          response.message = "Success";
          response.data = {
            mediaLinkList: mediaLinks
          };
          return res.status(201).json(response);
        }
      })
      .catch(err => {
        logger.error(err);
        response.success = false;
        response.message = err.message;
        return res.status(403).json(response);
      });
  });

module.exports = router;

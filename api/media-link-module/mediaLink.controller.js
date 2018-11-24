/*
 *
 * This file will have all the user management related functions
 * 
 */
const MediaLink = require("./mediaLink");
const dotenv = require("dotenv");
const _mediaLink = {};

dotenv.config();

_mediaLink.create = function(payloadData) {
  return new Promise((resolve, reject) => {
    if (!payloadData.link || !payloadData.title) {
      reject(new Error("Please pass link and title."));
    } else {
      const someDate = new Date();
      payloadData.limitDate = new Date(
        someDate.getDate() + payloadData.limit || 1
      );
      const mediaLink = new MediaLink(payloadData);
      mediaLink
        .save()
        .then(mediaLinkSaved => {
          resolve(mediaLinkSaved);
        })
        .catch(err => {
          reject(err);
        });
    }
  });
};

_mediaLink.vote = function(params, payloadData) {
  return new Promise((resolve, reject) => {
    if (!params.mediaLinkId) {
      reject(new Error("Please pass id for updating the mediaLink."));
    } else {
      // Hash Password
      const criteria = {
        _id: params.mediaLinkId
      };
      const projection = {};
      const option = {};
      MediaLink.vote(criteria, projection, option)
        .exec()
        .then(mediaLink => {
          if (payloadData.vote == "YES") {
            mediaLink.forVote += 1;
          } else if (payloadData.vote == "NO") {
            mediaLink.againstVote += 1;
          }

          if (
            mediaLink.againstVote + mediaLink.forVote >=
            mediaLink.threshold
          ) {
            mediaLink.state = "CONSENSUS";
            if (mediaLink.againstVote > mediaLink.forVote) {
              mediaLink.status = "VALID";
            } else {
              mediaLink.status = "INVALID";
            }
          }
          return mediaLink.save();
        })
        .then(mediaLinkSaved => {
          mediaLinkSaved = mediaLinkSaved.toObject();
          resolve(mediaLinkSaved);
        })
        .catch(error => {
          reject(error);
        });
    }
  });
};

_mediaLink.get = function(params) {
  return new Promise((resolve, reject) => {
    if (!params.mediaLinkId) {
      reject(new Error("Please pass id for getting the mediaLink."));
    } else {
      // Hash Password
      const criteria = {
        _id: params.mediaLinkId
      };
      const projection = {};
      const option = {
        lean: true
      };
      return MediaLink.findOne(criteria, projection, option).exec();
    }
  });
};

_mediaLink.delete = function(params) {
  return new Promise((resolve, reject) => {
    if (!params.mediaLinkId) {
      reject(new Error("Please pass id for deleting the mediaLink."));
    } else {
      const criteria = {
        _id: params.mediaLinkId
      };
      MediaLink.findOneAndRemove(criteria)
        .exec()
        .then(mediaLinkFetched => {
          resolve(mediaLinkFetched);
        })
        .catch(error => {
          reject(error);
        });
    }
  });
};

_mediaLink.getList = function() {
  return new Promise((resolve, reject) => {
    const criteria = {};
    const projection = {};
    const option = {};
    MediaLink.find(criteria, projection, option)
      .exec()
      .then(mediaLinkFetched => {
        resolve(mediaLinkFetched);
      })
      .catch(error => {
        reject(error);
      });
  });
};

module.exports = _mediaLink;

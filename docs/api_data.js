define({ "api": [
  {
    "type": "delete",
    "url": "/delete/<mediaLinkId>",
    "title": "Delete MediaLink [DELETE]",
    "group": "MediaLink",
    "description": "<p>This api is to update mediaLink by the user.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mediaLinkId",
            "description": "<p>ID of the mediaLink.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n   \"success\": \"true\",\n   \"message\": \"Deleted\",\n   \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response 403:",
          "content": "HTTP/1.1 403 Unable to delete.\n{\n   \"success\": \"false\",\n   \"message\": \"Unable to delete\",\n   \"data\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response 500:",
          "content": "HTTP/1.1 500 Error on server side.\n{\n   \"success\": \"false\",\n   \"message\": \"Something went wrong\",\n   \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/media-link-module/mediaLink.route.js",
    "groupTitle": "MediaLink",
    "name": "DeleteDeleteMedialinkid"
  },
  {
    "type": "get",
    "url": "/media-link/<mediaLinkId>",
    "title": "Get One MediaLink [GET]",
    "group": "MediaLink",
    "description": "<p>This api is to get single mediaLink by the user.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mediaLinkId",
            "description": "<p>ID of the mediaLink.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n   \"success\": \"true\",\n   \"message\": \"Fetched\",\n   \"data\": {<media-link-object>}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response 403:",
          "content": "HTTP/1.1 403 Unable to fetch.\n{\n   \"success\": \"false\",\n   \"message\": \"Unable to fetch\",\n   \"data\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response 500:",
          "content": "HTTP/1.1 500 Error on server side.\n{\n   \"success\": \"false\",\n   \"message\": \"Something went wrong\",\n   \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/media-link-module/mediaLink.route.js",
    "groupTitle": "MediaLink",
    "name": "GetMediaLinkMedialinkid"
  },
  {
    "type": "get",
    "url": "/media-links",
    "title": "Get Multiple MediaLinks [GET]",
    "group": "MediaLink",
    "description": "<p>This api is to get multiple mediaLinks.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mediaLinkId",
            "description": "<p>ID of the mediaLink.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n   \"success\": \"true\",\n   \"message\": \"Created\",\n   \"data\": {\n     mediaLinkList: [{\n       \"_id\": \"<mediaLinkId>\",\n       \"link\": \"<link>\",\n       \"title\": \"<title>\",\n       \"typeOfContent\": \"<typeOfContent>\",\n       \"status\": \"<status>\",\n       \"state\": \"<state>\"\n     }]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response 403:",
          "content": "HTTP/1.1 403 Unable to signup.\n{\n   \"success\": \"false\",\n   \"message\": \"Unable to signup\",\n   \"data\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response 500:",
          "content": "HTTP/1.1 500 Error on server side.\n{\n   \"success\": \"false\",\n   \"message\": \"Something went wrong\",\n   \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/media-link-module/mediaLink.route.js",
    "groupTitle": "MediaLink",
    "name": "GetMediaLinks"
  },
  {
    "type": "mediaLink",
    "url": "/create",
    "title": "Create [POST]",
    "group": "MediaLink",
    "description": "<p>This api is to create mediaLink by the user.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>Title of the mediaLink.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Body of the mediaLink.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "typeOfContent",
            "description": "<p>Body of the mediaLink.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform",
            "description": "<p>Body of the mediaLink.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "threshold",
            "description": "<p>Threshold of the mediaLink Voting Round.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "limit",
            "description": "<p>Number of days the link will be in voting round.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n   \"success\": \"true\",\n   \"message\": \"Created\",\n   \"data\": {<magic link object>}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response 403:",
          "content": "HTTP/1.1 403 Unable to signup.\n{\n   \"success\": \"false\",\n   \"message\": \"Unable to signup\",\n   \"data\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response 500:",
          "content": "HTTP/1.1 500 Error on server side.\n{\n   \"success\": \"false\",\n   \"message\": \"Something went wrong\",\n   \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/media-link-module/mediaLink.route.js",
    "groupTitle": "MediaLink",
    "name": "MedialinkCreate"
  },
  {
    "type": "post",
    "url": "/media-link/<mediaLinkId>/vote",
    "title": "Vote [POST]",
    "group": "MediaLink",
    "description": "<p>This api is to vote on mediaLink by the user.</p>",
    "parameter": {
      "fields": {
        "param": [
          {
            "group": "param",
            "type": "String",
            "optional": false,
            "field": "mediaLinkId",
            "description": "<p>ID of the mediaLink.</p>"
          }
        ],
        "body": [
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "vote",
            "description": "<p>YES or NO.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n   \"success\": \"true\",\n   \"message\": \"Voted\",\n   \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response 403:",
          "content": "HTTP/1.1 403 Unable to vote.\n{\n   \"success\": \"false\",\n   \"message\": \"Unable to vote\",\n   \"data\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response 500:",
          "content": "HTTP/1.1 500 Error on server side.\n{\n   \"success\": \"false\",\n   \"message\": \"Something went wrong\",\n   \"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/media-link-module/mediaLink.route.js",
    "groupTitle": "MediaLink",
    "name": "PostMediaLinkMedialinkidVote"
  }
] });

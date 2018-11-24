const assert = require("assert");
const UserController = require("../mediaLink.controller");

describe("Dummy Controller", function() {
  describe("#get()", function() {
    it("should error when no data is present in the db", function() {
      const queryData = {
        status: true
      };
      UserController.get(queryData).catch(err => {
        assert.equal(err, new Error("Data not found"));
      });
    });
  });
  describe("#mediaLink()", function() {
    it("should not create data if body is empty", function() {
      const queryData = {};
      UserController.mediaLink(queryData)
        .then(data => {
          assert.not.exist(data);
        })
        .catch(err => {
          assert.exist(err);
        });
    });
  });
});

const express = require("express");
const router = express.Router();
const friendController = require("../controllers/friendController");

// default endpoint, gets all friends
router.get("/", friendController.getAllFriends);

// filter endpoint, gets friends matching the gender from 'gender' query parameter ie. /friends/filter?gender=male
router.get("/filter", friendController.filterFriends);

// 2. Get information about this request from the headers
router.get("/info", friendController.info);

// 3. Dynamic request param endpoint - get the friend matching the specific ID ie. /friends/3
router.get(":/id", friendController.getFriendById);

// a POST request with data sent in the body of the request, representing a new friend to add to our list
router.post("/", friendController.addFriend);

// 4. Complete this new route for a PUT request which will update data for an existing friend
router.put(":/id", friendController.updateFriend);

// 5 everything moved into controller

module.exports = router;

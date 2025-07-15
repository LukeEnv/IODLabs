// Controller for friend operations
const friends = require("../models/friends");

function getAllFriends(req, res) {
  res.json(friends);
}

function filterFriends(req, res) {
  let filterGender = req.query.gender;
  let filterLetter = req.query.letter;
  let matchingFriends = [...friends];

  if (filterGender) {
    matchingFriends = matchingFriends.filter(
      (friend) => friend.gender == filterGender
    );
  }
  if (filterLetter) {
    matchingFriends = matchingFriends.filter(
      (friend) =>
        friend.name &&
        friend.name[0].toLowerCase() === filterLetter.toLowerCase()
    );
  }
  if (matchingFriends.length > 0) {
    res.status(200).json(matchingFriends);
  } else {
    res.status(404).json({ error: "No friends matching filter" });
  }
}

function info(req, res) {
  const {
    "user-agent": userAgent,
    "content-type": contentType,
    accept,
  } = req.headers;
  res.json({ "user-agent": userAgent, "content-type": contentType, accept });
}

function getFriendById(req, res) {
  let friendId = parseInt(req.params.id);
  const friend = friends.find((f) => f.id === friendId);
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({ error: `No friend found with ID ${friendId}` });
  }
}

function addFriend(req, res) {
  let newFriend = req.body;
  if (!newFriend.name || !newFriend.gender) {
    res
      .status(500)
      .json({ error: "Friend object must contain a name and gender" });
    return;
  } else if (!newFriend.id) {
    newFriend.id = friends.length + 1;
  }
  friends.push(newFriend);
  res.status(200).json(newFriend);
}

function updateFriend(req, res) {
  let friendId = parseInt(req.params.id);
  let updatedFriend = req.body;
  let index = friends.findIndex((f) => f.id === friendId);
  if (index !== -1) {
    friends[index] = { ...friends[index], ...updatedFriend, id: friendId };
    res.status(200).json(friends[index]);
  } else {
    res.status(404).json({ error: `No friend found with ID ${friendId}` });
  }
}

module.exports = {
  getAllFriends,
  filterFriends,
  info,
  getFriendById,
  addFriend,
  updateFriend,
};

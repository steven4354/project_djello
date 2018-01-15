var express = require("express");
var router = express.Router();
var models = require("./../models");
//{}
var User = models.User;
var Board = models.Board;
var Card = models.Card;
var List = models.List;
var sequelize = models.sequelize;

// ----------------------------------------
// Create User
// ----------------------------------------

router.post("/users", (req, res) => {
  console.log("req =>", req.body);
  let body = req.body;
  var userParams = {
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    password: body.password
  };

  User.create(userParams)
    .then(user => {
      res.json(user);
    })
    .catch(e => res.send("error"));
});
//curl -H "Content-Type: application/json" -d '{"firstName":"xyz", "lastName": "ddk", "email": "skjdflkjsd@gmail.welcome", "password":"xyz"}' http://localhost:3000/api/users

// ----------------------------------------
// Create Board
// ----------------------------------------

router.post("/users/:id/newboard", async (req, res) => {
  //chage to board
  try {
    const id = req.params.id;

    let body = req.body;
    let boardName = body.boardName;

    let board = await Board.create({name: boardName, userId: id});

    res.json(board);
  } catch (e) {
    console.log("errror =>", e);
  }
});
//curl -H 'Content-Type: application/json' -d '{"boardName":"xyz"}' http://localhost:3000/api/users/10/newboard

// ----------------------------------------
// Grab A Board
// ----------------------------------------

router.get("/boards/:id", async (req, res) => {
  try {
    const id = req.params.id; //listId

    console.log("grab boards id params => ", id);

    Board.findAll({
      where: {id: id},
      include: [
        {
          model: List,
          include: [
            {
              model: Card
            }
          ]
        }
      ]
    }).then(boards => {
      res.json(boards[0]);
    });
  } catch (e) {
    console.log("errror =>", e);
  }
});
//just try this on the browser

// ----------------------------------------
// Create List
// ----------------------------------------

router.post("/boards/:id/newlist", async (req, res) => {
  //chage to list
  try {
    const id = req.params.id; //boardId

    let body = req.body;
    let listName = body.listName;

    let list = await List.create({name: listName, boardId: id});

    res.json(list);
  } catch (e) {
    console.log("errror =>", e);
  }
});
//curl -H 'Content-Type: application/json' -d '{"listName":"xyz"}' http://localhost:3000/api/boards/1/newlist

// ----------------------------------------
// Create Cards
// ----------------------------------------

router.post("/lists/:id/newcard", async (req, res) => {
  //chage to cards
  try {
    const id = req.params.id; //listId

    let body = req.body;
    let cardName = body.cardName;
    let cardBody = body.cardBody;

    let card = await Card.create({name: cardName, listId: id, body: cardBody});

    res.json(card);
  } catch (e) {
    console.log("errror =>", e);
  }
});
//curl -H 'Content-Type: application/json' -d '{"cardName":"xyz", "cardBody": "kjsldkfjsdljfsdlkfj"}' http://localhost:3000/api/lists/1/newCard

module.exports = router;

import React, {Component} from "react";

//importing a custom function to add some variety :)
import getRandomInt from "../helpers/randomgenerator";

//other components
import Card from "./Card";

//getting some bootstrap4 components
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";

class List extends Component {
  constructor(props) {
    super(props);
  }

  addCard(e) {
    e.preventDefault();
    console.log("e.target.value for addCard =>", e.target.value);
  }

  render() {
    //grabbing some props state for component usage
    const {listName, cards, databaseListId} = this.props;

    //the actual component
    return (
      <div class="board" id={`board${getRandomInt(3)}`}>
        <header>{listName}</header>
        <div
          class="cards"
          id={listName}
          listname={listName}
          databaseidforthislist={databaseListId}
        >
          {cards.map(card => <Card name={card.name} cardid={card.id} />)}
          <button
            value={databaseListId}
            onClick={this.addCard}
            class="add-card-button"
          >
            Add Card
          </button>
        </div>
      </div>
    );
  }
}

export default List;

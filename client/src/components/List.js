import React, {Component} from "react";

//importing a custom function to add some variety :)
import getRandomInt from "../helpers/randomgenerator";

//other components
import Card from "./Card";

class List extends Component {
  constructor(props) {
    super();
  }

  render() {
    //grabbing some props state for component usage
    const {listName, cards} = this.props;

    //the actual component
    return (
      <div class="board" id={`board${getRandomInt(3)}`}>
        <header>{listName}</header>
        <div class="cards" id={listName}>
          <Card />

          <Card />

          <Card />
        </div>
      </div>
    );
  }
}

export default List;

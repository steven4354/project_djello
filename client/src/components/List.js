import React, {Component} from "react";

//importing a custom function
import getRandomInt from "../helpers/randomgenerator";

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
        {" "}
        {/*^^ just to add some variety :)*/}
        <header>{listName}</header>
        <div class="cards" id="b1">
          <div class="card">
            <span class="cardtitle noselect">A great card #1</span>
          </div>
          <div class="card">
            <span class="cardtitle noselect">A great card #2</span>
          </div>
          <div class="card">
            <span class="cardtitle noselect">A great card #3</span>
          </div>
          <div class="card">
            <span class="cardtitle noselect">A great card #4</span>
          </div>
        </div>
      </div>
    );
  }
}

export default List;

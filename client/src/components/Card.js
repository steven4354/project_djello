import React, {Component} from "react";

class Card extends Component {
  render() {
    return (
      <div class="card">
        <span class="cardtitle noselect">{this.props.name}</span>
      </div>
    );
  }
}

export default Card;

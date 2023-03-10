import React from "react";
class Card extends React.Component{
  render() {
    const {title} = this.props;
    const {text} = this.props;

    return <div className="card">
      <div className="card-body">
        {title ? <h4 className="card-title">{title}</h4> : null}
        {text ? <p className="card-text">{text}</p> : null}
      </div>
    </div>
  }
}

export default Card;

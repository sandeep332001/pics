import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    text: "",
  };

  onInputChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.onSubmitt(this.state.text);
  }

  render() {
    return (
      <div className={`ui segment`}>
        <form onSubmit={this.onFormSubmit.bind(this)} className="ui form">
          <div className="field">
            <label htmlFor="name">Image Search :</label>
            <input
              id="name"
              type="text"
              value={this.state.text}
              onChange={(e) => this.setState({ text: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

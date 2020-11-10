import React, { Component } from "react";
class ImageCard extends Component {
  constructor(props) {
    super(props);

    this.imageRef = React.createRef();

    this.state = { spans: 0 };
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    console.log(height);
    const spans = Math.ceil(height / 10);
    console.log(spans);
    this.setState({ spans: spans });
  };

  render() {
    const { urls, description } = this.props;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} src={urls} alt={description} />
      </div>
    );
  }
}
export default ImageCard;

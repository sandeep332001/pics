import React, { Component } from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends Component {
  state = { images: [] };

  async onSearchSubmint(term) {
    const response = await unsplash.get("search/photos", {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className={`ui container`} style={{ marginTop: "10px" }}>
        <SearchBar onSubmitt={this.onSearchSubmint.bind(this)} />
        <ImageList imageList={this.state.images} />
      </div>
    );
  }
}

export default App;

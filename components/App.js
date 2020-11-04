import React from "react";
import unsplashAPI from "../API/unsplashAPI";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (input) => {
    const res = await unsplashAPI.get("/search/photos", {
      params: {
        query: input,
      },
    });
    this.setState({ images: res.data.results });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "30px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found {this.state.images.length} images
      </div>
    );
  }
}

export default App;

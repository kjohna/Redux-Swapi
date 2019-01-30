import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import Loader from "react-loader-spinner";
// import actions
import { fetchCharacters } from "../actions";

class CharacterListView extends React.Component {
  // constructor() {
  //   super();
  // }

  componentDidMount() {
    // call our action
    this.props.fetchCharacters();
  }

  render() {
    // if (this.props.fetching) {
    //   // return something here to indicate that you are fetching data
    //   console.log("loading...", console.log(this.props.fetching));
    //   return (
    //     <div>
    //       <p>Loading...</p>
    //       {/* <Loader type="Ball-Triangle" color="#00BFFF" height="90" width="60" /> */}
    //     </div>
    //   );
    // }
    console.log("fetching: ", this.props.fetching);
    console.log("characters length: ", this.props.characters.length)
    // debugger;
    return (
      <div className="CharactersList_wrapper">
        {this.props.fetching && (
          // <div> Loading... </div>
          <Loader type="Oval" color="#edea5e" height="90" width="60" />
        )}
        {this.props.error ? 
        <h1>Error: {this.props.error.message}</h1>
        : <CharacterList characters={this.props.characters} />
        }
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = (state) => {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching,
    error: state.charsReducer.error
  }
}

export default connect(
  mapStateToProps, /* mapStateToProps replaces null here */
  {
    /* action creators go here */
    fetchCharacters
  }
)(CharacterListView);

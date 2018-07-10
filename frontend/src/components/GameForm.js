import React, { Component } from 'react';
import GenreDropdown from './GenreDropdown';

export default class GameForm extends Component {
  state = {
    name: "",
    genre: {
      id: "",
      name: "",
    }
  }

  selectGenre = (event) => {
    const genre = this.props.genres.find(genre => genre.id == event.target.value);
    this.setState({ genre });
  }

  handleSubmit(event){
    event.preventDefault();
    debugger
  }

  render() {
    return (
      <div className="gameform">
        <form className="create" onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              placeholder="Filter board games by name"
            />
          </label>
          <GenreDropdown
            genres={this.props.genres}
            currentGenre={this.state.genre}
            handleDropdown={this.selectGenre}
          />
          <input type="submit" value="Add Game" />
        </form>
      </div>
    )
  }
}

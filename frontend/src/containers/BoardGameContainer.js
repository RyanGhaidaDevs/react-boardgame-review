import React, { Component } from 'react';
import GameFilters from './GameFilters';
import GenreDropdown from '../components/GenreDropdown';
import GamesTable from '../components/GamesTable';
import GameForm from '../components/GameForm';

export default class BoardGameContainer extends Component {
  state = {
    games: [],
    genres: [],
    currentGenre: {
      id: "",
      name: "",
    }, 
    filterName: ""
  }


  //Need to fetch data 

  componentDidMount() {
    fetch('http://localhost:3000/boardgames').then(response => response.json()).then(data=> this.setState({
      games: data
    }))

    fetch('http://localhost:3000/genres').then(response => response.json()).then(data=> this.setState({
      genres: data
    }, ()=> console.log(this.state)))
  }

  genreFilter = (event) => {
    console.log(event.target.value)
    // Option 1: match by name === value
    // const currentGenre = this.state.genres.find(genre => genre.name === event.target.value);
    // Option 2: change value to id in <option> and for controlled value in <select> and match by id === value
    //           Remember: The content of this attribute represents the value to be submitted with the form.
    //                     There's no rule about it having to match the name displayed.
    const currentGenre = this.state.genres.find(genre => genre.id == event.target.value);
    // Option 3: pull id out using index + data attribute, then match on id
    // const id = event.target.options[event.target.selectedIndex].dataset.value;
    // const currentGenre = this.state.genres.find(genre => genre.id == id);
    // Option 4: same as option 3 but use getAttribute
    // const id = event.target.options[event.target.selectedIndex].getAttribute('data-value');
    // const currentGenre = this.state.genres.find(genre => genre.id == id);

    this.setState({ currentGenre }, ()=> console.log(this.state));
  }


    nameFilter = (event) => {
      event.preventDefault();
      let filterName = event.target.name.value
      console.log(filterName)
      this.setState({filterName})

    }

    handleSubmit(event){
    event.preventDefault()
    

  }

  render() {
    return (
      <div className="board-game-container">
        <GameFilters
          genres={this.state.genres}
          currentGenre={this.state.currentGenre}
          handleGenreFilter={this.genreFilter}
          handleNameFilter={this.nameFilter}
        />
        <GameForm
          genres={this.state.genres}
          handleSubmit={this.handleSubmit}
        />
        <GamesTable  filterName={this.state.filterName} currentGenre={this.state.currentGenre.id} games={this.state.games} genres={this.state.genres}/>
      </div>
    )
  }
}

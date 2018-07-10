import React from 'react';
import Game from './Game';


const GamesTable = (props) => {

  let mapGames = () => {
    return props.games.map((game) => {
      if(props.currentGenre === "" && props.filterName === "") {
      return <Game game={game} key={game.id} name={game.name}/> 
    } else if (game.genre.id === props.currentGenre && props.filterName === "" ) {
      return <Game game={game} key={game.id} name={game.name}/>
    } else if (props.filterName !== "" && game.name === props.filterName){
      return <Game game={game} key={game.id} name={game.name}/>
    }
    })
  }

  return (
    <table className="games">
      <tbody>
        <tr>
          <th>
            <h3 className="">Name</h3>
              
          </th>
          <th>
            <h3 className="">Genre</h3>
              
          </th>
        </tr>
        {mapGames()}
      </tbody>
    </table>
  )
}

export default GamesTable;

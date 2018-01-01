import React, { Component } from 'react';
import { DragSource } from 'react-dnd';


// Components
import Tile from './components/Tile'
import SmartTile from './components/SmartTile'
import Warrior from './components/Warrior'

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import { 
  moveUnit,
  warriorCanMove
} from './Game'

import './App.css';

// Constants
import  {
  rows,
  columns,
  tileSize,
  gutter
} from './constants'


class App extends Component {
  constructor(props) {
    super(props);
  }


  renderTile(coords) {
    const r = coords[0];
    const c = coords[1];

    const tileContents =
      r === this.props.position[0] &&
      c === this.props.position[1] ?
      <Warrior /> :
      null;

    return (
      <div
        key={coords}
        // onClick={() => {
        //   console.log(r, c);
        //   this.updatePosition(coords);
        // }}
        >
        <SmartTile
          // updatePosition={() => {
          //   if(warriorCanMove()) {
          //     moveUnit();
          //   }
          // }}
          tileSize={tileSize}
          coords={coords}>
          { tileContents }
        </SmartTile>
      </div>
    )
  }

  render() {
    const tiles = [];

    for(let c = 0; c < columns; c++) {
      for(let r = 0; r < rows; r++) {
        tiles.push(this.renderTile([r, c]));
      }
    }

    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${columns}, ${ tileSize }px)`,
          gridTemplateRows: `repeat(${rows}, ${ tileSize }px)`,
          gridColumnGap: `${gutter}px`,
          gridRowGap: `${gutter}px`,
          width: `${tileSize * columns + gutter * (columns - 1)}px`
        }}
        className="">
        { tiles }
      </div>
    );
  }
}

// export default App;

export default DragDropContext(HTML5Backend)(App);

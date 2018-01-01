import { rows, columns } from './constants'


let position = [0, 0];
let observer = null;

function emitChange() {
  observer(position);
}

export function observe(o) {
  if (observer) {
    throw new Error('Multiple observers not implemented.');
  }

  observer = o;
  emitChange();
}

export function moveUnit(toX, toY) {
  position = [toX, toY];
  emitChange();
}

// Check if the warrior can move
// Returns a Boolean
export function warriorCanMove(coords) {
  const [ x, y ] = position;
  const [ toX, toY ] = coords;

  // Calculate the row & column deltas
  const rDelta = Math.abs(x - toX);
  const cDelta = Math.abs(y - toY);

  // console.log(rDelta, cDelta);
  
  // Check if the delta is less than or equal to 1
  if( rDelta <= 1 && cDelta <= 1 ) {
    return true;
  } else {
    return false;
  }
}
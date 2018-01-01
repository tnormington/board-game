import React, { Component } from 'react';

import { DropTarget } from 'react-dnd';
import { ItemTypes } from '../constants';

import {
    moveUnit,
    warriorCanMove
} from '../Game'

import Tile from './Tile'

const tileTarget = {
    canDrop(props, monitor) {
        // console.log(`canDrop props:`, props)
        return warriorCanMove(props.coords);
    },
    drop(props, monitor) {
        // console.log(monitor);
        moveUnit(props.coords[0], props.coords[1]);
    }
};

function collect(connect, monitor) {
    return {
      connectDropTarget: connect.dropTarget(),
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    }
}



class SmartTile extends Component {
    constructor(props) {
        super(props);
    }

    renderOverlay(color) {
        // console.log(color);
        // return color;
        return (
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: color,
          }} />
        )
    }

    render() {
        const {
            connectDropTarget,
            isOver,
            canDrop,
            children
        } = this.props;

        // console.log(isOver, canDrop);

        return connectDropTarget(
            <div style={{ position: 'relative' }}>
                <Tile {...this.props}>
                    { children }
                </Tile>
                {isOver && !canDrop && this.renderOverlay('red')}
                {!isOver && canDrop && this.renderOverlay('yellow')}
                {isOver && canDrop && this.renderOverlay('green')}
            </div>
        )
    }
}

export default DropTarget(ItemTypes.WARRIOR, tileTarget, collect)(SmartTile);
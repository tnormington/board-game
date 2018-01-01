import React, { Component } from 'react';
import { ItemTypes } from '../constants';
import { DragSource } from 'react-dnd';

const warriorSource = {
    beginDrag(props) {
      return {};
    }
};

function collect(connect, monitor) {
    return {
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging()
    }
}

class Warrior extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { connectDragSource, isDragging } = this.props;

        return connectDragSource(
            <div style={{
                    opacity: isDragging ? 0.5 : 1,
                    fontSize: 25,
                    fontWeight: 'bold',
                    cursor: 'move',
                    zIndex: 10
                }}>
                Warrior
            </div>
        )
    }
}

export default DragSource(ItemTypes.WARRIOR, warriorSource, collect)(Warrior);
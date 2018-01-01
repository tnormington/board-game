import React, { Component } from 'react';

class Tile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{
                height: `${this.props.tileSize}px`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: '#000',
                position: 'relative',
                userSelect: 'none',
            }}>
                <span
                    style={{
                        position: 'absolute',
                        top: '2px',
                        right: '2px',
                        fontSize: '12px'
                    }}
                    className="coords">{ this.props.coords }</span>
                {this.props.children}
            </div>
        )
    }
}

export default Tile;
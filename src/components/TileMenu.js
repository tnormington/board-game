import React, { Component } from 'react';

class TileMenu extends Component {
    render() {
        return (
            <div style={{
                padding: '6px',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)'
            }}>
                { this.props.options.map(option => {
                    <div>
                        { option.label }
                    </div>
                })}
            </div>
        )
    }
}

export default TileMenu;
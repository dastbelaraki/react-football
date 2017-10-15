import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <button data-leagueid={this.props.leagueId}>
                {this.props.text}
            </button>
        );
    }
}

export default Button;
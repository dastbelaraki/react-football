import React from 'react';

const Button = (props) => {
    return (
        <button type="button" className="btn btn-outline-info" onClick={props.handleClick} data-leagueid={props.leagueId}>
            {props.text}
        </button>
    );
};

export default Button;
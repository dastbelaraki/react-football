import React from 'react';

const Header = (props) => {
    return (
        <div className="btn-group btn-group-lg my-4" role="group" aria-label="Football Leagues">
            {props.children}
        </div>
    );
};

export default Header;
import React from 'react';

const Header = (props) => {
    return (
        <header>
            {props.children}
        </header>
    );
};

export default Header;
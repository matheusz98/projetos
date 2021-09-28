import React from 'react';
import PropTypes from 'prop-types';

function Header({ title }) {
    return (
        <header className="header">
            <h1 className="title">{title}</h1>
        </header>
    );
}

Header.defaultProps = {
    title: 'Agenda de Compromissos',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header;
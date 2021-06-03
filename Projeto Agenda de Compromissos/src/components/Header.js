import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function Header({ title }) {
    return (
        <header className="header">
            <h1 className="title">{title}</h1>
            <Button />
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
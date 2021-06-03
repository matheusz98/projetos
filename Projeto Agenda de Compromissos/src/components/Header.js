import React from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';

function Header({ title }) {
    return (
        <header className="header">
            <h1 className="title">{title}</h1>
            <button className="btn"><FaPlus /></button>
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
import React from 'react';
import { Link } from 'react-router';

import MenuItem from 'material-ui/MenuItem';

import './MenuItemLink.css';

const MenuItemLink = ({to, primaryText}) => {

    return(
        <MenuItem>
            <Link to={to} className="menu-item-link">
                {primaryText}
            </Link>
        </MenuItem>
    );
};

MenuItemLink.propTypes = {
    to: React.PropTypes.string.isRequired,
    primaryText: React.PropTypes.string.isRequired
}

export default MenuItemLink;
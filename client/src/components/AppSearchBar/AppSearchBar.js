import React, {Component} from 'react';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import NavigationOpen from 'material-ui/svg-icons/navigation/menu';

import MenuItemLink from '../MenuItemLink';

import { APP_NAME } from '../../constants';

export default class AppSearchBar extends Component {
  getLoginMenu() {
    return (<FlatButton label="Login" />);
  } 

  getLoggedMenu() {
    return (<IconMenu
      iconButtonElement={
        <IconButton><MoreVertIcon /></IconButton>
      }
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
      <MenuItem primaryText="Refresh" />
      <MenuItem primaryText="Help" />
      <MenuItemLink to='/login' primaryText='Sign out' />
    </IconMenu>);
  }

  render() {
    const { isLogged } = this.props;
    const rightElement = isLogged ? this.getLoggedMenu() : this.getLoginMenu();

    return (
      <div>
        <AppBar
          title={APP_NAME}
          iconElementLeft={ <IconButton><NavigationOpen /></IconButton> }
          iconElementRight={ rightElement }
        />
      </div>
    );
  }
}

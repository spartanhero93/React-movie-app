import React, { Component } from 'react'

import IconLinks from './IconLinks'

import AppBar from 'material-ui/AppBar'
import { withStyles } from 'material-ui/styles'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from 'material-ui/Drawer'
import IconButton from 'material-ui/IconButton'

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginisOpen: -12
  },
  fullList: {
    width: 'auto'
  }
}

class NavAppBar extends Component {
  state = {
    isOpen: false
  }

  toggleDrawer = (isOpen, open) => () => {
    this.setState({
      [isOpen]: open
    })
  }

  render () {
    const { classes } = this.props

    return (
      <div>
        <AppBar position='static'>
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color='inherit'
              aria-label='Menu'
            >
              <MenuIcon onClick={this.toggleDrawer('isOpen', true)} />
            </IconButton>

            <Typography
              variant='title'
              color='inherit'
              className={classes.flex}
            >
              MovieDB
            </Typography>
            <Button color='inherit'>Login</Button>
          </Toolbar>
          <Drawer
            open={this.state.isOpen}
            onClose={this.toggleDrawer('isOpen', false)}
          >
            <div
              tabIndex={0}
              role='button'
              onClick={this.toggleDrawer('isOpen', false)}
              onKeyDown={this.toggleDrawer('isOpen', false)}
            >
              <IconLinks />
            </div>
          </Drawer>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(NavAppBar)

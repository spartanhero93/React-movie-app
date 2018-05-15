import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import { withStyles } from 'material-ui/styles'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from 'material-ui/Drawer'
import List from 'material-ui/List'
import Divider from 'material-ui/Divider'
import FavoriteIcon from '@material-ui/icons/Favorite'

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  list: {
    width: 200
  },
  fullList: {
    width: 'auto'
  }
}

class NavAppBar extends Component {
  state = {
    left: false
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    })
  }

  render () {
    const { classes } = this.props

    const sideList = (
      <div className={classes.list}>
        <List>
          <IconButton
            color='primary'
            className={classes.button}
            aria-label='Search Top Rated'
          >
            <FavoriteIcon />
          </IconButton>
          Top Rated Movies
        </List>
        <Divider />
        <List>OK</List>
      </div>
    )
    return (
      <div>
        <AppBar position='static'>
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color='inherit'
              aria-label='Menu'
            >
              <MenuIcon onClick={this.toggleDrawer('left', true)} />
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
            open={this.state.left}
            onClose={this.toggleDrawer('left', false)}
          >
            <div
              tabIndex={0}
              role='button'
              onClick={this.toggleDrawer('left', false)}
              onKeyDown={this.toggleDrawer('left', false)}
            >
              {sideList}
            </div>
          </Drawer>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(NavAppBar)

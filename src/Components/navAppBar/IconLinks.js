import React from 'react'
import IconButton from 'material-ui/IconButton'
import List from 'material-ui/List'
import Divider from 'material-ui/Divider'
import FavoriteIcon from '@material-ui/icons/Favorite'

const IconLinks = props => {
  return (
    <div style={{ width: 200 }}>
      <List>
        <IconButton color='primary' aria-label='Search Top Rated'>
          <FavoriteIcon />
        </IconButton>
        Top Rated Movies
      </List>
      <Divider />
      <List>
        <IconButton color='primary' aria-label='Search Top Rated'>
          <FavoriteIcon />
        </IconButton>
        Top Rated Movies
      </List>
      <Divider />
      <List>
        <IconButton color='primary' aria-label='Search Top Rated'>
          <FavoriteIcon />
        </IconButton>
        Top Rated Movies
      </List>
      <Divider />
      <List>
        <IconButton color='primary' aria-label='Search Top Rated'>
          <FavoriteIcon />
        </IconButton>
        Top Rated Movies
      </List>
      <Divider />
      <List>
        <IconButton color='primary' aria-label='Search Top Rated'>
          <FavoriteIcon />
        </IconButton>
        Top Rated Movies
      </List>
      <Divider />
    </div>
  )
}
export default IconLinks

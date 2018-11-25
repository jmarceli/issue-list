import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LinkIcon from '@material-ui/icons/Link';
import OpenIcon from '@material-ui/icons/ExpandMore';
import CloseIcon from '@material-ui/icons/ExpandLess';

const styles = theme => ({});

const IssueItem = ({ url, title, state, body, id, isOpen, handleToggle }) => (
  <ListItem>
    <ListItemIcon>
      <IconButton aria-label={`Go to issue ${id}`} href={url}>
        <LinkIcon />
      </IconButton>
    </ListItemIcon>
    <ListItemText
      primary={`${title} (${state})`}
      secondary={isOpen ? body : null}
    />
    <ListItemSecondaryAction>
      <IconButton
        aria-label={`${isOpen ? 'Close' : 'Open'} description`}
        onClick={() => handleToggle()}
      >
        {isOpen ? <CloseIcon /> : <OpenIcon />}
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);

export default withStyles(styles)(IssueItem);

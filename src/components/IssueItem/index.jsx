import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Collapse from '@material-ui/core/Collapse';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LinkIcon from '@material-ui/icons/Link';
import OpenIcon from '@material-ui/icons/ExpandMore';
import CloseIcon from '@material-ui/icons/ExpandLess';

const styles = theme => ({
  collapse: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  body: {
    '& > p': {
      paddingLeft: 80,
    },
  },
});

const IssueItem = ({
  classes,
  url,
  title,
  state,
  body,
  id,
  isOpen,
  handleToggle,
}) => (
  <React.Fragment>
    <ListItem>
      <ListItemIcon>
        <IconButton aria-label={`Go to issue ${id}`} href={url}>
          <LinkIcon />
        </IconButton>
      </ListItemIcon>
      <ListItemText primary={`${title} (${state})`} />
      <ListItemSecondaryAction>
        <IconButton
          aria-label={`${isOpen ? 'Close' : 'Open'} description`}
          onClick={() => handleToggle()}
        >
          {isOpen ? <CloseIcon /> : <OpenIcon />}
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
    <ListItem className={classes.collapse}>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <ListItemText className={classes.body} secondary={body} />
      </Collapse>
    </ListItem>
  </React.Fragment>
);

export default withStyles(styles)(IssueItem);

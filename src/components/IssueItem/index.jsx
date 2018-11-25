import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import ListItem from '@material-ui/core/ListItem';

const styles = theme => ({});

const IssueItem = ({ url, title, state, body }) => (
  <ListItem>
    <a href={url}>{title}</a>
    <span>{state}</span>
    <span>{body}</span>
  </ListItem>
);

export default withStyles(styles)(IssueItem);

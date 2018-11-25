import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import IssueList from '../IssueList';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';

const styles = theme => ({
  root: {
    padding: 20,
  },
  app: {
    maxWidth: 800,
    margin: '0 auto',
    padding: 20,
  },
});

const App = ({ classes }) => (
  <div className={classes.root}>
    <CssBaseline />
    <Paper className={classes.app}>
      <Typography variant="title" component="h1">
        Latest 20 issues from facebook/react repo
      </Typography>
      <IssueList />
    </Paper>
  </div>
);

export default withStyles(styles)(App);

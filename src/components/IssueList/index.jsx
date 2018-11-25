import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Query, Mutation } from 'react-apollo';
import { GET_ISSUES } from '../../apollo/queries';
import { TOGGLE_ISSUE } from '../../apollo/mutations';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IssueItem from '../IssueItem';

const styles = theme => ({});

const IssueList = ({ classes }) => (
  <div>
    <Mutation mutation={TOGGLE_ISSUE}>
      {toggleIssue => (
        <List data-testid="issues-list">
          <Query query={GET_ISSUES}>
            {({ loading, error, data }) => {
              if (loading) {
                return (
                  <ListItem>
                    <ListItemText primary="Loading..." />
                  </ListItem>
                );
              }

              if (error) {
                return (
                  <ListItem>
                    <ListItemText
                      primary="Data fetching error"
                      secondary={JSON.stringify(error)}
                    />
                  </ListItem>
                );
              }

              return data.repository.issues.edges.map((issue, index) => (
                <IssueItem
                  key={index}
                  handleToggle={() =>
                    toggleIssue({
                      variables: { id: issue.node.id },
                    })
                  }
                  {...issue.node}
                />
              ));
            }}
          </Query>
        </List>
      )}
    </Mutation>
  </div>
);

export default withStyles(styles)(IssueList);

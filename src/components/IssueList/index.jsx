import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Query } from 'react-apollo';
import { GET_ISSUES } from '../../apollo/queries';
import List from '@material-ui/core/List';
import IssueItem from '../IssueItem';

const styles = theme => ({});

const IssueList = ({ classes }) => (
  <div>
    <Query query={GET_ISSUES}>
      {({ loading, error, data }) => {
        if (loading || error) {
          return <div>Loading...</div>;
        }
        return (
          <List data-testid="issues-list">
            {data.repository.issues.edges.map((issue, index) => (
              <IssueItem key={index} {...issue.node} />
            ))}
          </List>
        );
      }}
    </Query>
  </div>
);

export default withStyles(styles)(IssueList);

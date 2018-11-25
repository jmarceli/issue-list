import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Query } from 'react-apollo';
import { GET_ISSUES } from '../../apollo/queries';

const styles = theme => ({});

const IssueList = ({ classes }) => (
  <div>
    <Query query={GET_ISSUES}>
      {({ loading, error, data }) => {
        if (loading || error) {
          return <div>Loading...</div>;
        }
        return (
          <ul data-testid="issues-list">
            {data.repository.issues.edges.map((issue, index) => (
              <li key={index}>
                <a href={issue.node.url}>{issue.node.title}</a>
                <span>{issue.node.state}</span>
                <span>{issue.node.body}</span>
              </li>
            ))}
          </ul>
        );
      }}
    </Query>
  </div>
);

export default withStyles(styles)(IssueList);

import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Query, Mutation } from 'react-apollo';
import { GET_ISSUES } from '../../apollo/queries';
import { TOGGLE_ISSUE } from '../../apollo/mutations';
import List from '@material-ui/core/List';
import IssueItem from '../IssueItem';

const styles = theme => ({});

const IssueList = ({ classes }) => (
  <div>
    <Mutation mutation={TOGGLE_ISSUE}>
      {toggleIssue => (
        <Query query={GET_ISSUES}>
          {({ loading, error, data }) => {
            if (loading || error) {
              return <div>Loading...</div>;
            }
            return (
              <List data-testid="issues-list">
                {data.repository.issues.edges.map((issue, index) => (
                  <IssueItem
                    key={index}
                    handleToggle={() =>
                      toggleIssue({
                        variables: { id: issue.node.id },
                      })
                    }
                    {...issue.node}
                  />
                ))}
              </List>
            );
          }}
        </Query>
      )}
    </Mutation>
  </div>
);

export default withStyles(styles)(IssueList);

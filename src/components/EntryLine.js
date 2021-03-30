import React from 'react';
import { Grid, Icon, Segment } from 'semantic-ui-react';

function EntryLine({ description, value, isExpense = false }) {
  return (
  <Segment color={isExpense ? 'red' : 'green'}>
    <Grid columns={3} textAlign="right">
      <Grid.Row>
        <Grid.Column width={7} textAlign="left">
         {description}
        </Grid.Column>
        <Grid.Column width={3} textAlign="center">
          {value}
        </Grid.Column>
        <Grid.Column width={5}>
          <Icon name="edit" bordered></Icon>
          <Icon name="trash" bordered></Icon>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
  );
}

export default EntryLine;
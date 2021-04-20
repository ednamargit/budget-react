import React, { Fragment } from 'react';
import { Grid, Icon, Segment } from 'semantic-ui-react';

function EntryLine(
  //Destructuring all values from inside that entry at once
  // { entry:
  //   { id, description, value, isExpense = false, deleteEntry }}
    { id, description, value, isExpense = false, deleteEntry, setIsOpen }) {
  
  
  return (
  <Fragment>
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
            <Icon name="edit" bordered onClick={()=>setIsOpen(true)}></Icon>
            <Icon name="trash" bordered onClick={() => deleteEntry(id)}></Icon>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </Fragment>  
  );
}

export default EntryLine;
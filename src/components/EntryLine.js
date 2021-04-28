import React, { Fragment } from 'react';
import { Grid, Icon, Segment } from 'semantic-ui-react';
import { useDispatch } from 'react-redux'; 
import { removeEntryRedux } from '../actions/entries.actions';

function EntryLine(
  //Destructuring all values from inside that entry at once
  // { entry:
  //   { id, description, value, isExpense = false, deleteEntry }}
    { id, description, value, isExpense = false, setIsOpen, editEntry }) {
  
  
  const dispatch = useDispatch(); 

  return (
  <Fragment>
    <Segment color={isExpense ? 'red' : 'green'}>
      <Grid columns={3} textAlign="right">
        <Grid.Row>
          <Grid.Column width={7} textAlign="left">
          {description}
          </Grid.Column>
          <Grid.Column width={3} textAlign="center">
            ${value}
          </Grid.Column>
          <Grid.Column width={5}>
            <Icon name="edit" bordered onClick={()=>editEntry(id)}></Icon>
            <Icon name="trash" bordered onClick={() => dispatch(removeEntryRedux(id))}></Icon>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </Fragment>  
  );
}

export default EntryLine;
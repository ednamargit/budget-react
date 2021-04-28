import React from "react";
import { Form } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import EntryForm from "./EntryForm";
import { addEntryRedux } from './../actions/entries.actions';
import { useState } from "react";
import { useDispatch } from 'react-redux'; 
import { v4 as uuidv4 } from 'uuid'; 

function NewEntryForm() {

  //With a control component in useState, we are gonna use an empty string, to avoid that react complains
  
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(true);
  const dispatch = useDispatch(); 
 
  function addEntry() {
    dispatch(
      addEntryRedux({
        id: uuidv4(),
        description,
        value,
        isExpense
      })
    );
    setDescription('');
    setValue('');
    setIsExpense(true); 
  }

  return (
    <Form unstackable>
      <EntryForm 
         description={description}
         value={value}
         isExpense={isExpense}
         setDescription={setDescription}
         setValue={setValue}
         setIsExpense={setIsExpense}
      />
      <ButtonSaveOrCancel
        addEntry={addEntry}
      />
    </Form>
  );
}

export default NewEntryForm;

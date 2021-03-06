import "./App.css";
import { Container } from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import { useState, useEffect } from "react";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";
import { useSelector } from 'react-redux'; 


function App() {
 
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const [incomeTotal, setIncomeTotal] = useState(0); 
  const [expenseTotal, setExpenseTotal] = useState(0); 
  const [total, setTotal] = useState(0); 
  const entries = useSelector(state => state.entries); 

  useEffect(() => {
    if(!isOpen && entryId) {
      const index = entries.findIndex((entry) => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense; 
      //setEntries(newEntries);
      resetEntry();  
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  useEffect(() => {
    let totalIncomes = 0;
    let totalExpenses = 0;
    entries.map(entry => {
       if(entry.isExpense) {
         return totalExpenses += Number(entry.value);
       } 
         return totalIncomes += Number(entry.value); 
    });

    setTotal(totalIncomes - totalExpenses); 
    setIncomeTotal(totalIncomes);
    setExpenseTotal(totalExpenses); 
  }, [entries]);


  function editEntry(id) {
    console.log(`edit entry with id ${id}`);
    if (id) {
      const index = entries.findIndex(entry => entry.id === id);
      const entry = entries[index]; 
      setEntryId(id); 
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense); 
      setIsOpen(true);
    }
  }

  function addEntry() {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense,
    });

    //setEntries(result);
    resetEntry(); 
  }

  function resetEntry() {
    setDescription('');
    setValue('');
    setIsExpense(true); 
  }

  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title="Your Balance: " value={total} size="small" />

      <DisplayBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal} />
      <MainHeader title="History" type="h3" />
      {/* <Header as="h3">History</Header> */}

      {/* <EntryLine description={entries[0].description} value={entries[0].value} isExpense={entries[0].isExpense} /> */}

      <EntryLines
        entries={entries}
        editEntry={editEntry}
      />

      {/* <EntryLine description="Expense" value="5,00" isExpense={true}/> */}

      <MainHeader title="Add new transaction" type="h3" />

      <NewEntryForm
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />

      <ModalEdit
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
    </Container>
  );
}

export default App;



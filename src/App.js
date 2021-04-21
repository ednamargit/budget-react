import "./App.css";
import { Container } from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import { useState } from "react";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";

function App() {
  const [entries, setEntries] = useState(initialEntries);
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  function deleteEntry(id) {
    const result = entries.filter((entry) => entry.id !== id);
    setEntries(result);
  }

  function editEntry(id) {
    console.log(`edit entry with id ${id}`);
    if (id) {
      const index = entries.findIndex(entry => entry.id === id);
      const entry = entries[index]; 
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense); 
      setIsOpen(true);
    }
  }

  function addEntry(description, value, isExpense) {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense,
    });

    setEntries(result);
  }

  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title="Your Balance: " value="2520,25" size="small" />

      <DisplayBalances />
      <MainHeader title="History" type="h3" />
      {/* <Header as="h3">History</Header> */}

      {/* <EntryLine description={entries[0].description} value={entries[0].value} isExpense={entries[0].isExpense} /> */}

      <EntryLines
        entries={entries}
        deleteEntry={deleteEntry}
        setIsOpen={setIsOpen}
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

var initialEntries = [
  {
    id: 1,
    description: "Work income",
    value: "$1000,00",
    isExpense: false,
  },
  {
    id: 2,
    description: "Water Bill",
    value: "$20,00",
    isExpense: true,
  },
  {
    id: 3,
    description: "Rent",
    value: "$300,00",
    isExpense: true,
  },
  {
    id: 4,
    description: "Power Bill",
    value: "$50,00",
    isExpense: true,
  },
];

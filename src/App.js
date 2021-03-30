import "./App.css";
import { Container } from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import { useState } from "react";
import EntryLines from "./components/EntryLines";

function App() {
  const [entries, setEntries] = useState(initialEntries);

  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title="Your Balance: " value="2520,25" size="small" />

      <DisplayBalances />
      <MainHeader title="History" type="h3" />
      {/* <Header as="h3">History</Header> */}

      {/* <EntryLine description={entries[0].description} value={entries[0].value} isExpense={entries[0].isExpense} /> */}

     <EntryLines entries={entries} />

      {/* <EntryLine description="Expense" value="5,00" isExpense={true}/> */}

      <MainHeader title="Add new transaction" type="h3" />

      <NewEntryForm />
    </Container>
  );
}

export default App;

var initialEntries = [
  {
    description: "Work income",
    value: "$1000,00",
    isExpense: false,
  },
  {
    description: "Water Bill",
    value: "$20,00",
    isExpense: true,
  },
  {
    description: "Rent",
    value: "$300,00",
    isExpense: true,
  },
  {
    description: "Power Bill",
    value: "$50,00",
    isExpense: true,
  },
];

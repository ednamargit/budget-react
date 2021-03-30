import "./App.css";
import { Container } from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from "./components/EntryLine";


function App() {
  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title="Your Balance: " value="2520,25" size="small" />
    
      <DisplayBalances />
      <MainHeader title="History" type="h3" />
      {/* <Header as="h3">History</Header> */}

      <EntryLine description="Income" value="10,00" />
      <EntryLine description="Expense" value="5,00" isExpense={true}/>

      
      <MainHeader title="Add new transaction" type="h3"/>
    
      <NewEntryForm />
    </Container>
  );
}

export default App;

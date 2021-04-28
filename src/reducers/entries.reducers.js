
  //Reducers should not have side effects

 const reducer = (state = initialEntries, action) => {
    switch (action.type) {
      case 'ADD_ENTRY':
        const newEntriesAdd = state.concat({ ...action.payload }); 
        return newEntriesAdd;
      case 'REMOVE_ENTRY':
        const newEntriesRemove = state.filter(entry => entry.id !== action.payload.id); 
        return newEntriesRemove; 
      default:
        return state;
    } 
  }; 

  export default reducer; 

  var initialEntries = [
    {
      id: 1,
      description: "Work income redux 1",
      value: 1000.00,
      isExpense: false,
    },
    {
      id: 2,
      description: "Water Bill redux",
      value: 20.00,
      isExpense: true,
    },
    {
      id: 3,
      description: "Rent redux",
      value: 300.00,
      isExpense: true,
    },
    {
      id: 4,
      description: "Power Bill redux",
      value: 50.00,
      isExpense: true,
    },
  ];

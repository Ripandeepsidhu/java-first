// create an account object

// the object should hold all of our logic

// THE ACCOUNT OBJECT SHOULD HAVE THE FOLLWOING PROPERTIES:
// name: the account holders name, should be a string
// expenses: an array that should hold all of your expenses, can be empty from start
// income: an array that should hold all of your income, can be empty from start
// addExpenses: a function that vill add an expense to the expenses array
// addIncome: a function that vill add an income to the income array
// listAllExpenses: a function that should list all the expenses in the expenses array
// getSummary: a function that should summarize your total balances. It should show your total
// income, your total expenses and also calculate your current balances (income - expenses).
const accountObject = {
    name: "Ripan",
    expenses: [],
    incomes: [],
    addExpenses: function () {
        const expenseAmount = parseFloat(prompt("What was your expense(rent/gas/food etc)?"));
        this.expenses.push(expenseAmount);
        console.log(this.expenses);
        menu();
    },
    addIncome: function () {
      // 1. we need a prompt to ask the user "How much was your income?"
      const incomeAmount = parseFloat(prompt("How much was your income?"));
      // 2. we want to save the user input in a variable, incomeAmount
      // 3. then we use the push() method to add the new income to the array
      this.incomes.push(incomeAmount);
      // just for checking that it works
      console.log(this.incomes);
      // 4. we want to show the menu to the user again
      menu();
    },
    listAllExpenses: function () {},
    getSummary: function () {},
  };
  // create a function called menu()
  
  // the function menu() should only be responsible to show the different choices
  // for the user.
  
  // The menu() function should display the menu with different choices for the user
  // depending on what the user selects from the menu you should call on the correct
  // method or poperty from the account object. You can use a switch or if/else statement for your
  // different menu choices. Please motivate you choice in a comment.
  
  // CODE TO HELP YOU GET STARTED
  
  // Here are some code snippets to help you get started. You need to place them at the correct
  // place in your code but this is the logic for some parts of your assignment.
  // if we want to take an input from the user in a quite nice way we can use the propmt() function
// the prompt will show a window to the user where we can add a message and it will also display
// an input field where the user can type something. In order to make this work a bit easier
// we need to wrap the propmt() in a function called parseFloat(). Why is that? You need to do some
// googling anf the put your answer in a comment in your code.
// the syntax you can use looks like this:

function menu() {
    const choice = parseFloat(
      prompt(
        "EXPENSE TRACKER" +
          "\n" +
          "Select a choice 1)Add Income 2)Add Expense 3)List all Expenses 4)Get Summary"
      )
    );
  
    //console.log(choice);
    // if (choice == 1)
    if (choice === 1) {
      accountObject.addIncome();
    } else if (choice === 2) {
        accountObject.addExpenses();
      // first call object and then function like the same way as choice === 1
    }if(rent){
        const rentAmount = parseFloat(prompt("How much was your expense?"));
    }
  }
  
  // important to call the function otherwise code wint run
  menu();
  /* const amount = parseFloat(
  prompt(
    "EXPENSE TRACKER" +
      "\n" +
      "Select a choice 1)Add Income 2)Add Expense 3)List all Expenses 4)Get Summary"
  )
); 
if (choice == 1) {
  parseFloat(propmpt("How old are you?"));
} else if (accountObject[this.addExpenses]) {
  const age = parseFloat(propmpt("How old are you?"));
}*/
// the answer that the user will put in the input box will get stored in the variable amount.

// HINT: you will need to use array methods in this assignment and there is one very basic one
// that is important. It is the method for adding something to an existing array, which one is that?

// In order to show all elements in an array we need to loop through it. In this assignment a
// forEach loop would be good to use. If you want to display the outcome of each element in the
// array on separate lines you can add:
//("\n");
// for example:
//alert("This is a message " + "\n" + "with a new line");
// to your ouput. This will make the nes output on a new line.

// to make the menu look nice we should not console.log any output. Instead we shoul use either alert()
// or propmt()
// we use alert() when we just want to display something to the user, for example a message:
//alert("This is a message in an alert box!");
// we use the prompt() when we want to ask the user to do something cause the prompt()
// will display any message that we want and also display an input field where the user
// can type an input. Like this:
//const age = parseFloat(propmpt("How old are you?"));
// whatever the user types in the input field will be stored in the variable age.
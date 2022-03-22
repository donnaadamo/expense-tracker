import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

function Expenses(props) {

    return (
        <Card className="expenses">
          {props.data.map(i => <ExpenseItem
            title={i.title}
            amount={i.amount}
            date={i.date}
          />)}
        </Card>
      );
}

export default Expenses;
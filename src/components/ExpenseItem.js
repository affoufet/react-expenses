import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
    const today = new Date(2001,2,28);
    const title = 'Car Insurance';
  return (
    <div className="expense-item">
      <div><ExpenseDate date={props.date}/></div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">$294.67</div>
      </div>
    </div>
  );
}

export default ExpenseItem;

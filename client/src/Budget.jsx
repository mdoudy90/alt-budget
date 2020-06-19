import React from "react";
import PieChart from './components/PieChart';
import Comparison from './components/Comparison';
import dataParser from './helpers/dataParser';

class Budget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        Date: new Date(),
        Description: '',
        Amount: '',
        Category: '',
        'Account Name': '',
        'Transaction Type': 'debit'
      },
      chartData: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.resetFormState = this.resetFormState.bind(this);
    this.setChartData = this.setChartData.bind(this);
  }

  componentDidMount() {
    this.props.getUserData();
    this.setChartData();
  }

  handleChange() {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ form: { ...this.state.form, ...{[name]: value} } });
  }

  handleClick(e) {
    e.preventDefault();
    Promise.resolve(this.props.addTransaction(this.state.form))
      .then(this.resetFormState)
      .then(setTimeout(this.setChartData, 500));
  }

  setChartData() {
    console.log('setting data')
    Promise.resolve(dataParser(this.props.transactions)).then((chartData) => {
      this.setState({chartData: [['Category', 'Transactions'], ...chartData]});
    });
  }

  resetFormState() {
    this.setState({ form: {
      Date: new Date(),
      Description: '',
      Amount: '',
      Category: '',
      'Account Name': '',
      'Transaction Type': 'debit'
    }});
  }

  render() {
    return (
      <div className='component-container'>
        <form className="user-form expense-form">
          <h2>EXPENSE TRACKER</h2>
            <input
              name="Description"
              type="text"
              placeholder='Description'
              value={this.state.form.Description}
              onChange={this.handleChange}
            />
            <input
              name="Amount"
              type="number"
              placeholder='Amount'
              value={this.state.form.Amount}
              onChange={this.handleChange}
            />
          <input type="text" list="categories" name="Category" placeholder='Category' value={this.state.form.Category} onChange={this.handleChange} />
          <datalist id="categories">
            <option>Groceries</option>
            <option>Food & Dining</option>
            <option>Alcohol & Bars</option>
            <option>Movies/TV</option>
            <option>Cash/ATM</option>
            <option>Transportation</option>
            <option>Rent/Utilities</option>
            <option>Miscellaneous</option>
          </datalist>
        <button
          onClick={this.handleClick}
        >
          Submit
        </button>
        </form>
      <PieChart chartData = { this.state.chartData }/>
      <Comparison preferences = {this.props.preferences} badSpending = { dataParser(this.props.transactions, 'Alcohol & Bars') }/>
      </div>
    );
  }
}

export default Budget;

import React from "react";

class Budget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        purchase: "",
        cost: 0.0,
        category: "",
      },
      transactions: this.props.transactions,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.getBudget();
    //mount budget graph
  }

  handleChange() {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="budgetform">
        Tell us about your purchase:
        <form>
          <label>
            Purchase:{" "}
            <input
              name="purchase"
              type="text"
              value={this.state.item}
              onChange={this.handleChange}
            />
          </label>
          {"   "}
          <label>
            {" "}
            <input
              name="cost"
              type="number"
              value={this.state.cost}
              onChange={this.handleChange}
            />
          </label>
          <input type="text" list="categories" name="category" />
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
        </form>
        <button
          onClick={() => {
            this.props.addTransaction(this.state.form);
          }}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default Budget;

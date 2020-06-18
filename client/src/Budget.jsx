import React from "react";

//should be stateful, will render view based on state

class Budget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "input",
      item: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // renderView() {
  //   switch (view) {
  //     case "budget": {
  //       //return budget google-reacts
  //     }
  //     case "input": {
  //       //return input form below
  //     }
  //   }
  // }

  handleChange() {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [item]: value
    })
  }

  render() {
    return (
      <div className="budgetform">Let's create a budget!
        <form>

          <input type="text" onChange={() => this.handleChange}></input>

        </form>
      </div>
    );
  }
}

export default Budget;

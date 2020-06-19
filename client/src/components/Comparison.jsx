import React from "react";
import axios from 'axios';

class Comparison extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      altProductData: [],
      isFetching: true,
    }
    this.getAltProducts = this.getAltProducts.bind(this);
  }

  getAltProducts() {
    let minPrice = Math.floor(this.props.badSpending * .9);
    let maxPrice = Math.floor(this.props.badSpending * 1.1);
    let keyword = this.props.preferences.length ? this.props.preferences[Math.floor(Math.random() * this.props.preferences.length)] : 'watch';

    let productParams = JSON.stringify({ minPrice, maxPrice, keyword });
    axios.get('/alternatives', { headers: { productParams }} )
    .then(({data}) => {
      this.setState({ altProductData: data[0], isFetching: false })
    })
    .catch((err) => {
      console.log('Alt product display unavailable');
    })
  }

  componentDidMount() {
    this.getAltProducts();
  }

  render() {
    return (

      <div>
      {this.state.isFetching ? <div>Loading...</div> : <div>

      <p>Spent ${this.props.badSpending} on Alcohol & Bars</p>
      <div>Instead, could have bought</div>
      <div><img src={`${this.state.altProductData.Images[0].url_fullxfull}`} style={{height: '200px'}}/></div>
      <div>{ this.state.altProductData.price }</div>
      <div>{ this.state.altProductData.title }</div>
      <div>{ this.state.altProductData.url }</div>
      <div>{ this.state.altProductData.description }</div>

      </div>}
      </div>
    )

    ;
  }
}

export default Comparison;


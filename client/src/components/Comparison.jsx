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
    let minPrice = Math.floor(this.props.badSpending * .8);
    let maxPrice = Math.floor(this.props.badSpending);
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
      <div className = 'component'>
        <h2>ALTERNATIVE CHOICE</h2>
        {
        this.state.isFetching ?
          <div style={{paddingLeft: '15px'}}>Loading...</div> :
          <div className='comparison-component'>
            <div>${this.props.badSpending} on Alcohol & Bars</div>
            <div><span className = 'vs-sign'>VS</span></div>
            <div>{ `$${this.state.altProductData.price}` } on <a href={`${this.state.altProductData.url}`}>{ `${this.state.altProductData.title.split('').slice(0,30).join('')}...` }</a>
            </div>
            <div><a href={`${this.state.altProductData.url}`}><img src={`${this.state.altProductData.Images[0].url_fullxfull}`}/></a></div>
          </div>
        }
      </div>
    );
  }
}

export default Comparison;


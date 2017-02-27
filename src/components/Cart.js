import React from 'react';

class Cart extends React.Component {
  constructor() {
    super();
    this.renderOrder = this.renderOrder.bind(this);
    this.priceHelper = this.priceHelper.bind(this);
  }

  priceHelper(total) {
    return '$ ' + total.toFixed(2);
  }

  renderOrder(key) {
    const menu = this.props.menu[key];
    const count = this.props.order[key];

    return (
      <div className='cart-item'>
        <img src={menu.image} alt={menu.name} />
        <h5>{menu.name}</h5>
        <div className='count'>{count}</div>
        <button className='remove' onClick={() => this.props.RemoveToCart(key)}>X</button>
      </div>
    )
  }

  render () {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      return prevTotal + (this.props.order[key] * this.props.menu[key].price || 0)
    }, 0);
    return (
      <div className='cart'>
        <div className='menuheader'>
          <h3>Your Order</h3>
          <h4>Total: {this.priceHelper(total)}</h4>
        </div>
        {orderIds.map(this.renderOrder)}
      </div>
    )
  }
}

export default Cart;

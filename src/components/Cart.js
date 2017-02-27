import React from 'react';

class Cart extends React.Component {
  constructor() {
    super();
    this.renderOrder = this.renderOrder.bind(this);
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
    return (
      <div className='cart'>
        <div className='menuheader'>
          <h3>Your Order</h3>
        </div>
        {orderIds.map(this.renderOrder)}
      </div>
    )
  }
}

export default Cart;

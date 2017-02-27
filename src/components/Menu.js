import React from 'react';

class Menu extends React.Component {
  render () {
      const details = this.props.details;
      if (details.category !== this.props.menuInfo) { return null; }
      return (
        <div className='item' onClick={()=>this.props.AddToCart(this.props.index)}>
          <img src={details.image} alt={details.name} />
          <h4>{details.name}</h4>
        </div>
      )
  }
}

export default Menu;

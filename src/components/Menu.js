import React from 'react';

class Menu extends React.Component {
  render () {
      const details = this.props.details;
      return (
        <div className='item'>
          <img src={details.image} alt={details.name} />
          <h4>{details.name}</h4>
        </div>
      )
  }
}

export default Menu;

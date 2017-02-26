import React from 'react';

class MenuHeader extends React.Component {
  render () {
      return (
        <div className="menuheader">
          <h2>{this.props.name[this.props.index].name}</h2>
        </div>
      )
  }
}

export default MenuHeader;

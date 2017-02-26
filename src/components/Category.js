import React from 'react';

class Category extends React.Component {
  render () {
      const { details, index } = this.props;
      return (
        <div className="category">
          <img src={details.image} onClick={() => this.props.menuSelect(index)} alt={details.name} />
          <h3 className="category-name">
            {details.name}
          </h3>
        </div>
      )
  }
}

export default Category;

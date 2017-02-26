import React from 'react';
import Header from './Header';
import Menu from './Menu';
import Cart from './Cart';
import Category from './Category';
import defaultCategory from '../defaultCategory';
import mccafe from '../mccafe';

class App extends React.Component {
  constructor() {
    super();
    this.menuSelect = this.menuSelect.bind(this);
    this.state = {
      category: {},
      menu: {}
    }
  }

  componentWillMount() {
    this.setState({
      category: defaultCategory,
      menu: mccafe
    });
  }

  menuSelect(index) {
    console.log(index);
  }

  render () {
    return (
      <div className="whole-screen">
        <div className="flex-container">
          <div className="nav-screen">
            <Header />
            <div className='categories'>
              {
                Object
                  .keys(this.state.category)
                  .map(key => <Category key={key} index={key} details={this.state.category[key]} menuSelect={this.menuSelect}/>)
              }
            </div>
          </div>
          <div className="rest-screen">
            <div className="menu">
              {
                Object
                  .keys(this.state.menu)
                  .map(key => <Menu key={key} index={key} details={this.state.menu[key]}/>)
              }
            </div>
            <Cart />
          </div>
        </div>
      </div>
    )
  }
}

export default App;

import React from 'react';
import Header from './Header';
import Menu from './Menu';
import Cart from './Cart';
import Category from './Category';
import MenuHeader from './MenuHeader';

//import data
import defaultCategory from '../defaultCategory';
import mccafe from '../mccafe';
import burger from '../burger';

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
      menuInfo: 'mccafe',
      menu: mccafe
    });
  }

  menuSelect(index) {
    switch (index) {
      case 'mccafe':
        this.setState({
          menuInfo: index,
          menu: mccafe
        });
        break;
      case 'burger':
        this.setState({
          menuInfo: index,
          menu: burger
        });
        break;
      default:
        this.setState({
          menuInfo: index,
          menu: mccafe
        });
        break;
    }
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
              <MenuHeader name={this.state.category} index={this.state.menuInfo} />
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

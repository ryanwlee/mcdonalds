import React from 'react';
import Header from './Header';
import Menu from './Menu';
import Cart from './Cart';
import Category from './Category';
import MenuHeader from './MenuHeader';

//import data
import defaultCategory from '../defaultCategory';
import defaultMenu from '../defaultMenu';

class App extends React.Component {
  constructor() {
    super();
    this.menuSelect = this.menuSelect.bind(this);
    this.AddToCart = this.AddToCart.bind(this);
    this.RemoveToCart = this.RemoveToCart.bind(this);

    this.state = {
      category: {},
      menu: {},
      menuInfo: '',
      order: {}
    }
  }

  componentWillMount() {
    this.setState({
      category: defaultCategory,
      menuInfo: 'mccafe',
      menu: defaultMenu
    });
  }

  menuSelect(index) {
    this.setState({ menuInfo: index });
  }

  AddToCart(index) {
    const order = {...this.state.order};
    order[index] = order[index] + 1 || 1;
    this.setState({order});
  }

  RemoveToCart(index) {
    const order = {...this.state.order};
    if (order[index] === 1) { delete order[index]; }
    else { order[index] = order[index] - 1; }
    this.setState({ order });
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
                  .map(key => <Menu key={key} index={key} details={this.state.menu[key]} menuInfo={this.state.menuInfo} AddToCart={this.AddToCart}/>)
              }
            </div>
            <Cart menu={this.state.menu} order={this.state.order} RemoveToCart={this.RemoveToCart} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;

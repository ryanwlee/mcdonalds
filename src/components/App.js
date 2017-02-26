import React from 'react';
import Header from './Header';
import Menu from './Menu';
import Cart from './Cart';
import Category from './Category';
import defaultCategory from '../defaultCategory';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      category: {}
    }
  }

  componentWillMount() {
    this.setState({
      category: defaultCategory
    });
    console.log("test");
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
                  .map(key => <Category key={key} index={key} details={this.state.category[key]} />)
              }
            </div>
          </div>
          <div className="rest-screen">
            <Menu />
            <Cart />
          </div>
        </div>
      </div>
    )
  }
}

export default App;

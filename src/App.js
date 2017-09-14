import * as React from 'react';
import { Button, Input, Tabs } from './components';
import { Ripple } from './common';
import './App.css';
import './common/ripple.css';

class App extends React.Component {

  render() {
    const nav = {
      itemList :[
        {
          name: 'ITEM ONE'
        },
        {
          name: 'ITEM TWO'
        },
        {
          name: 'THREE'
        }
      ],
      ripple: {
        fn: Ripple,
        color: 'gray'
      }
    };

    const btn1 = {
      ripple: {
        fn: Ripple,
        color: 'gray'
      }
    }

    const btn2 = {
      className: ['black-white', 'boxshadow'],
      ripple: {
        fn: Ripple,
        color: 'white'
      }
    }

    return (
      <div className="App">
        <div className='component'>
          <Tabs data={nav} ></Tabs>
        </div>
        <div className='component'>
          <Button data={btn1} >FLAT</Button>
          <Button data={btn2} >RAISED</Button>
        </div>
        <div className='component'>
          <Input>Text Field</Input>
        </div>
      </div>
    );
  }
}

export default App;
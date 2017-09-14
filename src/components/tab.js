import * as React from 'react';
import './tab.css';

class Tab extends React.Component {

  constructor() {
    super();
    this.tabClick = this.tabClick.bind(this);
  }

  componentDidMount() {
    this.init();
  }

  init() {
    /**
     * 추가할 className이 있다면, 체크 후 추가.
     * 각 컴포넌트마다 style이 다를경우, 클래스를 추가하여 Css로 변경하기 위하여
     */
    const className = this.checkClassName(this.props);
    if (className.length !== 0) {
      const elem = this.refs.myTab;
      className.forEach(classname => this.addClassName(elem, classname));
    }
  }

  /**
   * 추가할 classname이 있는지 확인
   */
  checkClassName(_props) {
    return ('data' in _props && 'className' in _props.data) ? _props.data.className : [];
  }

  /**
   * classname추가
   */
  addClassName(_elem, _classname) {
    return _elem.classList.add(_classname);
  }

  tabClick(e) {
    this.props.tabClick(e);
  }

  render() {
    const name = this.props.children;
    const value = this.props.value;
    return (
      <li className='tab' value={value} ref='myTab'>
         <a onClick={this.tabClick}>{name}</a>
      </li>
    );
  }
}

export default Tab;
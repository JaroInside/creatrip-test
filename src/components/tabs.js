import * as React from 'react';
import { Tab } from '.';
import './tabs.css';

class Tabs extends React.Component {

  constructor() {
    super();
    this.tabClick = this.tabClick.bind(this);
  }

  componentDidMount() {
    this.init();
    this.setIndicator();
  }

  init() {
    /**
     * 각 Item의 width를 결정( item의 갯수에 따라 동적으로 생성 )
     */
    const tabs = document.querySelectorAll('.tabs .tab');
    this.width = 100 / tabs.length;
    tabs.forEach(tab => tab.style.width = `${this.width}%`);

    /**
     * indicator의 width를 각 item의 width와 동일하게 설정
     */
    this.indicator = document.querySelector('.tabs .indicator');
    this.indicator.style.width = `${this.width}%`;

    /**
     * 시작시 첫번째 item의 a태그 상태를 active로 변경
     */
    const elems = document.querySelector('.tabs');
    const firstChild = elems.firstChild;
    firstChild.querySelector('a').classList.add('active');

    /**
     * 추가할 className이 있다면, 체크 후 추가.
     * 각 컴포넌트마다 style이 다를경우, 클래스를 추가하여 Css로 변경하기 위하여
     */
    const className = this.checkClassName(this.props);
    if (className.length !== 0) {
      const elem = this.refs.myTabs;
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
    _elem.classList.add(_classname);
  }

  /**
   * tab 클릭 함수
   */
  tabClick(e) {
    const activeElem = document.querySelector('.tabs .tab .active');
    activeElem.classList.remove('active');
    e.currentTarget.classList.add('active');
    const props = this.props;
    if('data' in props && 'ripple' in props.data) this.ripple(e, props.data.ripple);
    this.setIndicator();
  }

  ripple(e, _ripple) {
    _ripple.fn(e, _ripple.color);
  }

  /**
   * Indicator 위치 지정 함수
   */
  setIndicator() {
    const activeElem = document.querySelector('.tabs .tab .active');
    const value = activeElem.parentElement.value;
    this.indicator.style.left = `${this.width*value}%`;
  }

  render() {
    const itemList = ('data' in this.props && 'itemList' in this.props.data) ? this.props.data.itemList : [];
    return (
      <ul className="tabs" ref='myTabs'>
        {
          itemList.map((data, i) => {
            return <Tab data={data} value={i} key={i} tabClick={this.tabClick}>{data.name}</Tab>
          })
        }
        <li className='indicator'></li>
      </ul>
    );
  }
}

export default Tabs;
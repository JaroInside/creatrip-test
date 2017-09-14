import * as React from 'react';
import './button.css';

class Button extends React.Component {

  constructor() {
    super();
    this.btnClick = this.btnClick.bind(this);
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
      const elem = this.refs.myBtn;
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
   * 버튼 클릭시 함수
   */
  btnClick(e) {
    const props = this.props;
    if('data' in props && 'ripple' in props.data) this.ripple(e, props.data.ripple);
  }

  ripple(e, _ripple) {
    _ripple.fn(e, _ripple.color);
  }

  render() {
    const title = this.props.children;
    return (
      <button className='btn' onClick={this.btnClick} ref="myBtn">
        {title}
      </button>
    );
  }
}

export default Button;
import React from 'react';
import './index.less';

class Accounts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // 卸载 setState, 防止组件卸载时执行 setState 相关导致报错
  componentWillUnmount() {
    this.setState = () => null
  }
  render() {
    return (
      <div className="accounts contentMain">
        <p className="title">
          <span>Accounts</span>
        </p>
      </div>
    )
  }
}

export default Accounts;
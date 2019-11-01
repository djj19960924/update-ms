import React from 'react';
import './index.less';

class Tests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="tests contentMain">
        <p className="title">
          <span>Tests</span>
        </p>
      </div>
    )
  }
}

export default Tests;
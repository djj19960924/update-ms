import React from 'react';
import './index.less';

class Permissions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="permissions contentMain">
        <p className="title">
          <span>Permissions</span>
        </p>
      </div>
    )
  }
}

export default Permissions;
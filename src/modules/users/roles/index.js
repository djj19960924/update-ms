import React from 'react';
import './index.less';

class Roles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="roles contentMain">
        <p className="title">
          <span>Roles</span>
        </p>
      </div>
    )
  }
}

export default Roles;
import React, { Component } from 'react';
import menus from '@config/menuConfig'
import CustomMenu from '../CustomMenu';

class SiderNav extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="SiderNav">
                <CustomMenu menus={menus}/>
            </div>
        );
    }
}

export default SiderNav;
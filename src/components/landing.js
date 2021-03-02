import React, { Component } from 'react';
import Navigation from './navigation';
import Registration from './registration'

export default class landing extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <Registration />
            </div>
        )
    }
}

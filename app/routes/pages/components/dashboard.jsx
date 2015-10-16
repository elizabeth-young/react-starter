import React from 'react';
import Nav from './nav.jsx';

export default React.createClass({
    render(){
        return (
            <div>
                <Nav />
                {this.props.children || <div>Index not loaded</div>}
            </div>
        )
    }
});
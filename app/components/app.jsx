import React from 'react'
import Dashboard from './dashboard.jsx'
import GlobalNav from './globalNav.jsx'

class App extends React.Component {
    render() {
        return (
            <div>
                <GlobalNav />
                <div className="container">
                    <div style={{padding: '40px 15px'}}>
                        {this.props.children || <Dashboard />}
                    </div>
                </div>
            </div>
        )
    }
}

export default App
import React from 'react'
import { render } from 'react-dom'
import { createHistory, useBasename } from 'history'
import { Router } from 'react-router'

const history = useBasename(createHistory)({
    basename: ''
})

const rootRoute = {
    component: 'div',
    childRoutes: [ {
        path: '/',
        component: require('./components/app.jsx'),
        childRoutes: [
            require('./routes/login/index.jsx'),
            require('./routes/about/index.jsx'),
            require('./routes/pages/index.jsx')
        ]
    } ]
}



render(
    <Router history={history} routes={rootRoute} />,
    document.getElementById('app')
)
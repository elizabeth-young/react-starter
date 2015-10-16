module.exports = {
    path: 'pages',

    //getChildRoutes(location, cb) {
    //    require.ensure([], (require) => {
    //        cb(null, [
    //            require('./routes/inner/index.jsx'),
    //            require('./routes/page1/index.jsx'),
    //            require('./routes/page2/index.jsx')
    //        ])
    //    })
    //    console.log('getChildRoutes()');
    //},

    getChildRoutes(location, cb) {
        require.ensure([], (require) => {
            cb(null, [
                require('./routes/inner/index.jsx'),
                require('./routes/page1/index.jsx'),
                require('./routes/page2/index.jsx')
            ])
        })
        console.log('getChildRoutes()');
    },

    //getIndexRoute(location, callback) {
    //    require.ensure([], function (require) {
    //        callback(null, require('./routes/page1/components/page1.jsx'))
    //    })
    //    console.log('getIndexRoute()');
    //},

    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/dashboard.jsx'))
        })
        console.log('getComponent()');
    }
}
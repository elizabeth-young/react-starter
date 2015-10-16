module.exports = {
    path: 'about',

    getChildRoutes(location, cb) {
        require.ensure([], (require) => {
            cb(null, [
                //require('./routes/inner/index.jsx'),
                //require('./routes/page1/index.jsx'),
                //require('./routes/page2/index.jsx')
            ])
        })
        console.log('getChildRoutes()');
    },

    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/about.jsx'))
        })
        console.log('about');
    }
}
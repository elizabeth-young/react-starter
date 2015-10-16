module.exports = {
    path: 'page2',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/page2.jsx'))
        })
    }
}
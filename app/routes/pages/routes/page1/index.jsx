module.exports = {
    path: 'page1',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/page1.jsx'))
        })
    }
}
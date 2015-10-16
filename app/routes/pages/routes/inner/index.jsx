module.exports = {
    path: 'inner',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./index.jsx'))
        })
    }
}
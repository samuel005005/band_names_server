const routes = ( app ) => {
    // Mis Rutas
    app.use('/api/user', require('./auth'));
    app.use('/api/users',require('./users'));
    app.use('/api/messages',require('./message'));
}
module.exports = routes

module.exports = (app) => {
    app.use('/zipCode', require('./routes/zip-code')),
    app.use('/shipping', require('./routes/shipping'))
}


/* module.export = (app, port) => {
	port, () => {console.log('http://127.0.0.1:' + port)}
} */

module.exports = (app, port) => {
	app.listen(port, () => {
		console.log('http://127.0.0.1:' + port)
	})
}

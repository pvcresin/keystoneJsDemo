var keystone = require('keystone')

var entries = keystone.list('Entry').model

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res)
	var locals = res.locals

	entries.find().exec((err, res) => {
		locals.entries = res

		view.render('shimono')
	})

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home'

	// Render the view
}

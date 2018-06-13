var keystone = require('keystone')
var Types = keystone.Field.Types

/**
 * Entry Model
 * ==========
 */
var Entry = new keystone.List('Entry', {
	map: { name: 'title' }
})

Entry.add({
	title: {
		type: String,
		required: true,
		initial: true,
		unique: true,
		index: true
	},
	content: {
		type: Types.Html,
		wysiwyg: true
	}
})

/**
 * Registration
 */
Entry.defaultColumns = 'title, content'
Entry.register()

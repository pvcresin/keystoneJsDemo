var keystone = require('keystone')
var Types = keystone.Field.Types

/**
 * Entry Model
 * ==========
 */
var Entry = new keystone.List('Entry', {
	map: { name: 'title' }
})

var myStorage = new keystone.Storage({
	adapter: keystone.Storage.Adapters.FS,
	fs: {
		path: 'public/uploads',
		publicPath: '/uploads'
	}
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
	},
	img: {
		type: Types.File,
		filename: function(item, file) {
			return item.id + '.' + file.extension
		},
		format: function(item, file) {
			return `<img src='uploads/${file.filename}' />`
		},
		storage: myStorage
	},
	location: {
		type: Types.Location,
		enableMapsAPI: true,
		defaults: { country: 'Australia' }
	}
})

/**
 * Registration
 */
Entry.defaultColumns = 'title, content, img'
Entry.register()

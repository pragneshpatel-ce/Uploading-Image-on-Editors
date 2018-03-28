/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	//config.extraPlugins = 'filebrowser';
	//config.extraPlugins = 'popup';
	//config.filebrowserBrowseUrl = 'javascript:void(0)';

	config.filebrowserImageBrowseUrl = "/ckeditor/ImageBrowser.aspx";
	config.filebrowserImageWindowWidth = 780;
	config.filebrowserImageWindowHeight = 720;
	config.filebrowserBrowseUrl = "/ckeditor/LinkBrowser.aspx";
	config.filebrowserWindowWidth = 500;
	config.filebrowserWindowHeight = 650;
};

/*
Copyright (c) 2003-2011, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.editorConfig = function( config )
{
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
    // config.uiColor = '#AADC6E';

    config.font_names = '宋体;楷体_GB2312;新宋体;黑体;隶书;幼圆;微软雅黑;Arial;Comic Sans MS;Courier New;Tahoma;Times New Roman;Verdana';
    config.filebrowserImageUploadUrl = '../../../../../../Static/ckfinder/core/connector/aspx/connector.aspx?command=QuickUpload&type=Images'; //上传图片按钮(标签) 
    config.filebrowserUploadUrl = '../../../../../../Static/ckfinder/core/connector/aspx/connector.aspx?command=QuickUpload&type=Files'; //上传文件按钮(标签)
    config.filebrowserBrowseUrl = '../../../../../../Static/ckfinder/ckfinder.html'; //上传文件时浏览服务文件夹 
    config.filebrowserImageBrowseUrl = '../../../../../../Static/ckfinder/ckfinder.html?Type=Images'; //上传图片时浏览服务文件夹
    config.font_names = '正文/正文;宋体/宋体;黑体/黑体;' + config.font_names;
    config.language = 'zh-cn';
    config.uiColor = '#BFEE62'; //编辑器颜色
    // 设置宽高 
//    config.width = 700;
//    config.height = 400;

    // 编辑器样式，有三种：'kama'（默认）、'office2003'、'v2' 
    //config.skin = 'office2003';
    
    // 背景颜色 
    //config.uiColor = '#FFF'; 


    config.toolbar = 'Basic';

    config.toolbar_Full =
    [
    ['Preview'],
    ['Undo', 'Redo', '-', 'SelectAll', 'RemoveFormat'],
    ['Styles', 'Format', 'Font', 'FontSize', 'lineheight'],
    ['TextColor', 'Maximize', 'ShowBlocks'],
    ['Bold', 'Italic', 'Underline'],
    ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', 'Blockquote', 'CreateDiv'],
    ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'],
    ['Link', 'Unlink', 'Anchor'],
    ['Image', 'Flash', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak'],
    ['Code']
    ];
    config.toolbar_Basic =
    [
    ['Styles', 'Format', 'Font', 'FontSize', 'lineheight'],
    ['TextColor', 'Maximize',],
    '/',
    ['Bold', 'Italic', 'Underline'],
    ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent',],
    ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'],
    ['Link', 'Unlink',],
    ['Image', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar',],
    ];

    config.extraPlugins += (config.extraPlugins ? ',lineheight' : 'lineheight');

    config.font_names = '宋体/宋体;黑体/黑体;仿宋/仿宋_GB2312;楷体/楷体_GB2312;隶书/隶书;幼圆/幼圆;微软雅黑/微软雅黑;' + config.font_names;

    /*config.toolbar_Full =
    [
    ['Source', '-', 'Save', 'NewPage', 'Preview', '-', 'Templates'],
    ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Print', 'SpellChecker', 'Scayt'],
    ['Undo', 'Redo', '-', 'Find', 'Replace', '-', 'SelectAll', 'RemoveFormat'],
    ['Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField'], '/',
    ['Bold', 'Italic', 'Underline', 'Strike', '-', 'Subscript', 'Superscript'],
    ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', 'Blockquote'],
    ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'],
    ['Link', 'Unlink', 'Anchor'], ['Image', 'Flash', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak'], '/',
    ['Styles', 'Format', 'Font', 'FontSize'], ['TextColor', 'BGColor']
    ];  */

    config.contentsCss = '../ckeditor/contents.css'; 
};

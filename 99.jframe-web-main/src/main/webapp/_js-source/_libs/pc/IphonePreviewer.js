﻿(function() {
    if (window.IphonePreviewer) {
        return;
    };
    window.IphonePreviewer = function() {

    };

    IphonePreviewer.show = function (html, title) {
        mvcApp.notification.dialog("dialogPreviewHtml", "预览", {
            width: 500,
            height: 900,
            resizable: false,
            draggable: false,
            open: function() {
                var dialogHtml = '<a href="javascript:void(0);" title="关闭" id="btnClosePreview">关闭</a>\
                                <iframe id="previewFrame" width="320" height="550" name="previewFrame" src=""></iframe>\
                                <form id="previewForm" action="/app/tool/PreviewHtml" target="previewFrame" method="POST">\
                                    <textarea name="html">' + html + '</textarea>\
                                    <input type="hidden" name="title" value="' + title + '"/>\
                                </form>';
                $("#dialogPreviewHtml").html(dialogHtml);
                $("#previewForm")[0].submit();
                $("#btnClosePreview").click(function() {
                    $("#dialogPreviewHtml").dialog("close");
                });
                $(".ui-dialog-titlebar").remove();
                $("div.ui-dialog").css("background", "transparent");
            }
        });
    };

    IphonePreviewer.showUrl = function (url) {
        mvcApp.notification.dialog("dialogPreviewHtml", "预览", {
            width: 700,
            height: 900,
            resizable: false,
            draggable: false,
            open: function () {
                var dialogHtml = '<a href="javascript:void(0);" title="关闭" id="btnClosePreview">关闭</a>\
                                <iframe id="previewFrame" width="320" height="550" name="previewFrame" src="' + url + '"></iframe>\
                                <div id="previewQr"><img src="/app/qr/genText?text=' + encodeURIComponent(url) + '" /><label>微信扫一扫，在手机上预览</label></div>';
                $("#dialogPreviewHtml").html(dialogHtml);
                $("#btnClosePreview").click(function () {
                    $("#dialogPreviewHtml").dialog("close");
                });
                $(".ui-dialog-titlebar").remove();
                $("div.ui-dialog").css("background", "transparent");
            }
        });
    };

})();
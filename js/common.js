// document.ready(function() {

//     //当文档窗口发生改变时 触发  
//     $(window).resize(function() {
//         var contentHeight = $(window).height() - 80;
//         var contentWidth = $(window).width() - 150;
//         // alert(contentHeight);
//         $('#left').height(contentHeight);
//         $('#right').height(contentHeight);
//         $('#right').width(contentWidth);
//     });
// })
$(document).ready(function() {
	resizeWindow();
    $(window).resize(function() {
        resizeWindow();
    })

    function resizeWindow() {
        var contentHeight = $(window).height() - 80;
        var contentWidth = $(window).width() - 150;
    	// alert('窗体宽度'+$(window).width()+' right宽度'+contentWidth);
        $('#left').height(contentHeight);
        $('#right').height(contentHeight);
        $('#right').width(contentWidth);
    }
})
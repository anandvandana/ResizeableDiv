/**
 * Created with JetBrains PhpStorm.
 * User: chandan
 * Date: 7/16/16
 * Time: 7:53 PM
 * To change this template use File | Settings | File Templates.
 * Dependencies jQuery 1.10 ,jQuery-ui 1.10,
 */
function resizableDiv(divId){
    var parentId=divId+"_parent";var contentId=divId+"_content";var dragElementId=divId+"_dragIt";
    $("#"+divId).hide().parent().append("<div  class='copiedParent' id='"+parentId+"'><div class='copiedContent' id='"+contentId+"' >"+ $("#"+divId).val()+"<div class='dragIt' id='"+dragElementId+"' ><img src='images/resize_handle2.gif'> </div></div></div>");

    var dragElemnt=$("#"+dragElementId);
    var contentElemnt=$("#"+contentId);
    var topoffset=$(dragElemnt).offset().top;
    var leftffset=$(dragElemnt).offset().left;
    var initialHeight=$(contentElemnt).height();
    var initialWidth=$(contentElemnt).width();
    var heightLimit=parseInt($(contentElemnt).css("max-height").replace("px",""));
    var widthLimit=parseInt($(contentElemnt).css("max-width").replace("px",""));
    var heightLimitLower=parseInt($(contentElemnt).css("min-height").replace("px",""));
    var widthLimitLower=parseInt($(contentElemnt).css("min-width").replace("px",""));
    $("#"+dragElementId).draggable({drag:function(event){
        var currentX=$(this).offset().top;var currentY=$(this).offset().left;
        var increseY=currentX-topoffset;var increaseX=currentY-leftffset;
        var newHeight=initialHeight+increseY;var newWidth=initialWidth+increaseX;
        if(newHeight >heightLimitLower && newHeight<heightLimit)$(contentElemnt).height(newHeight);
        if(newHeight>heightLimit)$(contentElemnt).height(heightLimit);
        if(newWidth>widthLimitLower && newWidth<widthLimit)$(contentElemnt).width(newWidth);
        if(newWidth>widthLimit)$(contentElemnt).width(widthLimit);
    },stop: function() {
        $(contentElemnt).css("height","");$(this).width($(contentElemnt).width());$(this).css("left","0px");$(this).css("top","0px");
    }});
}
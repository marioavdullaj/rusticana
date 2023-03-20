document.addEventListener('mousemove', function(event){
  let card_x = getTransformValue(event.clientX,window.innerWidth,30);
  let card_y = getTransformValue(event.clientY,window.innerHeight,30);
  let shadow_x = getTransformValue(event.clientX,window.innerWidth,20);
  let shadow_y = getTransformValue(event.clientY,window.innerHeight,20);
  let text_shadow_x = getTransformValue(event.clientX,window.innerWidth,28);
  let text_shadow_y = getTransformValue(event.clientY,window.innerHeight,28);
  $(".flip-card-container ").css("transform","rotateX("+card_y/1+"deg) rotateY("+card_x+"deg)");
  $(".flip-card-container ").css("box-shadow",-card_x+"px "+card_y/1+"px 55px rgba(0, 0, 0, .55)");
  $(".content").css("text-shadow",-text_shadow_x+"px "+text_shadow_y/1+"px 6px rgba(0, 0, 0, .8)");
});
function getTransformValue(v1,v2,value){
  return ((v1/v2*value-value/2)*1).toFixed(1);                        
}
$(function(){
  setTimeout(function(){
    $("body").removeClass("active");
  }, 2200);
});
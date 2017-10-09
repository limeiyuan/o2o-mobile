//rem适配方案
(function(){
  var width = document.documentElement.clientWidth/16;
  var styleNode = document.createElement("style");
  styleNode.innerHTML="html{font-size:"+width+"px!important}"
  document.head.appendChild(styleNode);
  window.addEventListener('resize', function () {
    var width = document.documentElement.clientWidth/16;
    styleNode.innerHTML="html{font-size:"+width+"px!important}"
  }, false)
})();


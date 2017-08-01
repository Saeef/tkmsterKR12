(function(andRedEyelikeOptiblank, undefined) {
   var $ = window.jQuery;
   window.optimizely = window.optimizely || [];
   var SL = {};

   SL.andRedEyelikeOptiblank = {
      init: function() { 
         console.info('%c init \u221a', 'background:blue;color:white;');
            this.pgCssDesktop();
           

      },//init

      pgCssDesktop: function() {
         console.info('%c pgCssDesktop \u221a', 'background:blue;color:white;');
         var mainCss = 'section#notiks {margin:0 auto; }  .notiksheader { } ';
         var head = document.getElementsByTagName('head')[0];
         function addcss(css) {
            var s = document.createElement('style');
            s.setAttribute('type', 'text/css');
            s.appendChild(document.createTextNode(css));
            head.appendChild(s);
         }
         addcss(mainCss);
      }//pgCssDesktop

     

       
      
      

};
//SL.andRedEyelikeOptiblank
(function _RE() {
   //if (window.jQuery !== undefined) {
      //try         {
                     SL.andRedEyelikeOptiblank.init();
                  //} 
      //catch (err) {
                     //console.log('TRY ERROR: '+ err);
                  //}
   //}//if 
   //else { 
            //setTimeout(_RE, 45); 
   //}//else
           
})();//_RE

}.call(window.andRedEyelikeOptiblank || {}));
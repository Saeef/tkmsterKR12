(function(andRedEyelikeOptiblank, undefined) {
   var $ = window.jQuery;
   var SL = {};
   var Optire = function(first,last,city) {
      console.info('%c Optire \u221a', 'background:blue;color:white;');
      this.first = first;
      this.last = last;
      this.city = city;
   };//Optire const
   SL.andRedEyelikeOptiblank = {
      init: function() { 
         console.info('%c init \u221a', 'background:blue;color:white;');
         this.pgCssDesktop();
         this.proto();
                     
      },//init

      pgCssDesktop: function() {
         console.info('%c pgCssDesktop \u221a', 'background:blue;color:white;');
         var mainCss = '';
         var head = document.getElementsByTagName('head')[0];
         function addcss(css) {
            var s = document.createElement('style');
            s.setAttribute('type', 'text/css');
            s.appendChild(document.createTextNode(css));
            head.appendChild(s);
         }
         addcss(mainCss);
      },//pgCssDesktop

      proto: function() {
         debugger;
         var whatLoaded = Optire.prototype.whatLoaded = function(age) {
            //Optire.ele = 5;
            this.first = 'Eric';
            this.last = 'Cartman';
            this.city = 'South Park';
              
            var res = ' name is: ' + ' ' + this.first;
                res += '\n last name is: ' + this.last;
                res += '\n city is: ' + this.city;
                res += '\n and he is: ' + age + ' years old';
               console.log(res);
               return res;
         };//whatLoaded

         var res = new Optire();
         res.whatLoaded(18);



      }//proto


       
      
      

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
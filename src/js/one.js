(function(andRedEyelikeOptiblank, undefined) {
   var $ = window.jQuery;
   window.optimizely = window.optimizely || [];
   var SL = {};
   var Landing = function(hostname,pathname,city,lostor,lastURL,newURL) {
      console.info('%c Landing \u221a', 'background:blue;color:white;');
      this.hostname = hostname || undefined;
      this.pathname = pathname || undefined;
      this.city = city || undefined;
      this.lostor = lostor || undefined;
      this.lastURL = lastURL || undefined;
      this.newURL = newURL || undefined;

   };//Landing const

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
         setInterval(function(){
               var whatLoaded = Landing.prototype.whatLoaded = function(hostname,pathname,lastURL,city) {
            //Landing
            var subpath;
            this.lastURL = lastURL;
            this.hostname = hostname;
            this.pathname = pathname;
            this.city = city;
            //remove previous experiment if it exists

            if(document.getElementById('newPremenu')) {
                  var prem = document.getElementById('newPremenu');
                  prem.parentElement.removeChild(prem);
            }     

            if(this.hostname == 'www.kaplaninternational.com') {

               switch(this.pathname) {
                  case '/united-states':
                     this.lostor = this.pathname.slice(1,this.pathname.length);
                     this.lostor = localStorage.setItem('country-' + this.lostor,true);
                     optimizely.push(['setDimensionValue', 'country_name', '/united-states']);
                     break;
                  case '/united-kingdom':
                     this.lostor = this.pathname.slice(1,this.pathname.length);
                     this.lostor = localStorage.setItem('country-' + this.lostor,true);
                     optimizely.push(['setDimensionValue', 'country_name', '/united-kingdom']);
                     break;
                  case '/new-zealand':
                     this.lostor = this.pathname.slice(1,this.pathname.length);
                     this.lostor = localStorage.setItem('country-' + this.lostor,true);
                     optimizely.push(['setDimensionValue', 'country_name', '/new-zealand']);
                     break;
                  case '/australia':
                     this.lostor = this.pathname.slice(1,this.pathname.length);
                     this.lostor = localStorage.setItem('country-' + this.lostor,true);
                     optimizely.push(['setDimensionValue', 'country_name', '/australia']);
                     break;
                  case '/singapore':
                     this.lostor = this.pathname.slice(1,this.pathname.length);
                     this.lostor = localStorage.setItem('country-' + this.lostor,true);
                     optimizely.push(['setDimensionValue', 'country_name', '/singapore']);
                     break;   
                  case '/ireland':
                     this.lostor = this.pathname.slice(1,this.pathname.length);
                     this.lostor = localStorage.setItem('country-' + this.lostor,true);
                     optimizely.push(['setDimensionValue', 'country_name', '/ireland']);
                     break;
                  case '/canada':
                     this.lostor = this.pathname.slice(1,this.pathname.length);
                     this.lostor = localStorage.setItem('country-' + this.lostor,true);
                     optimizely.push(['setDimensionValue', 'country_name', '/canada']);
                     break;

                  case '/ar/united-states':
                     this.lostor = this.pathname.slice(1,this.pathname.length);
                     this.lostor = localStorage.setItem('country-' + this.lostor,true);
                     optimizely.push(['setDimensionValue', 'country_name', '/united-states']);
                     break;
                  case '/ar/united-kingdom':
                     this.lostor = this.pathname.slice(1,this.pathname.length);
                     this.lostor = localStorage.setItem('country-' + this.lostor,true);
                     optimizely.push(['setDimensionValue', 'country_name', '/united-kingdom']);
                     break;
                  case '/ar/new-zealand':
                     this.lostor = this.pathname.slice(1,this.pathname.length);
                     this.lostor = localStorage.setItem('country-' + this.lostor,true);
                     optimizely.push(['setDimensionValue', 'country_name', '/new-zealand']);
                     break;   
                  case '/ar/australia':
                     this.lostor = this.pathname.slice(1,this.pathname.length);
                     this.lostor = localStorage.setItem('country-' + this.lostor,true);
                     optimizely.push(['setDimensionValue', 'country_name', '/australia']);
                     break;
                  case '/ar/singapore':
                     this.lostor = this.pathname.slice(1,this.pathname.length);
                     this.lostor = localStorage.setItem('country-' + this.lostor,true);
                     optimizely.push(['setDimensionValue', 'country_name', '/singapore']);
                     break;
                  case '/ar/ireland':
                     this.lostor = this.pathname.slice(1,this.pathname.length);
                     this.lostor = localStorage.setItem('country-' + this.lostor,true);
                     optimizely.push(['setDimensionValue', 'country_name', '/ireland']);
                     break;   
                  case '/ar/canada':
                     this.lostor = this.pathname.slice(1,this.pathname.length);
                     this.lostor = localStorage.setItem('country-' + this.lostor,true);
                     optimizely.push(['setDimensionValue', 'country_name', '/canada']);
                     break;   
                  case '/tr/united-states':
                     this.lostor = this.pathname.slice(1,this.pathname.length);
                     this.lostor = localStorage.setItem('country-' + this.lostor,true);
                     optimizely.push(['setDimensionValue', 'country_name', '/united-states']);
                     break;
                  case '/tr/united-kingdom':
                     this.lostor = this.pathname.slice(1,this.pathname.length);
                     this.lostor = localStorage.setItem('country-' + this.lostor,true);
                     optimizely.push(['setDimensionValue', 'country_name', '/united-kingdom']);
                     break;
                  case '/tr/new-zealand':
                     this.lostor = this.pathname.slice(1,this.pathname.length);
                     this.lostor = localStorage.setItem('country-' + this.lostor,true);
                     optimizely.push(['setDimensionValue', 'country_name', '/new-zealand']);
                     break;   
                  case '/tr/australia':
                     this.lostor = this.pathname.slice(1,this.pathname.length);
                     this.lostor = localStorage.setItem('country-' + this.lostor,true);
                     optimizely.push(['setDimensionValue', 'country_name', '/australia']);
                     break;   
                  case '/tr/singapore':
                     this.lostor = this.pathname.slice(1,this.pathname.length);
                     this.lostor = localStorage.setItem('country-' + this.lostor,true);
                     optimizely.push(['setDimensionValue', 'country_name', '/singapore']);
                     break;
                  case '/tr/ireland':
                     this.lostor = this.pathname.slice(1,this.pathname.length);
                     this.lostor = localStorage.setItem('country-' + this.lostor,true);
                     optimizely.push(['setDimensionValue', 'country_name', '/ireland']);
                     break;
                  case '/tr/canada':
                     this.lostor = this.pathname.slice(1,this.pathname.length);
                     this.lostor = localStorage.setItem('country-' + this.lostor,true);
                     optimizely.push(['setDimensionValue', 'country_name', '/canada']);
                     break;   
                  case '/mx/united-states':
                     this.lostor = this.pathname.slice(1,this.pathname.length);
                     this.lostor = localStorage.setItem('country-' + this.lostor,true);
                     optimizely.push(['setDimensionValue', 'country_name', '/united-states']);
                     break;   
                  case '/mx/united-kingdom':
                     this.lostor = this.pathname.slice(1,this.pathname.length);
                     this.lostor = localStorage.setItem('country-' + this.lostor,true);
                     optimizely.push(['setDimensionValue', 'country_name', '/united-kingdom']);
                     break;   
                  case '/mx/new-zealand':
                     this.lostor = this.pathname.slice(1,this.pathname.length);
                     this.lostor = localStorage.setItem('country-' + this.lostor,true);
                     optimizely.push(['setDimensionValue', 'country_name', '/new-zealand']);
                     break;   
                  case '/mx/australia':
                     this.lostor = this.pathname.slice(1,this.pathname.length);
                     this.lostor = localStorage.setItem('country-' + this.lostor,true);
                     optimizely.push(['setDimensionValue', 'country_name', '/australia']);
                     break;   
                  case '/mx/singapore':
                     this.lostor = this.pathname.slice(1,this.pathname.length);
                     this.lostor = localStorage.setItem('country-' + this.lostor,true);
                     optimizely.push(['setDimensionValue', 'country_name', '/united-states']);
                     break;   
                  case '/mx/ireland':
                     this.lostor = this.pathname.slice(1,this.pathname.length);
                     this.lostor = localStorage.setItem('country-' + this.lostor,true);
                     optimizely.push(['setDimensionValue', 'country_name', '/ireland']);
                     break;   
                  case '/mx/canada':
                     this.lostor = this.pathname.slice(1,this.pathname.length);
                     this.lostor = localStorage.setItem('country-' + this.lostor,true);
                     optimizely.push(['setDimensionValue', 'country_name', '/canada']);
                     break;  
                   case '/ru/united-states':
                     this.lostor = this.pathname.slice(1,this.pathname.length);
                     this.lostor = localStorage.setItem('country-' + this.lostor,true);
                     optimizely.push(['setDimensionValue', 'country_name', '/united-states']);
                     break;   
                  case '/ru/united-kingdom':
                     this.lostor = this.pathname.slice(1,this.pathname.length);
                     this.lostor = localStorage.setItem('country-' + this.lostor,true);
                     optimizely.push(['setDimensionValue', 'country_name', '/united-kingdom']);
                     break;   
                  case '/ru/united-zealand ':
                     this.lostor = this.pathname.slice(1,this.pathname.length);
                     this.lostor = localStorage.setItem('country-' + this.lostor,true);
                     optimizely.push(['setDimensionValue', 'country_name', '/united-states']);
                     break;   
                  case '/ru/australia':
                     this.lostor = this.pathname.slice(1,this.pathname.length);
                     this.lostor = localStorage.setItem('country-' + this.lostor,true);
                     optimizely.push(['setDimensionValue', 'country_name', '/australia']);
                     break;   
                  case '/ru/singapore':
                     this.lostor = this.pathname.slice(1,this.pathname.length);
                     this.lostor = localStorage.setItem('country-' + this.lostor,true);
                     optimizely.push(['setDimensionValue', 'country_name', '/singapore']);
                     break;   
                  case '/ru/ireland':
                     this.lostor = this.pathname.slice(1,this.pathname.length);
                     this.lostor = localStorage.setItem('country-' + this.lostor,true);
                     optimizely.push(['setDimensionValue', 'country_name', '/ireland']);
                     break;   
                  case '/ru/canada':
                     this.lostor = this.pathname.slice(1,this.pathname.length);
                     this.lostor = localStorage.setItem('country-' + this.lostor,true);
                     optimizely.push(['setDimensionValue', 'country_name', '/canada']);
                     break;    
   


               }//switch-pathname

            }//if kaplaninternational-hostname
   
            var res = ' hosting site is: ' + ' ' + this.hostname;
                res += '\n it has this pathname: ' + this.pathname;
                //this if you came directly to school page
                // this.lostor = this.pathname.slice(1,this.pathname.length);
                // this.lostor = localStorage.setItem(this.pathname,true);
                   
            console.log(res);
            //count-forward-slash-in-path
            var path = this.pathname.match(/\//g);

            //assign city-course
            if(path.length > 1) {
               //extract everything after /
               this.city = /[^/]*$/.exec(this.lastURL)[0];
               //notatcountryscope
               if(this.lastURL.indexOf(this.city) > -1) {
                  console.log(this.lastURL);
                  console.log(this.city);
                  localStorage.setItem('city-course-' + this.city, true);
                  optimizely.push(['setDimensionValue', 'school-page', this.city]);
            
               }//alreadyatcitylevel

            }//if city-slash-length

            


              
         };//whatLoaded

         function findCity() {
            this.newURL = document.URL;
            if(this.lastURL !== this.newURL) {
               console.log('not the course');
            } else {
               localStorage.setItem('city-course-' + this.city,true);
               //allora sono tutte due vero
               console.log('what to do now with a match');
               optimizely.push(['setDimensionValue', 'school-page', this.city]);

            }

         }//findCity

         window.addEventListener('hashchange',findCity,false);

         var res = new Landing();
         res.whatLoaded(window.location.hostname,window.location.pathname,document.URL);

         },1000);

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
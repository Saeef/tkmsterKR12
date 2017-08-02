(function(andRedEyelikeOptiblank, undefined) {
   var $ = window.jQuery;
   window.optimizely = window.optimizely || [];
   var SL = {};

   SL.andRedEyelikeOptiblank = {
      init: function() { 
         console.info('%c init \u221a', 'background:blue;color:white;');
            this.pgCssDesktop();
            if(window.location.hostname == 'www.ticketmaster.fi' || 'www.ticketmaster.nl') {
               //sorrynoticketsavail and platinum or just notickets
               if(window.tm_omn.prop18 == 'EDP - No availability fallback' || window.tm_omn.prop18 == 'EDP - Sold out') {
                  this.manyErrors();
               }//prop18


            }//deutchland
            
           
      },//init

      pgCssDesktop: function() {
         console.info('%c pgCssDesktop \u221a', 'background:blue;color:white;');
         var mainCss = ' body{margin:0}#notiks{margin-top:1em; padding:.5em 0 1.2em;width: 100%;background: #e2e6ea}.notikswrapper{width: 80%;margin:0 auto}.notiksheader{margin-bottom: 1.25em}.notiksheader h3{font-size:18px;margin:25px 0 0px 0;color:#111;letter-spacing: 1px;text-align: center}.notiksheader h4{font-size: 16px;margin:0 0 30px 0;color:#565656;letter-spacing: 1px;text-align: center}.notiksrow{display: block;height: 60px;background: #fafafa;box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.25)}.uno{padding:10px}.dos, .tres{margin-top:1em;padding:10px}.notiksrow:nth-child(1), notiksrow:nth-child(2){margin-top:.75em}.notiksrow p{color:#666;display:inline-block;font-size: 14px;text-align: left;margin:0 2em 0 5em;max-width: 42%}.notiksrow p br{line-height: 24px}.notiksrow img{float:left;width: 12%;display: inline-block;max-width: 90px;height:55px; padding:.25em .5em;}.notiksrow br.level{margin-bottom: 10px}.notiksrow button{float: right;background: #259be0;color: #fafafa;font-size: 11px;line-height: 24px;vertical-align: middle;text-align: left;letter-spacing: 1.1px;margin-right: 1em;border: none;padding: .35em 1em;margin: 1.25em 1em;cursor: pointer}.notiksrow.uno p{padding-top: 5px} .tadinfo { width:80%; margin:0 auto;}  .tadhead {margin-left:1em;} a:focus,button:focus { outline:none; } .uno, .dos, .tres {display:none;} .isOn {display: block;}  ';

         var head = document.getElementsByTagName('head')[0];
         function addcss(css) {
            var s = document.createElement('style');
            s.setAttribute('type', 'text/css');
            s.appendChild(document.createTextNode(css));
            head.appendChild(s);
         }
         addcss(mainCss);
      },//pgCssDesktop

      manyErrors: function() {
            console.info('%c manyErrors \u221a', 'background:blue;color:white;');
            //ntf-module
            var secErr  = document.getElementById('ntf-module');
                platerr = document.getElementById('platinum-edp');
                seat    = document.getElementById('resale-module');
                tad     = document.getElementById('eventinfo');
                tadhead = document.querySelector('.eventinfo__main__info');
            var l1,l2,l3,uno,dos,tres;//currently-not-avail-sold-out
            l1 = document.querySelector('ul.error__message li a') || undefined;
            l2 = document.querySelector('p.prices a') || undefined;
            l3 = document.querySelector('.tickettable__find a') || undefined;
            var di = document.querySelector('p.prices') || undefined;
            var dis = document.querySelector('p.resale__desc') || undefined;

            if(secErr) {
               secErr.innerHTML = '';
               secErr.id = 'notiks';
               secErr.innerHTML = ' <div class="notikswrapper"><div class="notiksheader"><h3>Tickets Unavailable</h3><h4>We can still get you in..</h4></div><div class="notiksrow uno"><img src="http://lorempixel.com/400/200/sports/" width="90px" height="auto" alt="View Other Dates" /><p>These are regular tickets available for this event on another date.</p><a href="' + l1.href + '" target="_blank" title="View Other Dates"><button id="notiksbone" type="button">View Other Dates &rsaquo;</button></a></div><div class="notiksrow dos"><img src="http://lorempixel.com/400/200/sports/" width="90px" height="auto" alt="View Platinum Tickets" /><p>Platinum tickets are available, giving you access to in demand tickets for this show.<br/><span id="platmin">Tickets from £120.00</span></p><a href="' + l2 + '" target="_blank" title="View Platinum Tickets"><button id="notiksbtwo" type="button">View Platinum Tickets &rsaquo;</button></a></div><div class="notiksrow tres"><img src="http://lorempixel.com/400/200/sports/" width="90px" height="auto" alt="View Resale Tickets" /><p>There are resale tickets available through our Official Resale Marketplace: Seatwave.<br /><span id="resmin">Tickets from £100.00</span></p><a href="' + l3 +'" target="_blank" title="View Resale Tickets"><button id="notiksbthree" type="button">View Resale Tickets</button></a></div></div>  ';
               //add-uno
               uno = document.querySelector('.notiksrow.uno');
               uno.classList.add('isOn');

            }//if-secError

            //platinum-edp
            if(platerr) {
               //remove mainContent div
               document.getElementById('mainContent').
               parentElement.removeChild(document.getElementById('mainContent'));
               //add-dos
               dos = document.querySelector('.notiksrow.dos');
               dos.classList.add('isOn');
               di = (di.textContent).replace( /(^.+)(\w\d+\w)(.+$)/i,'$2');
               di = Number(di).toFixed(2);
               document.getElementById('platmin').innerHTML = 'Tickets from £' + di;      

            }//platinum

            //resale-module
            if(seat) {
               //add-tres
               tres = document.querySelector('.notiksrow.tres');
               tres.classList.add('isOn');
               dis = dis.children[1].textContent;
               document.getElementById('resmin').innerHTML = 'Tickets from ' + dis;

            }//resale

            //topAd-for-one-two-three
                tad.className = 'tadinfo';
                tadhead.className = 'tadhead';

      },//manyErrors

      translations = {




      }

     

       
      
      

};
//SL.andRedEyelikeOptiblank
(function _RE() {
   if (window.jQuery !== undefined) {
      //try         {
                     SL.andRedEyelikeOptiblank.init();
                  //} 
      //catch (err) {
                     //console.log('TRY ERROR: '+ err);
                  //}
   }//if 
   else { 
            setTimeout(_RE, 45); 
   }//else
           
})();//_RE

}.call(window.andRedEyelikeOptiblank || {}));
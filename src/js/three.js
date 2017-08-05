(function(andRedEyelikeTKMSTR12, undefined) {
   var $ = window.jQuery;
   window.optimizely = window.optimizely || [];
   var SL = {};

   SL.andRedEyelikeTKMSTR12 = {
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
         console.info('%c pgCssDesktop \u221a', 'background:blue;color:white;');   //f7f7f7
         var mainCss = ' body{margin:0;padding:0;width:100%;height:100%}.clearfix:after{content:" ";visibility:hidden;display:block;height:0;clear:both}#notiks{padding:.5em 0 1.2em;width:100%;max-width:1250px;background-color:#dee3e6;margin:1em 0 auto}.notikswrapper{width:95.15%;margin:0 auto}.notiksheader{margin-bottom:1.25em}.notiksheader h3{margin:20px 0 0px 0;color:#505050;letter-spacing:1px;text-align:center;font-family:TMSans-Regular,sans-serif,monospace;font-size:18px; line-height:26px;}.notiksheader h4{font-size:18px;margin:0 0 25px 0;color:rgba(51,47,47,0.82);text-align:center;letter-spacing:1.3px;font-weight:normal;font-family:TMSans-Regular,sans-serif,monospace; line-height:26px;}.notiksleft{width:30%;background:#f6f7f9;display:inline-block;max-height:108px}.notiksright{width:68%;display:inline-block;height:108px;vertical-align:top;margin-right:1em;}.notiksrow{display:block;max-height:108px;background:#fafafa;box-shadow:0 0 1px 0 rgba(0,0,0,0.25)}a{text-decoration:none}a:focus,a:active{outline:0}.dos,.tres{margin-top:1em}.notiksrow:nth-child(1),notiksrow:nth-child(2){margin-top:.75em}.notiksrow p{color:rgba(58,58,58,0.8);display:inline-block;text-align:left;padding:1.8em 0;max-width:54%;font-family:TMSans-Regular,sans-serif,monospace;font-size:15.5px;letter-spacing:.25px;margin:0 1em;}.notiksrow p br{line-height:24px}.notiksrow img {display:inline-block;max-width:235px;height:auto;padding:1.55em 1em;}.notiksrow br.level{margin-bottom:10px}.notiksrow button{float:right;background:#259be0;color:#fff;font-size:14px;letter-spacing:.35px;border:0;padding:1em .75em;cursor:pointer;border-radius:3px;display:inline-block;vertical-align:middle;margin-top:2.2em;width:200px} .rearrow { background-image:url(src="https://anchr.io/i/gCcvj.gif"); }   @media only screen and (min-width:1070px) and (max-width:1210px){.notiksrow p{max-width:55%}} .tadinfo { width:80%; margin:0 auto;}  .tadhead {margin-left:1em;} a:focus,button:focus { outline:none; } .uno, .dos, .tres {display:none;} .isOn {display: block;}    @media only screen and (min-width:310px) and (max-width:1069px){#notiks{width:100%!important}.notikswrapper{width:93.15%;margin:0 auto}.notiksrow{display:block;background:#fafafa;box-shadow:0 0 1px 0 rgba(0,0,0,0.25)}.notiksrow.uno,.notiksrow.dos,.notiksrow.tres,.notiksright{width:100%;max-height:none!important;height:auto}.notiksrow .notiksleft{max-height:none!important;width:100%!important}.notiksleft{background:rgba(223,228,231,0.25);padding:1em 0}.notiksright{display:block;padding:0 0 1.5em;margin:0}.notiksrow img{display:block;margin:0 auto}.notiksrow p{margin:0 1.5em;max-width:none!important;display:inline-block;line-height:1.35}.notiksrow button{width:82.5%;display:block;margin:0 auto;float:none;font-size:15px} .tadhead {margin-left:0em !important;}  } ';

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
               console.log(window.location.href.indexOf('language'));
                console.log(window.location.href.indexOf('language') > -1);

               if(window.location.href.indexOf('language=en-us') > -1) {

                     secErr.innerHTML = ' <div class="notikswrapper"><div class="notiksheader"><h3>'+ this.translations.title.en + '</h3><h4>'+ this.translations.subtitle.en +'</h4></div><div class="notiksrow uno"><div class="notiksleft"> <img src="https://anchr.io/i/IKMSf.png" width="235" alt="'+ this.translations.copy2.en +'"/></div><div class="notiksright"><p>'+ this.translations.copy1.en  +'</p><a href="' + l1 + '" target="_blank" title="'+ this.translations.copy2.en +'"><button id="notiksbone" type="button">'+ this.translations.copy2.en + ' <span class="rearrow">&nbsp;</span></button></a></div></div><div class="notiksrow dos"><div class="notiksleft"> <img src="https://anchr.io/i/VYRP7.png" width="235" alt="' + this.translations.cta1.en + '"/></div><div class="notiksright"><p>' + this.translations.copy4.en + '<br/><span id="platmin">Tickets from £120.00</span></p><a href="' + l2 + '" target="_blank" title="' + this.translations.cta1.en + '"> <button id="notiksbtwo" type="button">' + this.translations.cta1.en + ' &rsaquo;</button></a> </div></div><div class="notiksrow tres"><div class="notiksleft"><img src="https://anchr.io/i/ADMOZ.png" width="235" alt="' + this.translations.cta3.en +'"/></div><div class="notiksright"><p>' + this.translations.copy3.en +'<br/><span id="resmin">Tickets from £100.00</span></p><a href="' + l3 + '" target="_blank" title="' + this.translations.cta3.en +'"> <button id="notiksbthree" type="button">' + this.translations.cta3.en +'</button></a></div></div></div>  ';
                        //add-uno
                        uno = document.querySelector('.notiksrow.uno');
                        uno.classList.add('isOn');


               }//english default

               else if(window.location.href.indexOf('language=nl-nl') > -1) {
                        
                     secErr.innerHTML = '<div class="notikswrapper"><div class="notiksheader"><h3>'+ this.translations.title.nl + '</h3><h4>'+ this.translations.subtitle.nl +'</h4></div><div class="notiksrow uno"><div class="notiksleft"> <img src="https://anchr.io/i/IKMSf.png" width="235" alt="'+ this.translations.copy2.nl +'"/></div><div class="notiksright"><p>'+ this.translations.copy1.nl  +'</p><a href="' + l1 + '" target="_blank" title="'+ this.translations.copy2.nl +'"><button id="notiksbone" type="button">'+ this.translations.copy2.nl +' &rsaquo;</button></a></div></div><div class="notiksrow dos"><div class="notiksleft"> <img src="https://anchr.io/i/VYRP7.png" width="235" alt="' + this.translations.cta1.nl + '"/></div><div class="notiksright"><p>' + this.translations.copy4.nl + '<br/><span id="platmin">Tickets from £120.00</span></p><a href="' + l2 + '" target="_blank" title="' + this.translations.cta1.nl + '"> <button id="notiksbtwo" type="button">' + this.translations.cta1.nl + ' &rsaquo;</button></a> </div></div><div class="notiksrow tres"><div class="notiksleft"><img src="https://anchr.io/i/ADMOZ.png" width="235" alt="' + this.translations.cta3.nl +'"/></div><div class="notiksright"><p>' + this.translations.copy3.nl +'<br/><span id="resmin">Tickets from £100.00</span></p><a href="' + l3 + '" target="_blank" target="_blank" title="' + this.translations.cta3.nl +'"> <button id="notiksbthree" type="button">' + this.translations.cta3.nl +'</button></a></div></div></div>  ';
                        //add-uno
                        uno = document.querySelector('.notiksrow.uno');
                        uno.classList.add('isOn');

               }//deutchland 

               else if(window.location.href.indexOf('language=fi-fi') > -1) {
                        
                     secErr.innerHTML = '<div class="notikswrapper"><div class="notiksheader"><h3>'+ this.translations.title.nl + '</h3><h4>'+ this.translations.subtitle.nl +'</h4></div><div class="notiksrow uno"><div class="notiksleft"> <img src="https://anchr.io/i/IKMSf.png" width="235" alt="'+ this.translations.copy2.nl +'"/></div><div class="notiksright"><p>'+ this.translations.copy1.nl  +'</p><a href="' + l1 + '" target="_blank" title="'+ this.translations.copy2.nl +'"><button id="notiksbone" type="button">'+ this.translations.copy2.nl +' &rsaquo;</button></a></div></div><div class="notiksrow dos"><div class="notiksleft"> <img src="https://anchr.io/i/VYRP7.png" width="235" alt="' + this.translations.cta1.nl + '"/></div><div class="notiksright"><p>' + this.translations.copy4.nl + '<br/><span id="platmin">Tickets from £120.00</span></p><a href="' + l2 + '" target="_blank" title="' + this.translations.cta1.nl + '"> <button id="notiksbtwo" type="button">' + this.translations.cta1.nl + ' &rsaquo;</button></a> </div></div><div class="notiksrow tres"><div class="notiksleft"><img src="https://anchr.io/i/ADMOZ.png" width="235" alt="' + this.translations.cta3.nl +'"/></div><div class="notiksright"><p>' + this.translations.copy3.nl +'<br/><span id="resmin">Tickets from £100.00</span></p><a href="' + l3 + '" target="_blank" title="' + this.translations.cta3.nl +'"> <button id="notiksbthree" type="button">' + this.translations.cta3.nl +'</button></a></div></div></div>  ';
                        //add-uno
                        uno = document.querySelector('.notiksrow.uno');
                        uno.classList.add('isOn');

               }//finland

               //nolang-(-1)/otherthanshownlangs(>1)
               else if(window.location.href.indexOf('language') >= -1 ) {
                        
                     secErr.innerHTML = ' <div class="notikswrapper"><div class="notiksheader"><h3>'+ this.translations.title.en + '</h3><h4>'+ this.translations.subtitle.en +'</h4></div><div class="notiksrow uno"><div class="notiksleft"> <img src="https://anchr.io/i/IKMSf.png" width="235" alt="'+ this.translations.copy2.en +'"/></div><div class="notiksright"><p>'+ this.translations.copy1.en  +'</p><a href="' + l1 + '" target="_blank" title="'+ this.translations.copy2.en +'"><button id="notiksbone" type="button">'+ this.translations.copy2.en +' &rsaquo;</button></a></div></div><div class="notiksrow dos"><div class="notiksleft"> <img src="https://anchr.io/i/VYRP7.png" width="235" alt="' + this.translations.cta1.en + '"/></div><div class="notiksright"><p>' + this.translations.copy4.en + '<br/><span id="platmin">Tickets from £120.00</span></p><a href="' + l2 + '" target="_blank" title="' + this.translations.cta1.en + '"> <button id="notiksbtwo" type="button">' + this.translations.cta1.en + ' &rsaquo;</button></a> </div></div><div class="notiksrow tres"><div class="notiksleft"><img src="https://anchr.io/i/ADMOZ.png" width="235" alt="' + this.translations.cta3.en +'"/></div><div class="notiksright"><p>' + this.translations.copy3.en +'<br/><span id="resmin">Tickets from £100.00</span></p><a href="' + l3 + '" target="_blank"  title="' + this.translations.cta3.en +'"> <button id="notiksbthree" type="button">' + this.translations.cta3.en +'</button></a></div></div></div>  ';
                        //add-uno
                        uno = document.querySelector('.notiksrow.uno');
                        uno.classList.add('isOn');

               }//otherlang-or-missing-default-to-english 
   

            }//if-secError

            //platinum-edp
            if(platerr) {
               //remove mainContent div
               document.getElementById('mainContent').
               parentElement.removeChild(document.getElementById('mainContent'));
               //add-dos
               dos = document.querySelector('.notiksrow.dos');
               dos.classList.add('isOn');
               di = di.textContent;
               di = di.replace(/\D/g,'');
               di = Number(di);
               di = di/100;
               di = di.toFixed(2);
               document.getElementById('platmin').innerHTML = 'Tickets from £' + di;      

            }//platinum

            //resale-module
            if(seat) {
               //add-tres
               tres = document.querySelector('.notiksrow.tres');
               tres.classList.add('isOn');
               dis = dis.children[1].textContent;
               document.getElementById('resmin').innerHTML = 'Tickets from £' + dis;

            }//resale

            //topAd-for-one-two-three
                tad.className = 'tadinfo';
                tadhead.className = 'tadhead';

            //created replaceAll
            String.prototype.replaceAll = function(seek,destroy) {
               var sergeant = this;
               return sergeant.replace(new RegExp(seek, 'g'), destroy);
            };      

            //language event-listener
            document.querySelector('.toplinks__button--language').
            addEventListener('click', function(e) {
               console.log(e);
               //dutch website language handler
               if(document.querySelector('.header__language__button')) {
                     var dootch = document.querySelector('.header__language__button');
                     var dooslink = dootch.getAttribute('href');  //?languagefi-fi

                     if(dooslink.indexOf('nl') > -1  || dooslink.indexOf('fi') || dootch.innerText.toUpperCase() == 'DUTCH') {

                        var grab = document.getElementById('notiks');
                        grap.innerHTML = '';
                        grab.innerHTML = '<div class="notikswrapper"><div class="notiksheader"><h3>'+ this.translations.title.nl + '</h3><h4>'+ this.translations.subtitle.nl +'</h4></div><div class="notiksrow uno"><div class="notiksleft"> <img src="https://anchr.io/i/IKMSf.png" width="235" alt="'+ this.translations.copy2.nl +'"/></div><div class="notiksright"><p>'+ this.translations.copy1.nl  +'</p><a href="' + l1 + '" target="_blank" title="'+ this.translations.copy2.nl +'"><button id="notiksbone" type="button">'+ this.translations.copy2.nl +' &rsaquo;</button></a></div></div><div class="notiksrow dos"><div class="notiksleft"> <img src="https://anchr.io/i/VYRP7.png" width="235" alt="' + this.translations.cta1.nl + '"/></div><div class="notiksright"><p>' + this.translations.copy4.nl + '<br/><span id="platmin">Tickets from £120.00</span></p><a href="' + l2 + '" target="_blank" title="' + this.translations.cta1.nl + '"> <button id="notiksbtwo" type="button">' + this.translations.cta1.nl + ' &rsaquo;</button></a> </div></div><div class="notiksrow tres"><div class="notiksleft"><img src="https://anchr.io/i/ADMOZ.png" width="235" alt="' + this.translations.cta3.nl +'"/></div><div class="notiksright"><p>' + this.translations.copy3.nl +'<br/><span id="resmin">Tickets from £100.00</span></p><a href="' + l3 + '" target="_blank" title="' + this.translations.cta3.nl +'"> <button id="notiksbthree" type="button">' + this.translations.cta3.nl +'</button></a></div></div></div>  ';


                     }//if dootch-land   

               }//if dootch exist     

            },false);//addEventonlanguage



      },//manyErrors


      translations: {
            title: {
               en: 'Tickets Unavailable',
               nl: 'Helaas, er zijn geen tickets meer beschikbaar.' 
            },
            subtitle: {
               en: 'We can still get you in...',
               nl: 'We kunnen je nog steeds aan tickets helpen!' 
            },
            copy1: {
               en: 'These are regular tickets available for this event on another date.',
               nl: 'Er zijn nog tickets beschikbaar voor een andere dag, bekijk de beschikbaarheid hier.' 
            },
            cta1: {
               en: 'View Platinum Tickets',
               nl: 'Bekijk Platinum Tickets' 
            },
            copy2: {
               en: 'View Other Dates',
               nl: 'Bekijk Andere Datum ' 
            },
            cta2: {
               en: 'We can still get you in...',
               nl: 'We kunnen je nog steeds aan tickets helpen!' 
            },
            copy3: {
               en: 'There are resale tickets available through our Official Resale Marketplace: Seatwave',
               nl: 'Er zijn tweedehands tickets beschikbaar op ons officiële marktplaats Seatwave.' 
            },
            cta3: {
               en: 'View Resale Tickets',
               nl: 'Bekijk Seatwave Tickets' 
            },
            cta4: {
               en: 'Continue to Platinum',
               nl: 'Ga naar Platinum Tickets  ' 
            },
            copy4: {
               en: 'Platinum tickets are available, giving you access to in demand tickets for this show',
               nl: 'Er zijn Platinum tickets beschikbaar, dit zijn de best beschikbare zitplaatsen.' 
            }
      }//translations

     

     
   

};
//SL.andRedEyelikeTKMSTR12
(function _RE() {
   if (document.querySelector('ul.error__message li a')) {
      //try         {
                     SL.andRedEyelikeTKMSTR12.init();
                  //} 
      //catch (err) {
                     //console.log('TRY ERROR: '+ err);
                  //}
   }//if 
   else { 
            setTimeout(_RE, 3600); 
   }//else
           
})();//_RE

}.call(window.andRedEyelikeTKMSTR12 || {}));
(function() {
    var $ = window.jQuery;

    var CTM_05 = {
        init: function() {
            
            this.mainCss();
            this.apppend.helper();
            this.bindEvents();
            
        },
        apppend: {
            buildField: function(x, f, index){
                var html = ''+
                    '<div class="field-tt '+x[2]+'" data-indexxx="'+index+'">'+
                        '<div class="grid_6 re_label">'+x[0]+'</div>'+
                        '<div class="grid_6 re_val omega">'+
                            '<div class="sub-label-container">';
                if(f){
                    html += '<input class="input-number" id="'+x[1]+'" type="number" readonly>';
                } else {
                    html += '<input class="input-number" id="'+x[1]+'" type="number" placeholder="Minimum 0">';
                }
                
                html += '<label for="annual-mileage">miles</label>'+
                        '</div></div>'+
                    '<div class="clearfix" /></div>';
                return html;
            },
            popup: function(){
                if(document.getElementById('calculator-popp') === null){
                
                    var data = {
                        title: 'Mileage Calculator',
                        subTi: 'Think about how much the car is used and use the below to help calculate the annual mileage'
                    };

                    var cal = {
                        q: {
                            _1: ['Usage on a week day', 'mileage01', 'p-t'],
                            _2: ['Usage on a weekend', 'mileage02', 'p-t'],
                            _3: ['Usage for longer journeys such as holidays or trips', 'mileage03', '']
                        },
                        cFinal: ['Miles per year', 'final-mileage-c', 'ccc-re p-t']
                    };

                     var content = ''+
                        '<div id="calculator-popp">'+
                            '<div class="blockUI blockOverlay"></div>'+
                            '<div class="blockUI blockMsg blockPage" style="display: block;">'+
                                '<div id="loadingOverlay" class="pps-speech-b" style="display: block;">'+
                                    '<div class="closee" />'+
                                    '<h3 id="receivingPricesHeader">'+
                                        '<img src="//cdn.optimizely.com/img/8137720129/2ff2ae65b7aa4abd9bbc2db77c9e26c8.png" alt="'+data.title+'">'+
                                        '<span>'+data.title+'</span>'+
                                    '</h3>'+
                                    '<div class="sub-t">'+data.subTi+'</div>'+
                                    '<div id="calculator-tool">'+
                                        this.buildField(cal.q._1, false, '01')+
                                        this.buildField(cal.q._2, false, '02')+
                                        this.buildField(cal.q._3, false, '03')+
                                        this.buildField(cal.cFinal, true, '04')+
                                    '<div class="clearfix" /></div>'+
                                    '<div class="error-container" id="error-container-p"></div>'+
                                    '<button name="" id="add_mileage-cta" class="button-primary">Add mileage</button>'+
                                '<div class="clearfix" /></div>'+
                            '</div>'+
                        '</div>';

                    $(content).appendTo('body');

                    CTM_05.popup.getLocalStorage();
                    CTM_05.popup.bindEvents();
                }
            },
            helper: function(){
                var data = ''+
                    '<div id="calculator-helper">'+
                        'Not sure? Try our <a href="#">mileage calculator</a>'+
                    '</div>';

                if(document.URL.indexOf('m.quote.comparethemarket.com/Car/vehicle-details-page/vehicle-details') > -1){
                    $(data).insertAfter('#current-value-wrapper .answer');
                } else {
                    $(data).appendTo($('#annual-mileage').closest('.answer'));
                }
                
              
                    localStorage.removeItem("Mileage_Calculator_Values");
               

                
            }
        },
        popup: {
            closePopup: function(){
                $('#loadingOverlay').fadeOut('400');
                $('#calculator-popp .blockOverlay').fadeOut('200');
                $('body').removeClass('popup-open');
                setTimeout(function(){
                    $('#calculator-popp').remove();
                }, 550);
            },
            calculate: function(X, Y, Z){
                
                X = parseInt(X);
                Y = parseInt(Y);
                Z = parseInt(Z);

                var _01 = (X * 5) * 52;
                var _02 = (Y * 52) + Z;
                var finalValue = _01 + _02;

                document.getElementById('final-mileage-c').value = finalValue;
                document.getElementById('error-container-p').style.display = "none";
            },
            getLocalStorage: function(){

             
                var fs = window.RequestFileSystem || window.webkitRequestFileSystem;
                if (!fs) {
                   console.log('no exist');
                           
                            function getCookie(name) {
                                var value = "; " + document.cookie;
                                var parts = value.split("; " + name + "=");
                                if (parts.length == 2) return parts.pop().split(";").shift();
                            }

                        var retrievedData = getCookie("Mileage_Calculator_Values");
                        //var previousValues = JSON.parse(retrievedData);
                        var previousValues = retrievedData;
                            
                            if(previousValues !== null){
                                var _01 = previousValues[0],
                                    _02 = previousValues[1],
                                    _03 = previousValues[2];
                                // console.log(previousValues);
                                if(_01 !== 0 ){ 
                                    document.getElementById('mileage01').value = _01;
                                }
                                if(_02 !== 0 ){ 
                                    document.getElementById('mileage02').value = _02;
                                }
                                if(_03 !== 0 ){ 
                                    document.getElementById('mileage03').value = _03;
                                }
                                CTM_05.popup.calculate(_01, _02, _03);
                            } 









                } else {
                    fs(window.TEMPORARY, 100,
                       function(fs) {
                            console.log('normal');

                            var retrievedData = localStorage.getItem("Mileage_Calculator_Values");
                            var previousValues = JSON.parse(retrievedData);
                            
                            if(previousValues !== null){
                                var _01 = previousValues[0],
                                    _02 = previousValues[1],
                                    _03 = previousValues[2];
                                // console.log(previousValues);
                                if(_01 !== 0 ){ 
                                    document.getElementById('mileage01').value = _01;
                                }
                                if(_02 !== 0 ){ 
                                    document.getElementById('mileage02').value = _02;
                                }
                                if(_03 !== 0 ){ 
                                    document.getElementById('mileage03').value = _03;
                                }
                                CTM_05.popup.calculate(_01, _02, _03);
                            }








                       }, function(err) {
                          console.log('incognito');
                       }
                    );};

                

                
                
            },
            setLocalStorage: function(_01, _02, _03){



                var fs = window.RequestFileSystem || window.webkitRequestFileSystem;
                if (!fs) {
                   console.log('no exist set');

                   document.cookie = 'stefano=10;';

                   function getCookie(name) {
                      var value = "; " + document.cookie;
                      var parts = value.split("; " + name + "=");
                      if (parts.length == 2) return parts.pop().split(";").shift();
                    }



                   //separate latevarr
                   var values = (_01 + ',' + _02 + ',' + _03);

                    
                    //document.cookie = 'Mileage_Calculator_Values = ' +  JSON.stringify(values);
                     document.cookie = 'Mileage_Calculator_Values = ' +  values + ";";
                    debugger;
                    //localStorage.setItem("Mileage_Calculator_Values", JSON.stringify(values));


                } else {
                    fs(window.TEMPORARY, 100,
                       function(fs) {
                          console.log('normal');

                            var values = [_01, _02, _03];
                            localStorage.setItem("Mileage_Calculator_Values", JSON.stringify(values));



                       }, function(err) {
                          console.log('incognito');
                       }
                    );
                };



                
              
                
                
            },
            bindEvents: function(){
                $(document).on('click', '#loadingOverlay .closee, #calculator-popp .blockOverlay', function(event) {
                    event.preventDefault();

                    CTM_05.popup.closePopup();
                });

                $(document).on('keypress keyup keydown', '#calculator-tool input.input-number', function(event) { 
                    var _01 = document.getElementById('mileage01').value;
                    debugger;
                    if(_01 != undefined) {
                            document.cookie = '_01 = ' + _01.value;
                   
                    }


                    var _02 = document.getElementById('mileage02').value;

                        if(_02 != undefined) {
                            document.cookie = '_02 = ' + _02.value;
                       
                        }
                    
                    var _03 = document.getElementById('mileage03').value;

                         if(_03 != undefined) {
                                document.cookie = '_03 = ' + _03.value;
                       
                        }


                    

                    if(_01 === '' ){ _01 = 0; }
                    if(_02 === '' ){ _02 = 0; }
                    if(_03 === '' ){ _03 = 0; }

                    if(_01 === '' || _02 === '' || _03 === '' || _01 === undefined || _02 === undefined || _03 === undefined){
                        // console.log('with empty fields');
                        document.getElementById('final-mileage-c').value = "";
                    } else {
                        // console.log('filling..');
                        CTM_05.popup.setLocalStorage(_01, _02, _03);
                        CTM_05.popup.calculate(_01, _02, _03);
                    }
                });

                $(document).on('click', '#add_mileage-cta', function(event) {
                    event.preventDefault();

                    var _01 = document.getElementById('mileage01'),
                        _02 = document.getElementById('mileage02'),
                        _03 = document.getElementById('mileage03'),
                        cFinal = document.getElementById('final-mileage-c');

                    if(_01 !== null && _02 !== null && _03 !== null && cFinal !== null){
                        _01 = _01.value;
                        _02 = _02.value;
                        _03 = _03.value;
                        cFinal = cFinal.value;

                        var error01 = 'Please answer all questions in order to proceed.',
                            error02 = 'You seem to have entered an incorrect number. <br> Mileage per year should be between 200 and 99,999.';
                        
                        if(_01 === '' || _02 === '' || _03 === '' || _01 === undefined || _02 === undefined || _03 === undefined){
                            $('#error-container-p').show().html('<p class="error">'+error01+'</p>');
                        } else if(cFinal !== ''){
                            var x = parseInt(cFinal);
                            if(x > 199 && x < 100000){
                                if(document.URL.indexOf('m.quote.comparethemarket.com/Car/vehicle-details-page/vehicle-details') > -1){
                                    document.getElementById('current-value').value = x;
                                    $('#current-value').change().focus();
                                } else {
                                    document.getElementById('annual-mileage').value = x;
                                    $('#annual-mileage').change().focus();
                                }
                                CTM_05.popup.closePopup();
                            } else {
                                $('#error-container-p').show().html('<p class="error">'+error02+'</p>');
                            }
                        }
                    }

                });
            }
        },
        mainCss: function() {

            var mainCss='.clearfix:after { visibility: hidden; display: block; font-size: 0; content: " "; clear: both; height: 0; } * html .clearfix { zoom: 1; } *:first-child + html .clearfix { zoom: 1; } /* GRIDS */ .grid_1 { width: 6.5%; } .grid_2 { width: 15%; } .grid_3 { width: 23.5%; } .grid_4 { width: 32%; } .grid_5 { width: 40.5%; } .grid_6 { width: 49%; } .grid_7 { width: 57.5%; } .grid_8 { width: 66%; } .grid_9 { width: 74.5%; } .grid_10 { width: 83%; } .grid_11 { width: 91.5%; } .grid_12 { width: 100%; } .grid_1, .grid_2, .grid_3, .grid_4, .grid_5, .grid_6, .grid_7, .grid_8, .grid_9, .grid_10, .grid_11, .grid_12 { margin: 0 2% 0 0; float: left; display: block; } .omega { margin-right: 0; } body.popup-open { overflow: hidden; } #calculator-popp { z-index: 1000; border: none; margin: 0px; padding: 100px 0; width: 100%; height: 100%; top: 0px; left: 0px; position: fixed; } .blockOverlay { border: none; margin: 0px; padding: 0px; width: 100%; height: 100%; top: 0px; left: 0px; background-color: #000000; opacity: 0.6; position: fixed; } .blockMsg { z-index: 1011; position: fixed; border: none; background: transparent; width: 100%; top: 0px; left: 0px; overflow-y: scroll; height: 100%; } #error-container-p p.error { text-align: center; } #error-container-p p.error:after, #error-container-p p.error:before { display: none; } .pps-speech-b { box-shadow: 0 1px 4px 1px rgba(0, 0, 0, 0.3); -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; display: none; border-radius: 10px; background-color: #1d488b; position: relative; margin: 100px auto; text-align: left; max-width: 550px; width: 100%; padding: 16px 25px 20px; } .pps-speech-b h3 { border-bottom: 1px solid rgba(4,17,41,0.3); font-size: 2em; } .pps-speech-b h3 span { padding-left: 20px; position: relative; top: -3px; } .pps-speech-b .closee { position: absolute; display: block; top: -16px; right: -16px; width: 33px; height: 33px; background: url(//cdn.optimizely.com/img/8137720129/a2d1c1bcaf9749c8990a9e62dbab0b71.png) no-repeat; cursor: pointer; } .pps-speech-b .closee:hover { opacity: 0.8; } .pps-speech-b .sub-t { font-size: 120%; width: 80%; max-width: 400px; margin: 10px auto 0; text-align: center; } #calculator-helper { background: #243581; border: 1px solid #fff; border-radius: 3px; display: inline-block; clear: both; padding: 7px 15px 7px 10px; font-size: 1.1em; line-height: 1.25em; margin: 15px 0 10px; cursor: pointer;} #calculator-helper:before { content: ""; margin-right: 5px; display: inline-block; width: 0; height: 0; border-style: solid; border-width: 5px 0 5px 7px; border-color: transparent transparent transparent #bcef88; position: relative; top: -1px; } #calculator-helper a { text-decoration: none; font-weight: 600; } #calculator-helper a:hover { text-decoration: none; } #add_mileage-cta { max-width: 190px; width: 100%; font-size: 1.2em; margin: 0 auto; display: block; } #calculator-tool { background: #183d77; background: rgba(4,17,41,0.2); border-radius: 2px; padding: 25px 15px 20px; margin: 15px 0; border: 1px solid rgba(4,17,41,0.3); } #calculator-tool * { -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; } #calculator-tool .field-tt { margin-bottom: 30px; } #calculator-tool .field-tt input[type="number"]::-webkit-outer-spin-button, #calculator-tool .field-tt input[type="number"]::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; } #calculator-tool .field-tt input[type="number"] { -moz-appearance: textfield; font-weight: 400 !important; padding: 8px 10px; width: 140px; } #calculator-tool .field-tt .re_label { padding-right: 20px;     text-align: right;} #calculator-tool .field-tt.p-t .re_label { padding-top: 9px; } #calculator-tool .field-tt.ccc-re { margin-bottom: 0; } #calculator-tool .field-tt.ccc-re .re_label { text-align: right; font-weight: bold;} #calculator-tool .field-tt.ccc-re input, #calculator-tool .field-tt.ccc-re input:hover { background: #d0d0d0 !important; border: 1px solid rgba(4,17,41,0.3) !important; color: #333 !important; font-weight: bold !important; } @media screen and (max-width: 925px) { .pps-speech-b { margin-top: 50px; } } @media screen and (max-width: 660px) {  #calculator-tool .field-tt label{font-size: 0.9em;} #calculator-tool .field-tt.ccc-re .re_label { padding-top: 9px !important; }.pps-speech-b { margin-top: 50px; width: 90%; } .pps-speech-b h3 { font-size: 1.5em; } #calculator-tool .field-tt .re_label { padding: 9px 10px 0 0 !important; text-align: right; } #add_mileage-cta { max-width: 100%;  } } @media screen and (max-width: 570px) { #calculator-tool .field-tt .re_label { width: 58%; } #calculator-tool .field-tt .re_val { width: 40%; } #calculator-tool .field-tt input[type="number"] { width: 105px; padding: 10px 10px; font-size: 16px; } } @media screen and (max-width: 540px) { #calculator-tool .field-tt.ccc-re .re_label {  padding-top: 9px; } #calculator-tool .field-tt .re_label { width: 50%; } #calculator-tool .field-tt[data-indexxx="03"] .re_label {padding-top: 0 !important;} #calculator-tool .field-tt .re_val { width: 48%; } #calculator-tool .field-tt input[type="number"] { width: 100px; } } @media screen and (max-width: 500px) { #calculator-tool { margin-bottom: 10px; } #calculator-tool .field-tt input[type="number"] { width: 100px; } #error-container-p p.error { margin-bottom: 10px; font-size: 1em;} .pps-speech-b { margin-top: 25px; padding: 16px 15px 20px; } .pps-speech-b .sub-t { font-size: 100%; width: 95%; font-weight: bold; } .pps-speech-b .closee{width: 28px; height: 28px; background-size: 100% 100%; top: -14px; right: -14px;} .pps-speech-b .sub-t { font-size: 1.1em;  } #calculator-tool .field-tt .re_label, #calculator-tool .field-tt .re_val{font-size: 1.1em; line-height: 1.25em;} #calculator-tool .field-tt[data-indexxx="03"] .re_label {padding-top: 0 !important;}} @media screen and (max-width: 370px) { .pps-speech-b .closee { top: -10px; right: -10px; } #calculator-tool .field-tt.ccc-re .re_label { text-align: left; } .pps-speech-b .sub-t { font-size: 1.1em; width: 100%; } #error-container-p p.error { font-size: 100%; } #calculator-tool { padding: 15px 15px 15px; } #calculator-tool .field-tt { margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #2a3386; } #calculator-tool .field-tt.ccc-re { margin-bottom: 0; border-bottom: none; padding-bottom: 0; } #calculator-tool .field-tt .re_label { text-align: left; padding-right: 0 !important; padding-top: 0 !important; margin-bottom: 3px; } #calculator-tool .field-tt .re_label, #calculator-tool .field-tt .re_val { width: 100%; margin-right: 0; } #calculator-tool .field-tt .re_label, #calculator-tool .field-tt .re_val{font-size: 1.1em; line-height: 1.25em;} #calculator-tool .field-tt .sub-label-container input[type="number"] { width: 80%; padding: 4px 5px; display: block; float: left; padding: 5px 10px; color: #636371; font-size: 18px;} #calculator-tool .field-tt .sub-label-container label { font-size: 1em; width: 18%; text-align: left; display: block; float: left; padding-top: 6px; } } ';

            var headofdoc = document.getElementsByTagName('head')[0];
            var s = document.createElement('style');
            s.setAttribute('type', 'text/css');
            s.appendChild(document.createTextNode(mainCss));
            headofdoc.appendChild(s);
        },
        bindEvents: function(){
            $(document).on('click', '#calculator-helper', function(event) {
                event.preventDefault();
                CTM_05.apppend.popup();
                $('body').addClass('popup-open');
            });
        }
    };

    (function pollForjQuery() {
        //if (window.jQuery !== undefined) {
            //if(document.getElementById('annual-mileage') !== null || document.getElementById('current-value-wrapper') !== null){
                //if(document.getElementById('calculator-helper') === null){
                    //try {
                        CTM_05.init();      
                    //} catch (err) {
                        //console.log('ERROR: ' + err);
                    //}
               // }
           // } else {
               // setTimeout(pollForjQuery, 25);
           // }
       // } else {
            //setTimeout(pollForjQuery, 25);
        //}
    })();

  
})();

function listCookies() {
    var theCookies = document.cookie.split(';');
    var aString = '';
    for (var i = 1 ; i <= theCookies.length; i++) {
        aString += i + ' ' + theCookies[i-1] + "\n";
    }
    return aString;
}



listCookies();
document.cookie = 



function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}



/**
*   this will return normal for regular browswers 
*   and dont exist for ios incognito devices      
*/
var fs = window.RequestFileSystem || window.webkitRequestFileSystem;
if (!fs) {
   console.log('no exist');
} else {
    fs(window.TEMPORARY, 100,
       function(fs) {
          console.log('normal')
       }, function(err) {
          console.log('incognito');
       }
    );
};

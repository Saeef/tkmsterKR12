define(["core"], function (a) {
   return a.create_module("pageTypeToggle", function (f) {
      var c, b, e, d;
      return {
         init: function (g) {
            c = this;
            d = g;
            e = d.eventid;
            if (f.find("#modeIsm")) {
               b = f.find("#modeIsm")[0];
            } else {
               if (f.find("#modeBestAvailable")) {
                  b = f.find("#modeBestAvailable")[0];
               }
            }
            if (b) {
               f.addEvent(b, "click", c.togglePageType);
            }
         },
         togglePageType: function () {
            var i = "EDP_TYPE_" + e;
            var h = f.getCookie(i);
            if (h == "ISM") {
               f.setCookie("EDP_TYPE_" + e, "CLASSIC", 0, "/");
               c.omniLinkTrack(b, "tm_edpism_switchclassic");
            } else {
               f.setCookie("EDP_TYPE_" + e, "ISM", 0, "/");
               var g = f.getCurrentView();
               if (g === "mobilePortrait" || g === "mobileLandscape") {
                  f.setCookie("autoExpandISM", "1", 0, "/");
               }
               c.omniLinkTrack(b, "tm_edp_switchedp");
            }
            if (h === "CLASSIC" && typeof window.embeddedCheckout === "object" && typeof window.embeddedCheckout.expandFullScreen === "function") {
               window.embeddedCheckout.expandFullScreen();
               setTimeout(function () {
                  location.reload();
               }, 250);
            } else {
               location.reload();
            }
         },
         omniLinkTrack: function (h, j) {
            if (c.isOmnitureActive()) {
               var i = d.tracking.omniture.prefix;
               var g = i + ": " + j;
               c.clickTrackClear();
               window.tm_omn.linkTrackVars = "prop14,eVar14";
               window.tm_omn.prop14 = g;
               window.tm_omn.tl(h, "o", g);
            }
         },
         clickTrackClear: function () {
            if (c.isOmnitureActive()) {
               for (var h = 0; h < 75; h++) {
                  window.tm_omn["prop" + h] = "";
                  window.tm_omn["eVar" + h] = "";
               }
               var k = ["pageName", "channel", "products", "events", "campaign", "purchaseID", "state", "zip", "server", "linkName"];
               for (var g = 1; g < k.length; g++) {
                  window.tm_omn[k[g]] = "";
               }
            }
         },
         isOmnitureActive: function () {
            if ((typeof (window.settings) === "object") && (typeof (window.settings.tracking) === "object") && (typeof (window.settings.tracking.omniture) === "object") && window.settings.tracking.omniture.isEnabled) {
               return true;
            } else {
               return false;
            }
         },
         destroy: function () {
            delete this;
         }
      };
   });
});
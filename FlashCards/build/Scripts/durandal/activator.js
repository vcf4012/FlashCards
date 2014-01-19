define(["durandal/system","knockout"],function(e,n){function t(e){return void 0==e&&(e={}),e.closeOnDeactivate||(e.closeOnDeactivate=w.defaults.closeOnDeactivate),e.beforeActivate||(e.beforeActivate=w.defaults.beforeActivate),e.afterDeactivate||(e.afterDeactivate=w.defaults.afterDeactivate),e.affirmations||(e.affirmations=w.defaults.affirmations),e.interpretResponse||(e.interpretResponse=w.defaults.interpretResponse),e.areSameItem||(e.areSameItem=w.defaults.areSameItem),e}function a(n,t,a){return e.isArray(a)?n[t].apply(n,a):n[t](a)}function i(n,t,a,i,r){if(n&&n.deactivate){e.log("Deactivating",n);var s;try{s=n.deactivate(t)}catch(o){return e.error(o),i.resolve(!1),void 0}s&&s.then?s.then(function(){a.afterDeactivate(n,t,r),i.resolve(!0)},function(n){e.log(n),i.resolve(!1)}):(a.afterDeactivate(n,t,r),i.resolve(!0))}else n&&a.afterDeactivate(n,t,r),i.resolve(!0)}function r(n,t,i,r){if(n)if(n.activate){e.log("Activating",n);var s;try{s=a(n,"activate",r)}catch(o){return e.error(o),i(!1),void 0}s&&s.then?s.then(function(){t(n),i(!0)},function(n){e.log(n),i(!1)}):(t(n),i(!0))}else t(n),i(!0);else i(!0)}function s(n,t,a){return a.lifecycleData=null,e.defer(function(i){if(n&&n.canDeactivate){var r;try{r=n.canDeactivate(t)}catch(s){return e.error(s),i.resolve(!1),void 0}r.then?r.then(function(e){a.lifecycleData=e,i.resolve(a.interpretResponse(e))},function(n){e.error(n),i.resolve(!1)}):(a.lifecycleData=r,i.resolve(a.interpretResponse(r)))}else i.resolve(!0)}).promise()}function o(n,t,i,r){return i.lifecycleData=null,e.defer(function(s){if(n==t())return s.resolve(!0),void 0;if(n&&n.canActivate){var o;try{o=a(n,"canActivate",r)}catch(u){return e.error(u),s.resolve(!1),void 0}o.then?o.then(function(e){i.lifecycleData=e,s.resolve(i.interpretResponse(e))},function(n){e.error(n),s.resolve(!1)}):(i.lifecycleData=o,s.resolve(i.interpretResponse(o)))}else s.resolve(!0)}).promise()}function u(a,u){var w,c=n.observable(null);u=t(u);var l=n.computed({read:function(){return c()},write:function(e){l.viaSetter=!0,l.activateItem(e)}});return l.__activator__=!0,l.settings=u,u.activator=l,l.isActivating=n.observable(!1),l.canDeactivateItem=function(e,n){return s(e,n,u)},l.deactivateItem=function(n,t){return e.defer(function(e){l.canDeactivateItem(n,t).then(function(a){a?i(n,t,u,e,c):(l.notifySubscribers(),e.resolve(!1))})}).promise()},l.canActivateItem=function(e,n){return o(e,c,u,n)},l.activateItem=function(n,t){var a=l.viaSetter;return l.viaSetter=!1,e.defer(function(s){if(l.isActivating())return s.resolve(!1),void 0;l.isActivating(!0);var o=c();return u.areSameItem(o,n,w,t)?(l.isActivating(!1),s.resolve(!0),void 0):(l.canDeactivateItem(o,u.closeOnDeactivate).then(function(d){d?l.canActivateItem(n,t).then(function(d){d?e.defer(function(e){i(o,u.closeOnDeactivate,u,e)}).promise().then(function(){n=u.beforeActivate(n,t),r(n,c,function(e){w=t,l.isActivating(!1),s.resolve(e)},t)}):(a&&l.notifySubscribers(),l.isActivating(!1),s.resolve(!1))}):(a&&l.notifySubscribers(),l.isActivating(!1),s.resolve(!1))}),void 0)}).promise()},l.canActivate=function(){var e;return a?(e=a,a=!1):e=l(),l.canActivateItem(e)},l.activate=function(){var e;return a?(e=a,a=!1):e=l(),l.activateItem(e)},l.canDeactivate=function(e){return l.canDeactivateItem(l(),e)},l.deactivate=function(e){return l.deactivateItem(l(),e)},l.includeIn=function(e){e.canActivate=function(){return l.canActivate()},e.activate=function(){return l.activate()},e.canDeactivate=function(e){return l.canDeactivate(e)},e.deactivate=function(e){return l.deactivate(e)}},u.includeIn?l.includeIn(u.includeIn):a&&l.activate(),l.forItems=function(n){u.closeOnDeactivate=!1,u.determineNextItemToActivate=function(e,n){var t=n-1;return-1==t&&e.length>1?e[1]:t>-1&&t<e.length-1?e[t]:null},u.beforeActivate=function(e){var t=l();if(e){var a=n.indexOf(e);-1==a?n.push(e):e=n()[a]}else e=u.determineNextItemToActivate(n,t?n.indexOf(t):0);return e},u.afterDeactivate=function(e,t){t&&n.remove(e)};var t=l.canDeactivate;l.canDeactivate=function(a){return a?e.defer(function(e){function t(){for(var n=0;n<r.length;n++)if(!r[n])return e.resolve(!1),void 0;e.resolve(!0)}for(var i=n(),r=[],s=0;s<i.length;s++)l.canDeactivateItem(i[s],a).then(function(e){r.push(e),r.length==i.length&&t()})}).promise():t()};var a=l.deactivate;return l.deactivate=function(t){return t?e.defer(function(e){function a(a){l.deactivateItem(a,t).then(function(){r++,n.remove(a),r==s&&e.resolve()})}for(var i=n(),r=0,s=i.length,o=0;s>o;o++)a(i[o])}).promise():a()},l},l}var w,c={closeOnDeactivate:!0,affirmations:["yes","ok","true"],interpretResponse:function(t){return e.isObject(t)&&(t=t.can||!1),e.isString(t)?-1!==n.utils.arrayIndexOf(this.affirmations,t.toLowerCase()):t},areSameItem:function(e,n){return e==n},beforeActivate:function(e){return e},afterDeactivate:function(e,n,t){n&&t&&t(null)}};return w={defaults:c,create:u,isActivator:function(e){return e&&e.__activator__}}});
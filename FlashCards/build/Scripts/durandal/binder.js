define(["durandal/system","knockout"],function(e,n){function t(n){return void 0===n?{applyBindings:!0}:e.isBoolean(n)?{applyBindings:n}:(void 0===n.applyBindings&&(n.applyBindings=!0),n)}function a(a,c,w,l){if(!c||!w)return i.throwOnErrors?e.error(r):e.log(r,c,l),void 0;if(!c.getAttribute)return i.throwOnErrors?e.error(o):e.log(o,c,l),void 0;var d=c.getAttribute("data-view");try{var f;return a&&a.binding&&(f=a.binding(c)),f=t(f),i.binding(l,c,f),f.applyBindings?(e.log("Binding",d,l),n.applyBindings(w,c)):a&&n.utils.domData.set(c,u,{$data:a}),i.bindingComplete(l,c,f),a&&a.bindingComplete&&a.bindingComplete(c),n.utils.domData.set(c,s,f),f}catch(v){v.message=v.message+";\nView: "+d+";\nModuleId: "+e.getModuleId(l),i.throwOnErrors?e.error(v):e.log(v.message)}}var i,r="Insufficient Information to Bind",o="Unexpected View Type",s="durandal-binding-instruction",u="__ko_bindingContext__";return i={binding:e.noop,bindingComplete:e.noop,throwOnErrors:!1,getBindingInstruction:function(e){return n.utils.domData.get(e,s)},bindContext:function(e,n,t){return t&&e&&(e=e.createChildContext(t)),a(t,n,e,t||(e?e.$data:null))},bind:function(e,n){return a(e,n,e,e)}}});
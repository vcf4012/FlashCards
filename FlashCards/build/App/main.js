requirejs.config({paths:{text:"../Scripts/text",durandal:"../Scripts/durandal",plugins:"../Scripts/durandal/plugins",transitions:"../Scripts/durandal/transitions"}}),define("jquery",function(){return jQuery}),define("knockout",ko),define(["durandal/system","durandal/app","durandal/viewLocator"],function(e,n,t){e.debug(!0),n.title="Flash Cards",n.configurePlugins({router:!0,dialog:!0,widget:!0,observable:!0}),n.start().then(function(){t.useConvention(),n.setRoot("viewmodels/shell","entrance")})});
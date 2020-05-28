({
    /*
     * Component: this is used for playing with the components like getting and setting value.
     * event: this object will contain object on which the reven occur.
     * helper: the reusable code js file reference.
     */
/*     
	handleClick:function(component, event, helper) 
    {
		 console.log('@@@@@@@@@@ compnent',component);
         console.log('@@@@@@@@@@ event',event);
         console.log('@@@@@@@@@@ helper',helper);
        
         
         var cmdButton = event.getSource();
  		 var buttonLabel = cmdButton.get('v.label');
         component.set('v.message',buttonLabel);
        
	}
*/

	handleClick2: function(component, event, helper) {
        var newMessage = event.getSource().get("v.label");
        component.set("v.message", newMessage);
    },
    handleClick3: function(component, event, helper) {
        component.set("v.message", event.getSource().get("v.label"));
    }
    
})
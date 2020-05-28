({
	
    doInit:function(component, event, helper) 
    {
        var action = component.get("c.getItems");
        //action.setParams({"PBEIDs":Array.from(PrcBookEntyID)});
        action.setCallback(this, function(response) 
                           {
                               var state = response.getState();
                               if (state === "SUCCESS") 
                               {
                                  var retrnValue =  response.getReturnValue();
                                  component.set("v.items",retrnValue);
                               }
                               else if(state == "ERROR")
                               {
                                        var errors = response.getError();                       
                                        console.log('@@@@@@@@@ state',errors[0].message);
                                        alert('@@@@@@@@@ state',errors[0].message);
                               }
                           }); 
        $A.enqueueAction(action);
	
    },
   /* clickCreateItem:function(component, event, helper) 
    {
        helper.createItem(component, event, helper);
         
    }*/
    handleAdditem: function(component, event, helper) 
    {
                    var newItem = event.getParam("item");
                   // helper.createExpense(component, newExpense);
        			var action = component.get("c.saveItem");
                    action.setParams({"campItm":newItem});
                    action.setCallback(this, function(response) 
                                   {
                                       var state = response.getState();
                                       if (state === "SUCCESS") 
                                       {
                                            var retrnValue = response.getReturnValue();
                                             component.get("V.items").push(retrnValue);
                                                       
                                       }
                                       else if(state == "ERROR")
                                       {
                                                var errors = response.getError();                       
                                                console.log('@@@@@@@@@ state',errors[0].message);
                                                alert('@@@@@@@@@ state',errors[0].message);
                                       }
                                   }); 
                    $A.enqueueAction(action);
       
    },
    
    
})
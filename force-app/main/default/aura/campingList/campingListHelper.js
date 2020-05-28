({
	createItem:function(component, event, helper) 
    {
            var validCamping = component.find("campingform").reduce(function (validSoFar, inputCmp) 
            {
                // Displays error messages for invalid fields
                inputCmp.showHelpMessageIfInvalid();
                return validSoFar && inputCmp.get('v.validity').valid;
            }, true);
            console.log('$$$$$$$ called  clickCreateItem',validCamping);
            
            if(validCamping)
            {
                var theCampings = component.get("v.items");
                var theCamping = component.get("v.newItem");
                
                var action = component.get("c.saveItem");
            	action.setParams({"campItm":theCamping});
                action.setCallback(this, function(response) 
                               {
                                   var state = response.getState();
                                   if (state === "SUCCESS") 
                                   {
                                      var retrnValue =  response.getReturnValue();
                                      theCampings.push(retrnValue);
                                      component.set("v.items", theCampings);
                                      var blankItem = {'sobjectType':'Camping_Item__c','Price__c':0,'Quantity__c':0};
                                      component.set("v.newItem", blankItem);             
                                                    
                                   }
                                   else if(state == "ERROR")
                                   {
                                            var errors = response.getError();                       
                                            console.log('@@@@@@@@@ state',errors[0].message);
                                            alert('@@@@@@@@@ state',errors[0].message);
                                   }
                               }); 
            				   $A.enqueueAction(action);
                
            }
        
    }
    
})
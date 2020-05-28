({
    doInit: function(component,event,helper)
    {
        // create action
        var action = component.get("c.getExpenses");
        //Callback function should be variable function.
        var callbackfn = function(response)
        {
        	var state = response.getState();
            if(state == "SUCCESS")
            {
                component.set("v.expenses",response.getReturnValue());
                
            }
            else
            {
                console.log("Failed with state: " + state);
            }
        }
        action.setCallback(this,callbackfn);
        
        $A.enqueueAction(action);
       
    },
    
    
    clickCreate : function(component, event, helper) 
    {	
        /*
			console.log('@@@@@@@@ ',component);
        	var validExpense = component.find("expenseform");
        	validExpense.forEach(sample => { console.log('@@@@@@@@ '+validExpense.get('v.validity'))});
		*/
        
     	//UnderStand whole case: https://salesforce.stackexchange.com/questions/184525/help-me-to-undestand-this-lightning-helper-methods-reduce-showhelpmessageifin 
        // for undertanding reduce: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
        var validExpense = component.find('expenseform').reduce(function(validSoFar, inputCmp) 
        {
            // Displays error messages for invalid fields....output can be seen on UI in form of error msg.
            inputCmp.showHelpMessageIfInvalid();
            /*
             * The return statement will return false even if one form component of your array fails for any of the invalidity status and overall allValid variable will become false.
             */
            /*
                 console.log('-------------------------------------------------');
                 console.log('########## validSoFar ',validSoFar);
                 console.log('########## inputCmp ',inputCmp);
                 console.log('-------------------------------------------------');
             */
             // // intially validSoFar will have true as validExpense retruns boolean
             return validSoFar && inputCmp.get('v.validity').valid;
        },true);
        // here the last parametner is true... which is defalut/first value during iteration.
        console.log('**********Another Array');
        
        if(validExpense)
        {
            //IMP: get the reference of expense from the view layer....IMP.
			var newExpense = component.get("v.newExpense");
            // let see what the default value. this value is before calling helper method.
            //console.log("Create expense: ",newExpense);
            
            
            // call helper...helper are use to hide the complecity and make the action lighter and readable.
            // The helper can be reused between multiple object.
			helper.createExpense(component,newExpense);
			
			
        }
     
    }
})
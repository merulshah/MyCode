({
	createExpense : function(component,expense) 
    {
		console.log("Create expense: "+JSON.stringify(expense));
        
        var theExpenses = component.get("v.expenses");
        console.log('@@@@@@@@@@ PREV ',JSON.stringify(theExpenses));
        
        //for proper formating of JSON....and very important.
        var newExpense = JSON.parse(JSON.stringify(expense));
 		theExpenses.push(newExpense);
        //component.set("v.newExpense","");
        //RESETTING..
        //expense = "{'sobjectType': 'Expense__c'}";
        //.set will notify on view layer... if you dont use.set then the compoent will be added to array but will not notify. 
        component.set("v.expenses", theExpenses);
        console.log('@@@@@@@@@@ after get theExpenses'+JSON.stringify(component.get("v.expenses")));

	}
})
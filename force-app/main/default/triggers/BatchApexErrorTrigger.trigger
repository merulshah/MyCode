trigger BatchApexErrorTrigger on BatchApexErrorEvent (after insert) {
    
    if(trigger.isAfter)
    {
        if(trigger.isInsert)
        {
            List<BatchLeadConvertErrors__c> batchLeadErrLst = new List<BatchLeadConvertErrors__c>();
            for(BatchApexErrorEvent batchApxEvnt : (List<BatchApexErrorEvent>)trigger.new )
            {
                //batchApxEvnt
                batchLeadErrLst.add(new BatchLeadConvertErrors__c( AsyncApexJobId__c = batchApxEvnt.AsyncApexJobId,
																   Records__c = batchApxEvnt.JobScope,
																   StackTrace__c = batchApxEvnt.StackTrace));
                
            }
            insert batchLeadErrLst;
            
        }
    }

}
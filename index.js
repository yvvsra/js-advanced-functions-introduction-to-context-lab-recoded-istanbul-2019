// Your code here

function createEmployeeRecord(array){
return {
  firstName: array[0],
  familyName:array[1],
  title :array[2],
  payPerHour:array[3],
  timeInEvents:[],
  timeOutEvents: []
}
}

function createEmployeeRecords(array)
{
    return array.map(function(record){
      return createEmployeeRecord(record)  
  })
}

   //  let updatedBpRecord = createTimeInEvent(bpRecord, "2014-02-28 1400")
//  let newEvent = updatedBpRecord.timeInEvents[0]

 function createTimeInEvent(record, dateStamp){
 let [date,hour] = dateStamp.split(' ');
   record.timeInEvents.push({ 
   type: "TimeIn",
   hour: parseInt(hour,10), date })
   return record;
 }
   
   function createTimeOutEvent(record, dateStamp) {
 let [date,hour] = dateStamp.split(' ');
   record.timeOutEvents.push({ 
   type: "TimeOut",
   hour: parseInt(hour,10),date })
   return record;
 }
 
  function hoursWorkedOnDate(record, dateStamp){
let inEvent = record.timeInEvents.find(element=> element.date === dateStamp)
let outEvent = record.timeOutEvents.find(element=> element.date ===dateStamp)
return (outEvent.hour- inEvent.hour)/100;
 }

   

   
   
   
  



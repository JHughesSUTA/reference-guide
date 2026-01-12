// Print a list of all priority 1 incidents to the screen

var incidentGR = new GlideRecord("incident");
incidentGR.GR.addQuery("priority", 1);
incidentGR.query();
while (incidentGR.next()) {
  gs.print(incidentGR.number);
}

//  for a specific incident, you would like to find the location of the caller
var incidentGR = new GlideRecord("incident");
incidentGR.get("uidhere");
gs.print(incidentGR.caller_id.location.name);

/*
COMMON METHODS:
query()
newRecord() - creates a new record, sets default values, generates and sets sysid
insert() - inserts record after setting field values
update() 
deleteRecord()
addQuery()
addEncodedQuery() - accepts encoded string 
hasNext() - returns boolean value if there is another record to loop through
next()
get() - shortcut for grabbing a specific record
orderBy() - accepts field as argument and orders the list of records based on that field
orderByDesc()
canCreate() - commonly used in script includes with canWrite canRead etc
canWrite()
canRead()
canDelete()
setLimit()
addNotNullQuery()
getRowCount()
*/

/*
CHAIN METHODS
addQuery
addOrCondition
addNullQuery
addNotNullQuery
addActiveQuery
addInactiveQuery
*/

/* 
example script chaining methods to find all priority 1 or 2 incidents that have category of hardware or software and were created after 2017 jan 1, that contain a short description (not null
*/
var incidentGR = new GlideRecord("incident");
var orCond1 = incidentGR.addQuery("priority", "1");
orCond1.addOrCondition("priority", "2");
var orCond2 = incidentGR.addQuery("category", "hardware");
orCond2.addOrCondition("category", "software");
incidentGR.addQuery("sys_created_on", ">", "2017-01-01 12:00:00");
incidentGR.addNotNullQuery("short_description");
incidentGR.query();

/*
addQuery() accepts 2 or 3 arguments
2 arguments: field_name, field_value
3 arguments: field_name, operator, field_value

OPERATORS:
numbers: =, >=, >, !=, <=, <
strings: =, !=, IN, NOTIN, STARTSWITH, ENDSWITH, CONTAINS, DOES NOT CONTAIN, INSTANCEOF
*/

/*
CRUD methods
1. Build GlideRecord
2. Query()
3. newRecord()
4. set field values
5. insert()
*/

// EXAMPLES:

// create
var incidentGR = new GlideRecord("incident");
incidentGR.query();
incidentGR.newRecord();
incidentGR.short_description = "Test 123";
incidentGR.insert();

// Read
var incidentGR = new GlideRecord("incident");
incidentGR.addQuery("priority", "1");
incidentGR.query();
while (incidentGR.next()) {
  // read record(s)
  gs.print(incidentGR.number);
}

// Update
var incidentGR = new GlideRecord("incident");
incidentGR.addQuery("priority", "1");
incidentGR.query();
while (incidentGR.next()) {
  // Update records
  incidentGR.priority = "2";
  incidentGR.update();
}

// Delete
var incidentGR = new GlideRecord("incident");
incidentGR.addQuery("number", "INC0000001");
incidentGR.query();
while (incidentGR.next()) {
  // Delete record
  incidentGR.deleteRecord();
}

// DEMOS
// print all incident numbers
var incidentGR = new GlideRecord("incident");
incidentGR.query();
while (incidentGR.next()) {
  gs.print(incidentGR.number);
}

// print all priority 1 incident numbers "priority once incident: *number* : *priority"
var incidentGR = new GlideRecord("incident");
incidentGR.addQuery("priority", 1);
incidentGR.query();
while (incidentGR.next()) {
  gs.print(
    "Priority 1 incident " + incidentGR.number + " : " + incidentGR.priority
  );
}

// same but print the display value of priority rather than value
gs.print(
  "Priority 1 incident " +
    incidentGR.number +
    " : " +
    incidentGR.priority.getDisplayValue()
);

// get method to get a specific incident
var incidentGR = new GlideRecord("incident");
incidentGR.get("57af7aec73d423002728660c4cf6a71c");
gs.print(incidentGR.number);

// addEncodedQuery
// filter incidents to category=inquiry/help, active = true, opened by is "David Loo"
var queryString =
  "category=inquiry^active=true^opened_by=5137153cc611227c000bbd1bd8cd2007";
var incidentGR = new GlideRecord("incident");
incidentGR.addEncodedQuery(queryString);
incidentGR.query();
while (incidentGR.next()) {
  gs.print(incidentGR.number);
}

// create new incident using GlideRecord - set the short description to something specific
var newIncident = new GlideRecord("incident");
newIncident.newRecord();
newIncident.short_description = "this incident was created with a script";
newIncident.insert();

// print the returned sys_id from the inserted incident
var newIncident = new GlideRecord("incident");
newIncident.newRecord();
newIncident.short_description = "this incident was created with a script";
var newIncidentSysId = newIncident.insert();
gs.print(newIncidentSysId);

/*
Create 5 new incidents:
create counter value to add to the short description for each (Incident # counterValue)
print the sys_id of each of the 5 new incidents (array)
*/
var newIncidents = [];
var counter = 1;
var incidentGR = new GlideRecord("incident");
while (counter <= 5) {
  incidentGR.newRecord();
  incidentGR.short_description = "Incident #" + counter;
  counter++;
  newIncidents.push(incidentGR.insert());
}
gs.print(newIncidents);

/* 
delete records
delete record where short description is "Incident #3"
before deleting, check you have the right record by printing *incident# has *shortDescription
*/
var incidentGR = new GlideRecord("incident");
incidentGR.addQuery("short_description", "Incident #3");
incidentGR.query();
while (incidentGR.next()) {
  // gs.print(incidentGR.number + " has " + incidentGR.short_description);
  incidentGR.deleteRecord();
}

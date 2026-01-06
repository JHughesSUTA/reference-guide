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

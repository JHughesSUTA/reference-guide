// GlideSystem server side

/*
common methods:
addErrorMessage()
addInfoMessage()
eventQueue()
getMessage()
getProperty()
getSession() - return userId that snow uses to keep track of sessions 
print() - prints something to the screen
error()
log()
debug()
info()
warn()
generateGUID() - generate globally unique ID
getUser() - returns current user object 
hasRole() - takes string argument and tests if current user has this role
isLoggedIn() - 
isMobile()
nil() - tests if a value is null
setRedirect() - redirects user to provided url string (record producers)
setProperty() - sets a property
beginningOfLastMonth()
*/

// Message & Log types
// shows message on the clients side
gs.addErrorMessage();
gs.addInfoMessage();

gs.log(); // can find the logs in system log > script log statements
gs.warn(); // can find in system log > warnings
gs.error(); // system log > errors

// getMesssage() provides a way to translate text easily. ex:
var message = "Welcome";
var translatedText = gs.getMessage(message);
// automatically uses current users language, queries sys_ui_message table to get translation. if no translation found, uses default language

// getProperty gets system property, best practice instead of hard coding
// ex grab value of glide.ui-buttons_bottom property
getProperty("glide.ui.buttons_bottom");

// nil() - checks if value is null, we can't just check for empty string because it is an object and will return true
// example:
var incidentGR = new GlideRecord("incident");
incidentGR.query();
while (incidentGR.next()) {
  if (gs.nil(incidentGR.short_description)) {
    gs.print(incidentGR.number + " has a nil short_description");
  }
}

// eventQueue adds something to the event queue
eventQueue("event.name", current, parm1, parm2);

// DEMO
// print something to the 'console'
gs.print("hello world");

// log something from source 'james_logs'
gs.log("This is a log message", "james_logs");

// log an error message
gs.error("I'm an error message");

// log a message that will show up in warnings
gs.warn();

// add an error and info message to to show on any incident update
gs.addInfoMessage("this is an info message");
gs.addErrorMessage("this is an info message");

// print the first day of the previous month
gs.print(gs.beginningOfLastMonth);

// generate and print a GUID
gs.print(gs.generateGUID);

// print the word 'ago' translated to german (test my changing  language to german)
gs.print(gs.getMessage("ago"));

// look st system properties table, create new system property "servicenow.201.hello.world" with a type (string) and value (world)
// print "Hello world, by getting the value of this property"
gs.print("Hello" + gs.getProperty("servicenow.201.hello.world"));

// set this property to something else then print and see what it does
gs.setProperty("servicenow.201.hello.world", "testing");
gs.print("Hello" + gs.getProperty("servicenow.201.hello.world"));

// print the current user
gs.print(gs.getUser());
// print the display name of the current user
gs.print(gs.getUser().getDisplayName());
// print the first name of the current user
gs.print(gs.getUser().getFirstName());
// print the location of the current user
gs.print(gs.getUser().getLocation());
// print the user roles of current user
gs.print(gs.getUser().getUserRoles());
// print the user id of current user
gs.print(gs.getUserId());

// query incident table to find all incidents where user is myself
var incidentGR = new GlideRecord("incident");
incidentGR.addQuery("caller", gs.getUserId());
incidentGR.query();
while (incidentGR.next()) {
  gs.print("Incident: " + incidentGR.number);
}

// print the encoded query of incidents where user is myself
var incidentGR = new GlideRecord("incident");
incidentGR.addQuery("caller", gs.getUserId());
incidentGR.query();
gs.print(incidentGR.getEncodedQuery());

// print a message if user has itil or admin role
if (gs.hasRole("itil") || gs.hasRole("admin")) {
  gs.print("The current user has role itil or admin");
}

// print the current sessionId
gs.print(gs.getSession());

// print boolean true/false if user is logged in
gs.print(gs.getSession().isLoggedIn());

// query incident table and if an incident doesn't have a short description print "this incident has no short description" with the incident #
var incidentGR = new GlideRecord("incident");
incidentGR.query();
while (incidentGR.next()) {
  if (gs.nil(incidentGR.short_description)) {
    gs.print("This incident has no short description" + incidentGR.number);
  }
}

// test if a certain table exists and have it print true
gs.print(gs.tableExists("incident"));
// test if a certain table exists and have it print false
gs.print(gs.tableExists("cool_table"));

// take the xml string <root><test>Some XML</test><test1>Some more XML</test1></root> and convert it to JSON, then print test (SomeXML)
var xmlString =
  "<root><test>Some XML</test><test1>Some more XML</test1></root>";
var json = gs.xmlToJSON(xmlString);
gs.print(json.root.test);


// script action: trigger event servicenow.201... and ensure that the message has been logged to the system
gs.eventQueue("servicenow.201.hello.world")

// notification:

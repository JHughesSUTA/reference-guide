/* 
GlideAjax class enables a client script to call server-side code in a script include
it is a client side API but used to call server side script includes
uses browsers XMLHttpRequest API

generally involves two scripting areas, glide ajax being called on a client side script, and using server side code held within a script include
*/

/*
Example:

1. client makes request for a page (task form) that contains a client script with GlideAjax code

2 Server sends client task form data along with client script

3 after an onLoad event occurs, the client side script is executed which calls the GlideAjax API

4 GlideAjax accesses browsers XMLHttpRequest API and generates a request

5 Browsers XMLHttpRequest API sends geolocation data back to servicenow in the background

6 request from the client invokes script include, where request data is used to call specific methods with arguments. Then data is packaged up in the form of a response.

7 Browser receives response from server side

8 client script callback process returned data and updates location field on task.
*/

// Another simple example: Update the short description field of an incident to Hello World! on load

// Client-Side code:
function onLoad() {
  var ga = new GlideAjax("ServiceNow201GlideAjax");
  ga.addParam("sysparm_name", "sayHello");
  ga.getXML(ajaxProcessor);
}

function ajaxProcessor(response) {
  var answer = response.responseXML.documentElement.getAttribute("answer");
  g_form.setValue("short_description", answer);
}

// Server-side code (script include)
var ServiceNow201GlideAjax = class.create();
ServiceNow201GlideAjax.prototype = Object.extendsObject(AbstractAjaxProcessor, {
  sayHello: function() {
    return "Hello world!";
  },
  type: "ServiceNow201GlideAjax"
});

/*
Explanation of above scripts:
on the client side we create a new object which would hold the value returned to us from the GlideAjax API. when we call the glideAjax API we pass in the name of the script include we're looking to run

we add a parameter (sysparm_name) to the glideAjax request. takes two arguments: 1: name of the parameter. 2: name of the first function/method we want to call. in other words it says to execute the sayHello method held within the ServiceNow201GLideAjax script include

ga.getXML(ajaxProcessor) = ajaxProcessor is our callback function, we just pass in the name of the function, don't invoke with (). this is what triggers the ajax request

once it comes back from the server to the client side (in XML format), our ajaxProcessor callback is invoked.
line 9 we create a new 'answer' variable and assign it the value that's returned to us from response.responseXML.documentElement.getAttribute('answer'), which is stepping through the XML of the returned result and 'hello world' is held within an answer XML node

then we set value to the answer
*/



/* 
Three stages of GlideAjax

1. 
create a new GlideAjax Object
add name of script include method as sysparm_name parameter
call getXML() method and pass the name of the callback as an argument

2.
Extending AbstractAjaxProcessor

- abstractAjaxProcessor is an out of the box script include
- provides helper methods
- client callable checkbox automatically generates required JavaScript

The GlideAjax script include
- method passed in sysparm_name gets invoked
- server-side scripts are ran
- return statement ends servcer-side script execution
- response is packaged up as XML and sent to client

3. Returned Payload (in XML)
- XML is returend to teh client-side from server-side (even if JSON)
- use the following to retrieve answer:
-- response.responseXML.documentElement.getAttribute('answer')

*/

/*
note: getXMLAnswer() is a shortcut for getXML() and response.responseXML.documentElement.getAttribute('answer'), so the client side code is simplified if you use it:
*/
function onLoad() {
  var ga = new GlideAjax("ServiceNow201GlideAjax");
  ga.addParam("sysparm_name", "sayHello");
  ga.getXMLAnswer(ajaxProcessor);
}

function ajaxProcessor(answer) {
  // var answer = response.responseXML.documentElement.getAttribute("answer");
  g_form.setValue("short_description", answer);
}


// three main methods of GlideAjax API
addParam() // add parameters to the request
getXML() //
getXMLAnswer() // 
// GlideForm is Client Side

// ex: set short description to mandatory when priority changes:

function onChange(control, oldValue, newValue) {
  if (oldValue === newValue) return;
  g_form.setMandatory("short_description", true);
}

// Common GLideForm Methods
addErrorMessage();
addInfoMessage();
addOption();
clearOptions();
clearValue();
disableAttachments();
enableAttachments();
getLabelOf();
getOption();
hideRelatedLists();
isMandatory();
removeOption();
setDisabled();
setReadOnly();
setVisible();
setValue();
getValue();
getReference();
setValue();
getTableName();
save();

// DEMO

// show the g_form api in the console:
console.dir(g_form);

// control + shift + J activates the javascript executer where you can run client-side code

// alert the field value of 'category' field
var fieldValue = g_form.getValue("category");
alert(fieldValue);

// set category field to software
g_form.setValue("category", "software");

// clear the category field
g_form.clearValue("category");

// save the current record
g_form.save();

// set the category field to disabled
g_form.setDisabled("category", true);
// enable the category field
g_form.setDisabled("category", false);

// hide the related lists on a form
g_form.hideRelatedLists();

// set the category field to mandatory
g_form.setMandatory("category", true);
// alert a boolean if the category field is mandatory or not
alert(g_form.isMandatory("category"));

// alert "Is this a new record?" and a boolean indicating if it is or isn't
var isNewRecord = g_form.isNewRecord();
alert("Is this a new record? " + isNewRecord);

// add an info message 'hello'
g_form.addInfoMessage("Hello");
// add an error message 'help'
g_form.addErrorMessage("Help");
// clear these messages
g_form.clearMessages();

// alert the label of the caller_id field
g_form.getLabelOf("caller_id");

// alert 'Table: ' plus the table name
var tableName = g_form.getTableName();
alert("table: " + tableName);

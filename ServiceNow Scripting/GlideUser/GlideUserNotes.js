// check if current user has ITIL role

var hasITIL = g_user.hasRole("itil");
if (!hasITIL) {
  alert("You do not have sufficient privileges.");
}

// properties and methods
firstName;
lastName;
userID;
userName;
getClientData();
getFullName();
hasRole();
hasRoleExactly();
hasRoleFromList();
hasRoles();

// DEMO
// ctrl + shift + j to open javascript executor
// console.dir(g_user) in console to see all the properties

// alert 'hello firstName lastName. Your user id is: xxxxxxx' using glideUser in the js executor
alert(
  "Hello " +
    g_user.firstName +
    "" +
    g_user.lastName +
    ". Your user ID is: " +
    g_user.userID,
);
// do the same but using getFullName shortcut

alert("Do you have any roles? " + g_user.hasRoles());

alert("Do you have the ITIL role?" + g_user.hasRole("itil"));

alert("Your username is: " + g_user.userName);



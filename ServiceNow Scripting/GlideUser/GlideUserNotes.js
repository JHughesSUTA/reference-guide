// check if current user has ITIL role

var hasITIL = g_user.hasRole("itil");
if (!hasITIL) {
  alert("You do not have sufficient privileges.");
}

// properties and methods
firstName
lastName
userID
userName
getClientData()
getFullName()
hasRole()
hasRoleExactly()
hasRoleFromList()
hasRoles()
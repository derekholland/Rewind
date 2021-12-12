// get the string from the page
// Controller Function
function getValue() {
  // add invisible class to alert
  document.getElementById("alert").classList.add("invisible");
  let userString = document.getElementById("userString").value;
  let revString = reverseString(userString);
  displayString(revString);
}
//Reverse the string
// logic Function
function reverseString(userString) {
  let revString = [];
  // reverse a string
  for (let i = userString.length - 1; i >= 0; i--) {
    revString += userString[i];
  }
  return revString;
}

// display the reversed string to the user
// View Function
function displayString(revString) {
  // write message to the page
  document.getElementById(
    "msg"
  ).innerHTML = `Your string reversed is : ${revString}`;
  // show the alert box
  document.getElementById("alert").classList.remove("invisible");
}

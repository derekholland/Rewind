//get the values from the Page
// starts or aka controller function
function getValues() {
  // get values from the page
  let startValue = document.getElementById("startValue").value;
  let endValue = document.getElementById("endValue").value;
  let numbers = [];
  // validate input
  // convert input string to an integer
  startValue = parseInt(startValue);
  endValue = parseInt(endValue);
  // check if both variables are integers
  if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
    numbers = generateNumbers(startValue, endValue);
    // call displayNumbers
    displayNumbers(numbers);
  } else {
    alert("You must enter integers");
  }
}

//generate numbers from the start value
// logic function(s)
function generateNumbers(startValue, endValue) {
  let numbers = [];

  // get all numbers from start to end
  for (let i = startValue; i <= endValue; i++) {
    numbers.push(i);
  }
  return numbers;
}

// display the numbers and mark even numbers in bold
// display or view functions
function displayNumbers(numbers) {
  let templateRows = "";

  for (let i = 0; i < numbers.length; i++) {
    let className = "even";
    let number = numbers[i];
    if (number % 2 === 0) {
      className = "even";
    } else {
      className = "odd";
    }
    templateRows += `<tr><td class="${className}"">${number}</td></tr>`;
  }

  document.getElementById("results").innerHTML = templateRows;
}

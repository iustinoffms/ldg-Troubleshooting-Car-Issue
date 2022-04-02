let firstQuestion = "Is the car silet when you turn the key?";

const questions = {
  YesBranchFirstQuestion: "Are the battery terminals corroded?",
  NoBranchFirstQuestion: "Does the car make a clicking noise?",
  NoBranchSecondQuestion: "Does the car crank up but fail to start?",
  NoBranchThirdQuestion: "Does the engine start and then die?",
  NoBranchForthQuestion: "Does your car have fuel injection?",
};

const solutions = [
  "Clean the terminals and try starting again.",
  "Replace cables and try again.",
  "Replace the battery.",
  "Check spart plug connections.",
  "Get it in for service.",
  "Check to ensure the choke is opening and closing",
];

const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const display = document.getElementById("display");

let newArr = [];

yesButton.addEventListener("click", function () {
  newArr.push("y");
  check(newArr);
  display.innerHTML = check(newArr);
  if (solutions.includes(check(newArr)) || check(newArr) === "Start over") {
    yesButton.disabled = true;
    noButton.disabled = true;
  }
});

noButton.addEventListener("click", function () {
  newArr.push("n");
  check(newArr);
  display.innerHTML = check(newArr);
  if (solutions.includes(check(newArr)) || check(newArr) === "Start over") {
    yesButton.disabled = true;
    noButton.disabled = true;
  }
});

function check(arr) {
  let response;
  if (arr.join("") === "y") {
    response = questions.YesBranchFirstQuestion;
  }
  if (arr.join("") === "n") {
    response = questions.NoBranchFirstQuestion;
  }
  if (arr.join("") === "yy") {
    response = solutions[0];
  }
  if (arr.join("") === "yn") {
    response = solutions[1];
  }
  if (arr.join("") === "nn") {
    response = questions.NoBranchSecondQuestion;
  }
  if (arr.join("") === "ny") {
    response = solutions[2];
  }
  if (arr.join("") === "nnn") {
    response = questions.NoBranchThirdQuestion;
  }
  if (arr.join("") === "nny") {
    response = solutions[3];
  }
  if (arr.join("") === "nnnn") {
    response = "Start over";
  }
  if (arr.join("") === "nnny") {
    response = questions.NoBranchForthQuestion;
  }
  if (arr.join("") === "nnnyy") {
    response = solutions[4];
  }
  if (arr.join("") === "nnnyn") {
    response = solutions[5];
  }

  return response;
}

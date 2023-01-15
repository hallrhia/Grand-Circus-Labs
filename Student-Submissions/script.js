let submissions = [
  { name: "Jane", score: 95, date: "2020-01-24", passed: true },
  { name: "Joe", score: 77, date: "2018-05-14", passed: true },
  { name: "Jack", score: 59, date: "2019-07-05", passed: false },
  { name: "Jill", score: 88, date: "2020-04-22", passed: true },
];

function addSubmission(array, newName, newScore, newDate) {
  let newSubmission = {
    name: newName,
    score: newScore,
    date: newDate,
  };

  newSubmission.score >= 60 ? (newSubmission.passed = true) : (newSubmission.passed = false);
  array.push(newSubmission);
  console.log(array);
}

addSubmission(submissions, "Jennifer", 82, "2021-08-22");

function deleteSubmissionsByIndex(array, index) {
  array.splice(index, 1);
  console.log(array);
}

deleteSubmissionsByIndex(submissions, 4);

function deleteSubmissionByName(array, name) {
  let item = array.findIndex((object) => {
    return object.name === name;
  });

  array.splice(item, 1);
}

deleteSubmissionByName(submissions, "Joe");

function editSubmission(array, index, score) {
  let item = array[index];
  item.score = score;
  item.score >= 60 ? (item.passed = true) : (item.passed = false);
  array.splice(index, 1, item);
}

editSubmission(submissions, 1, 65);
console.log(submissions);

function findSubmissionsByName(array, name) {
  let object = array.find((array) => array.name === name);
  return object;
}

console.log(findSubmissionsByName(submissions, "Joe"));

function findLowestScore(array) {
  let newArray = [];

  array.forEach((submission) => {
    newArray.push(submission.score);
  });
  return Math.min(...newArray);
}

console.log(findLowestScore(submissions));

function findAverageScore(array) {
  let sum = 0;
  for (let submission of array) {
    sum += submission.score;
  }
  average = sum / array.length;
  console.log(average);
}

findAverageScore(submissions);

function filterPassing(array) {
  let newArray = array.filter((submission) => submission.passed === true);
  return newArray;
}

console.log(filterPassing(submissions));

function filter90AndAbove(array) {
  let newArray = array.filter((submission) => submission.score >= 90);
  return newArray;
}

console.log(filter90AndAbove(submissions));

function createRange(start, end){
  let newArray = [];
  for(let i = start; i <= end; i++){
    newArray.push(i);
  }
  return newArray;
}
console.log(createRange(2, 5));
console.log(createRange(0, 6));
console.log(createRange(4, 2));

function countElementsForOfLoop(array) {
  let count = {};

  for (let element of array) {
    if (count[element]) {
      count[element] += 1;
    } else {
      count[element] = 1;
    }
  }
    return count;
}
console.log(countElementsForOfLoop(["a", "b", "a", "c", "a", "b"]));
console.log(countElementsForOfLoop(["a", "a", "a", "d", "d"]));

function countElementsReduce(array) {
  let count = array.reduce((accumulator, value) => {
    accumulator[value] = ++accumulator[value] ||  1;
    return accumulator;
  }, {});
  return count;
}

console.log(countElementsReduce(["a", "b", "a", "c", "a", "b"]));
console.log(countElementsReduce(["a", "a", "a", "d", "d"]));

function countElementsForEach(array){
  let count = {};

  array.forEach(element => {
    if(count[element]) {
      count[element] += 1;
    }
    else {
      count[element] = 1;
    }
  });

  return count;
}
console.log(countElementsForEach(["a", "b", "a", "c", "a", "b"]));
console.log(countElementsForEach(["a", "a", "a", "d", "d"]));
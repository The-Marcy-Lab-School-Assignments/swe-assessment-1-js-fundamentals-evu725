/*
  Write your functions here!

  Each function should:
  - Be exported so tests can use it
  - Follow the exact specifications
  - Pass all test cases
  - Use descriptive variable names
  - Have no linting errors
*/

// ============================================
// Question 1: petJudger
// ============================================

const petJudger = (petBreed, petName) => {
  if (!petBreed || !petName) {
    console.log('Missing information. Please provide a valid pet.');
  } else if (petBreed === 'dog') {
    console.log(`I love dogs! ${petName} is so cute!`);
  } else if (petBreed === 'cat') {
    console.log(`I love cats! ${petName} is so cute!`);
  } else if (petBreed === 'turtle') {
    console.log(`Who doesn't love a good turtle? ${petName} is the tops.`);
  } else if (petBreed === 'snake') {
    console.log(`Not a fan, please take ${petName} and leave.`);
  } else {
    console.log('What an...interesting pet.');
  }
};

// ============================================
// Question 2: loopFromOneUpToAnother
// ============================================

const loopFromOneUpToAnother = (firstNum, secondNum) => {
  if (firstNum === secondNum || firstNum > secondNum) {
    return;
  }

  for (let i = firstNum; i < secondNum; i++) {
    console.log(i);
  }
};

// ============================================
// Question 3: shoutEveryLetterForLoop
// ============================================

const shoutEveryLetterForLoop = (str) => {
  for (let i = 0; i < str.length; i++) {
    console.log(`${str[i].toUpperCase()}!`);
  }
};

// ============================================
// Question 4: letterCaseCounts
// ============================================

const letterCaseCounts = (str) => {
  const count = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  };

  for (let i = 0; i < str.length; i++) {
    const letter = str[i]
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    if (letter === ' ' || letter === '+' || numbers.includes(letter)) {
      count.neither += 1;
    } else if (letter === letter.toUpperCase()) {
      count.uppercase += 1;
    } else {
      count.lowercase += 1;
    }
  }

  return count;
};

// ============================================
// Question 5: getNamesOfGreedyGnomes
// ============================================

const getNamesOfGreedyGnomes = (gnomes) => {
  if (gnomes.length === 0) {
    return [];
  }

  const gnomesNames = [];
  for (let i = 0; i < gnomes.length; i++) {
    if (gnomes[i].stolenDecorations.length > 1) {
      gnomesNames.push(gnomes[i].name);
    }
  }
  return gnomesNames;
};

// ============================================
// Exports
// ============================================

module.exports = {
  petJudger,
  loopFromOneUpToAnother,
  shoutEveryLetterForLoop,
  letterCaseCounts,
  getNamesOfGreedyGnomes,
};

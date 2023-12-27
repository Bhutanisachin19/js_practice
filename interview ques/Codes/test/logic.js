//return the word with max number of vowels

function vowelCounter(sentence) {
  const vowels = ["a", "e", "i", "o", "u"];

  let newSentence = sentence.split(" ");
  let count = 0;
  let word = "";

  for (let i = 0; i < newSentence.length; i++) {
    // console.log(newSentence[i]);
    let count2 = 0;

    for (let j = 0; j < newSentence[i].length; j++) {
      if (vowels.includes(newSentence[i][j].toLowerCase())) {
        count2++;
      }
    }

    if (count2 > count) {
      count = count2;
      word = newSentence[i];
    }
  }

  console.log(
    "Word with most vowels is ",
    word,
    "and number of vowels were",
    count
  );
}

vowelCounter("Enter The String Which You Want To Check ");

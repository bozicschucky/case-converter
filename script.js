const upperCaseBtn = document.getElementById("upper-case");
const lowerCaseBtn = document.getElementById("lower-case");
const textArea = document.getElementById("input-text");
const properCaseBtn = document.getElementById("proper-case");
const sentenceCaseBtn = document.getElementById("sentence-case");

upperCaseBtn.addEventListener("click", () => {
  textArea.value = textArea.value.toUpperCase();
});

lowerCaseBtn.addEventListener("click", () => {
  textArea.value = textArea.value.toLowerCase();
});

properCaseBtn.addEventListener("click", () => {
  textArea.value = textArea.value.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
});

sentenceCaseBtn.addEventListener("click", () => {
  //make the first letter of each sentence capitalized

  const text = textArea.value.trim();
  const sentences = text.split(/[.!?]/);
  const newSentences = sentences.map((sentence) => {
    const firstLetter = sentence.charAt(0).toUpperCase();
    const restOfSentence = sentence.slice(1);
    if (firstLetter == ' " ') {
      return (
        firstLetter +
        restOfSentence.charAt(0).toUpperCase() +
        restOfSentence.slice(1)
      );
    }
    return firstLetter + restOfSentence;
  });
  textArea.value = newSentences.join(".");
});

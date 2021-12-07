const upperCaseBtn = document.getElementById("upper-case");
const lowerCaseBtn = document.getElementById("lower-case");
const textArea = document.getElementById("input-text");
const properCaseBtn = document.getElementById("proper-case");
const sentenceCaseBtn = document.getElementById("sentence-case");
const saveTextBtn = document.getElementById("save-text-file");

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
  const text = textArea.value.split(".");
  const emptyArray = [];
  text.forEach((sentence) => {
    //regex to match the first letter [a-z A-Z]
    const lowerCaseSentence = sentence.toLowerCase();
    const s = lowerCaseSentence.replace(/[a-zA-Z]/, (letter) =>
      letter.toUpperCase()
    );
    emptyArray.push(s);
  });

  textArea.value = emptyArray.join(".");
});

saveTextBtn.addEventListener("click", () => {
  const text = textArea.value;
  const blob = new Blob([text], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = "text.txt";
  link.href = url;
  link.click();
});

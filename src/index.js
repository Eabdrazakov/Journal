function reset() {
    const form = document.querySelector("form");
    form.reset();
}


function Counter(e) {
    e.preventDefault();
    const titleInput = document.getElementById("title").value;
    const descriptionInput = document.getElementById("description").value;
    const newEntry = new Journal(titleInput, descriptionInput);
    const wordsOutput = document.querySelector("#wordsOutput");
    const vowelsOutput = document.querySelector("#vowelsOutput");
    wordsOutput.innerText = `Number of words: ${newEntry.numberOfWords()}`;
    vowelsOutput.innerText = `Number of vowels: ${newEntry.numberOfVowels()}`;
    reset();
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", Counter);
})
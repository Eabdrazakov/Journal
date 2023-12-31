import Journal from "./../src/journal.js";

describe('Journal', () => {

    test('should correctly create an Entry object with title and description', () => {
        const entryName = new Journal("Ermek", "coding");
        expect(entryName.title).toMatch("Ermek");
        expect(entryName.description).toMatch("coding");
    });

    test('should return 0 for a string that is only spaces', () => {
        const newEntry = new Journal(" ", " ");
        expect(newEntry.numberOfWords()).toEqual(0);
    });

    test('should return the correct number of words for a string with words', () => {
        const wordEntry = new Journal(" ", "This is a test description");
        expect(wordEntry.numberOfWords()).toEqual(5);
    });

    test('should not count numbers as words', () => {
        const wordEntry = new Journal("", "This is a 75 test description");
        expect(wordEntry.numberOfWords()).toEqual(5);
    });

    test('should return 0 for an empty string', () => {
        const emptyEntry = new Journal("", "");
        expect(emptyEntry.numberOfVowels()).toEqual(0);
    });

    test('should return 0 for a string with no vowels', () => {
        const noVowelsEntry = new Journal("", "Th m hwy mpkl");
        expect(noVowelsEntry.numberOfVowels()).toEqual(0);
    });

    test('should return the correct number of vowels for a string with vowels', () => {
        const vowelsEntry = new Journal("", 'This is a test description with vowels');
        expect(vowelsEntry.numberOfVowels()).toEqual(11);
    });

    test('should return empty string if there is no sentence', () => {
        const sentence = new Journal("", "");
        expect(sentence.getTeaser()).toEqual("");
    });

    test('should return sentence', () => {
        const sentence = new Journal("", "My name is Ermek");
        expect(sentence.getTeaser()).toEqual("My name is Ermek");
    });

    test('should return first sentence only', () => {
        const sentence = new Journal("", "My name is Ermek. I am from Kyrgyzstan");
        expect(sentence.getTeaser()).toEqual("My name is Ermek")
    })
});
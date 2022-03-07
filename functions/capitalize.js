export default function capitalize(input) {
    let firstLetter = input.charAt(0).toUpperCase();
    let newWord = firstLetter + input.substring(1);
    return newWord;
}

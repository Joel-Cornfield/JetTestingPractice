function capitalize(string = "") {
    if (string == "") return "";
    return `${string[0].toUpperCase()}${string.slice(1)}`;
}

function reverseString(string = "") {
    return string.split("").reverse().join("");
}

const calculator = {
    add: (num1, num2) => num1 + num2,
    subtract: (num1, num2) => num1 - num2,
    multiply: (num1, num2) => num1 * num2,
    divide: (num1, num2) => num1 / num2,
};

function caesarCipher(str, shift) {
    return str.replace(/[a-zA-Z]/g, (char) => {
        const start = char === char.toUpperCase() ? 65 : 97;
        return String.fromCharCode(
            ((char.charCodeAt(0) - start + shift) % 26) + start
        );
    });
}

function analyzeArray(arr) {
    const average = arr.reduce((sum, num) => sum + num, 0) / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const length = arr.length;
    return { average, min, max, length };
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
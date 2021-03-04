// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
	// you can add any code you want within this function scope

	function substitution(input, alphabet, encode = true) {
		// your solution code here
		if (!alphabet || alphabet.length !== 26) return false;

		input = input.toLowerCase();
		let result = "";
		const alphabetString = "abcdefghijklmnopqrstuvwxyz";
		const alphabetArray = alphabet.split("");
		let duplicateFound = alphabetArray.some(
			(currentValue, currentIndex) =>
				alphabetArray.indexOf(currentValue) !== currentIndex
		);
		if (duplicateFound) return false; //Returns false if anything is repeated in the alphabet

		for (let i = 0; i < input.length; i++) {
			if (input[i] === " ") result += " ";
			if (encode) {
				index = alphabetString.indexOf(input.charAt(i));
				result += alphabet.charAt(index);
			} else {
				index = alphabet.indexOf(input.charAt(i));
				result += alphabetString.charAt(index);
			}
		}
		return result;
	}

	return {
		substitution,
	};
})();

module.exports = substitutionModule.substitution;

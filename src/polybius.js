// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
	// you can add any code you want within this function scope
	function polybius(input, encode = true) {
		const alphabet = {
			a: "11",
			b: "21",
			c: "31",
			d: "41",
			e: "51",
			f: "12",
			g: "22",
			h: "32",
			"(i/j)": "42",
			k: "52",
			l: "13",
			m: "23",
			n: "33",
			o: "43",
			p: "53",
			q: "14",
			r: "24",
			s: "34",
			t: "44",
			u: "54",
			v: "15",
			w: "25",
			x: "35",
			y: "45",
			z: "55",
		};

		let secretCode = "";
		if (encode === true) {
			for (let i = 0; i < input.length; i++) {
				let currentLetter = input[i];
				if (currentLetter === " ") {
					secretCode += " ";
				}
				if (currentLetter === "i" || currentLetter === "j") {
					secretCode += alphabet["(i/j)"];
				}
				for (let key in alphabet) {
					if (currentLetter === key) {
						secretCode += alphabet[key];
					}
				}
			}
		} else if (encode === false) {
			//Returns false if the starting string is odd (only for decoding)
			if (input.replace(" ", "").length % 2 !== 0) return false;
			let newInput = input.split("");
			for (let i = 0; i < newInput.length; i += 2) {
				let currentLetter = newInput[i];
				if (currentLetter === " ") {
					secretCode += " ";
					i--; //Adjusts the loop to account for spaces
				} else {
					let number = newInput[i] + newInput[i + 1];
					for (let value in alphabet) {
						if (number === alphabet[value]) {
							secretCode += value;
						}
					}
				}
			}
		}
		return secretCode;
	}
	return {
		polybius,
	};
})();

module.exports = polybiusModule.polybius;

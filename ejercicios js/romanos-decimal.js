
// Program to convert Roman
// Numerals to Numbers

	let roman = new Map() ;
			roman.set('I', 1);
			roman.set('V', 5);
			roman.set('X', 10);
			roman.set('L', 50);
			roman.set('C', 100);
			roman.set('D', 500);
			roman.set('M', 1000);
	
	// This function returns value
	// of a Roman symbol
	function romanToInt(s) {
		let sum = 0;
		let n = s.length;
        console.log(n)

		for (i = 0; i < n; i++) {
            console.log(roman.get(s.charAt(i)))
            console.log(roman.get(s.charAt(i + 1)))
            console.log(s.charAt(i))
            console.log(s.charAt(i + 1))
			// If present value is less than next value,
			// subtract present from next value and add the
			// resultant to the sum variable.
                0  != 2 - 1 &&                50     <         10
                1  != 2 - 1 &&                10     <         0

			if (i != n - 1 && roman.get(s.charAt(i)) < roman.get(s.charAt(i + 1))) {
				sum += roman.get(s.charAt(i + 1)) - roman.get(s.charAt(i));
				i++;
			} else {
				sum += roman.get(s.charAt(i)); //50 + 10
			}
		}
		return sum;
	}

	// Driver Code
	
		// Considering inputs given are valid
		let input = "CM";

		console.log("Integer form of Roman Numeral is " + romanToInt(input));

// This code is contributed by Rajput-Ji


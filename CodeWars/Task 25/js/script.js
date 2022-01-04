function getPINs(observed) {
	var combos = [];
	var neighbors = {
		"0": ["8"],
		"1": ["2", "4"],
		"2": ["1", "3", "5"],
		"3": ["2", "6"],
		"4": ["1", "5", "7"],
		"5": ["2", "4", "6", "8"],
		"6": ["3", "5", "9"],
		"7": ["4", "8"],
		"8": ["5", "7", "9", "0"],
		"9": ["6", "8"]
	};
	var strDigits = observed.toString().split("");
	getCombos(strDigits, 0, "");
	return combos;
	function getCombos(digits, idx, curCombo) {
		var curDigit = digits[idx];
		var candidates = new Set(neighbors[curDigit]);
		candidates.add(curDigit);
		candidates.forEach(idx == digits.length - 1 ? reachedEnd : goDeeper)
		function reachedEnd(candidate) { combos.push(curCombo + candidate); }
		function goDeeper(candidate) {
			getCombos(digits, idx + 1, curCombo + candidate)
		}
	}
}
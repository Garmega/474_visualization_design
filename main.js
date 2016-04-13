var bacteriaData = require('./bacteriaData.json');

/**
Grabs the average for the MIC value for each antibody of the
given bacterium

@param bacteria: A single bacterium JSON object

@return A double(?) representing the average of all MIC for the given bacterium
*/
function calculateAverageMIC(bacterium) {
	var sum = 0;
	var antibodies = bacterium.antibodies;
	for (var i = 0; i < antibodies.length; i++) {
		sum += antibodies[i].mic;
	}

	return sum / antibodies.length;
}

/**
Grabs the average MIC value for a specific antibody across all 
given bacterium

@param bacterium: An array of bacterium
@param antibodyName: Name for the antibody in question.

@return: A double(?) representing the average of all values for given antibody
*/
function calculateAverageForAntibody(bacteria, antibodyName) {
	var sum = 0;
	for (var i = 0; i < bacteria.length; i++) {
		var antibodies = bacteria[i].antibodies;
		for (var j = 0; j < antibodies.length; j++) {
			if (antibodies[j].name == antibodyName {
				sum += antibodies[j].mic;
			}
		}
	}

	return sum / bacteria.length;
}

/**
Grabs all bacteria that matches the gram stain result

@param result: The desired result to match

@return: An array of bacterium that matches the result.
*/
function getAllWithGramResult(result) {
	var list = [];
	for (var i = 0; i < bacteria.length; i++) {
		if (bacteria[i].gramStainResult == result) {
			list.add(bacteria[i]);
		}
	}

	return list;
}
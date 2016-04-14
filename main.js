var bacteriaData = require('./bacteriaData');
var plotly = require('./plotly-latest.min.js');
var $ = require('jQuery');

var bacteria = [];

class Bacterium {
    constructor(name, antibodies, gramStain) {
        this.name = name;
        this.antibodies = antibodies;
        this.gramStain = gramStain;
    }

    get averageMICValues() {
        return this.calcAverageMICValues();
    }

    /**
    Grabs the average for the MIC value for each antibody of the bacterium
    @param bacteria: A single bacterium object
    @return A double(?) representing the average of all MIC for the given bacterium
    */
    calcAverageMICValues() {
        var sum = 0;
        var keys = Object.keys(this.antibodies);
        //console.log(keys);
        for (var i = 0; i < keys.length; i++) {
            //console.log(antibodies[keys[i]]);
            sum += this.antibodies[keys[i]];
        }

        return (sum / keys.length);
    }
}

$( document ).ready(function() {
    main();
});

function main() {
    var bacteriaList = bacteriaData.bacteria;
    for (var i = 0; i < bacteriaList.length; i++) {
        var bacterium = bacteriaList[i];
        var antibodyData = bacterium.antibodies;
        var keys = Object.keys(antibodyData);

        var antibodies = {};
        for (var j = 0; j < keys.length; j++) {
            antibodies[keys[j]] = antibodyData[keys[j]];
        }

        bacteria.push(new Bacterium(bacterium.name, antibodies, bacterium.gramStainResult));
    };

    //console.log(bacteria);
    //console.log(calculateAverageMIC(bacteria[0]));
    visualization1();
};

function visualization1() {
    var xValues = [];
    var yValues = [];

    for (var i = 0; i < bacteria.length; i++) {
        var bacterium = bacteria[i];
        console.log(bacterium);
        xValues.push(bacterium.averageMICValues);
        yValues.push(bacterium.name);
    };

    var data = [{
        x: xValues,
        y: yValues,
        type: 'bar',
        orientation: 'h'
    }];

    var layout = {
        title: 'MIC mean of antibodies',
        margin: {
            l: 250
        },
        xaxis: {
            title: 'MIC'
        },
        yaxis: {
            title: 'Bacterium'
        }
    }

    plotly.newPlot("graph", data, layout);
}

function visualization2() {
    var name = [];
    var penicilinMIC = [];
    var streptomycinMIC = [];
    var neomycinMIC = [];
    var gramStaining = [];

    var bacteria = bacteriaData.bacteria;
    for (var i = 0; i < bacteria.length; i++) {
        var bacterium = bacteria[i];
        name.push(bacterium.name);
        penicilinMIC.push(bacterium.antibodies[0].mic);
        streptomycinMIC.push(bacterium.antibodies[1].mic);
        neomycinMIC.push(bacterium.antibodies[2].mic);
        gramStaining.push(bacterium.gramStainResult);
    }


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
			if (antibodies[j].name == antibodyName) {
				sum += antibodies[j];
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
			list.push(bacteria[i]);
		}
	}

	return list;
}

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
	"bacteria": [
		{
			"name" : "Aerobacter aerogenes",
			"antibodies" : [
				{
					"name" : "Penicilin",
					"mic" : 870
				},
				{
					"name" : "Streptomycin",
					"mic" : 1
				},
				{
					"name" : "Neomycin",
					"mic" : 1.6
				}
			],
			"gramStainResult" : "negative" 
		},
		{
			"name" : "Brucella abortus",
			"antibodies" : [
				{
					"name" : "Penicilin",
					"mic" : 1
				},
				{
					"name" : "Streptomycin",
					"mic" : 2
				},
				{
					"name" : "Neomycin",
					"mic" : 0.02
				}
			],
			"gramStainResult" : "negative" 
		},
		{
			"name" : "Brucella anthracis",
			"antibodies" : [
				{
					"name" : "Penicilin",
					"mic" : 0.001
				},
				{
					"name" : "Streptomycin",
					"mic" : 0.01
				},
				{
					"name" : "Neomycin",
					"mic" : 0.007
				}
			],
			"gramStainResult" : "positive" 
		},
		{
			"name" : "Diplococcus pneumoniae",
			"antibodies" : [
				{
					"name" : "Penicilin",
					"mic" : 0.005
				},
				{
					"name" : "Streptomycin",
					"mic" : 11
				},
				{
					"name" : "Neomycin",
					"mic" : 10
				}
			],
			"gramStainResult" : "positive" 
		},
		{
			"name" : "Escherichia coli",
			"antibodies" : [
				{
					"name" : "Penicilin",
					"mic" : 100
				},
				{
					"name" : "Streptomycin",
					"mic" : 0.4
				},
				{
					"name" : "Neomycin",
					"mic" : 0.1
				}
			],
			"gramStainResult" : "negative" 
		},
		{
			"name" : "Klebsiella pneumoniae",
			"antibodies" : [
				{
					"name" : "Penicilin",
					"mic" : 850
				},
				{
					"name" : "Streptomycin",
					"mic" : 1.2
				},
				{
					"name" : "Neomycin",
					"mic" : 1
				}
			],
			"gramStainResult" : "negative" 
		},
		{
			"name" : "Mycobacterium tuberculosis",
			"antibodies" : [
				{
					"name" : "Penicilin",
					"mic" : 800
				},
				{
					"name" : "Streptomycin",
					"mic" : 5
				},
				{
					"name" : "Neomycin",
					"mic" : 2
				}
			],
			"gramStainResult" : "negative" 
		},
		{
			"name" : "Proteus vulgaris",
			"antibodies" : [
				{
					"name" : "Penicilin",
					"mic" : 3
				},
				{
					"name" : "Streptomycin",
					"mic" : 0.1
				},
				{
					"name" : "Neomycin",
					"mic" : 0.1
				}
			],
			"gramStainResult" : "negative" 
		},
		{
			"name" : "Pseudomonas aeruginosa",
			"antibodies" : [
				{
					"name" : "Penicilin",
					"mic" : 850
				},
				{
					"name" : "Streptomycin",
					"mic" : 2
				},
				{
					"name" : "Neomycin",
					"mic" : 0.4
				}
			],
			"gramStainResult" : "negative" 
		},
		{
			"name" : "Salmonella (Eberthella) typhosa",
			"antibodies" : [
				{
					"name" : "Penicilin",
					"mic" : 1
				},
				{
					"name" : "Streptomycin",
					"mic" : 0.4
				},
				{
					"name" : "Neomycin",
					"mic" : 0.008
				}
			],
			"gramStainResult" : "negative" 
		},
		{
			"name" : "Salmonella schottmuelleri",
			"antibodies" : [
				{
					"name" : "Penicilin",
					"mic" : 10
				},
				{
					"name" : "Streptomycin",
					"mic" : 0.8
				},
				{
					"name" : "Neomycin",
					"mic" : 0.09
				}
			],
			"gramStainResult" : "negative" 
		},
		{
			"name" : "Staphylococcus albus",
			"antibodies" : [
				{
					"name" : "Penicilin",
					"mic" : 0.007
				},
				{
					"name" : "Streptomycin",
					"mic" : 0.1
				},
				{
					"name" : "Neomycin",
					"mic" : 0.001
				}
			],
			"gramStainResult" : "positive" 
		},
		{
			"name" : "Staphylococcus aureus",
			"antibodies" : [
				{
					"name" : "Penicilin",
					"mic" : 0.03
				},
				{
					"name" : "Streptomycin",
					"mic" : 0.03
				},
				{
					"name" : "Neomycin",
					"mic" : 0.001
				}
			],
			"gramStainResult" : "positive" 
		},
		{
			"name" : "Streptococcus fecalis",
			"antibodies" : [
				{
					"name" : "Penicilin",
					"mic" : 1
				},
				{
					"name" : "Streptomycin",
					"mic" : 1
				},
				{
					"name" : "Neomycin",
					"mic" : 0.1
				}
			],
			"gramStainResult" : "positive" 
		},
		{
			"name" : "Streptococcus hemolyticus",
			"antibodies" : [
				{
					"name" : "Penicilin",
					"mic" : 0.001
				},
				{
					"name" : "Streptomycin",
					"mic" : 14
				},
				{
					"name" : "Neomycin",
					"mic" : 10
				}
			],
			"gramStainResult" : "positive" 
		},
		{
			"name" : "Streptococcus viridans",
			"antibodies" : [
				{
					"name" : "Penicilin",
					"mic" : 0.005
				},
				{
					"name" : "Streptomycin",
					"mic" : 10
				},
				{
					"name" : "Neomycin",
					"mic" : 40
				}
			],
			"gramStainResult" : "positive" 
		},
	]
}
},{}],2:[function(require,module,exports){
var bacteriaData = require('./bacteriaData');


(function() {

	console.log(bacteriaData);

	console.log(calculateAverageMIC(bacteriaData.bacteria[0]));

	var xValues = [];
	var yValues = [];

	var bacteria = bacteriaData.bacteria;
	for (var i = 0; i < bacteria.length; i++) {
		var bacterium = bacteria[i];
		xValues.push(calculateAverageMIC(bacterium));
		yValues.push(bacterium.name);
	};

	console.log(xValues);
	console.log(yValues);

	var data = [
		{
			x: xValues,
			y: yValues,
			type: 'bar'
		}
	];

	Plotly.newPlot('graph', data);
})();

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

	return (sum / antibodies.length);
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
			list.push(bacteria[i]);
		}
	}

	return list;
}
},{"./bacteriaData":1}]},{},[2]);

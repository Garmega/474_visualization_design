var bacteriaData = require('./bacteriaData');
var plotly = require('./plotly-latest.min.js');
var $ = require('jQuery');
var bacteria = [];


$( document ).ready(function() {
    bacteria = importData();
    if (bacteria.length > 0) {
        visualization1();
        visualization2();
        visualization3();
    }
});

function importData() {
    var bacteriaList = bacteriaData.bacteria;
    var result = [];
    for (var i = 0; i < bacteriaList.length; i++) {
        var bacterium = bacteriaList[i];
        var antibodyData = bacterium.antibodies;
        var keys = Object.keys(antibodyData);

        var antibodies = {};
        for (var j = 0; j < keys.length; j++) {
            antibodies[keys[j]] = antibodyData[keys[j]];
        }

        result.push(new Bacterium(bacterium.name, antibodies, bacterium.gramStainResult));
    };

    return result;
}

function visualization1() {
    var xValues = [];
    var yValues = [];

    for (var i = 0; i < bacteria.length; i++) {
        var bacterium = bacteria[i];
        //console.log(bacterium);
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

    plotly.newPlot("visualization1", data, layout);
}

function visualization2() {
    sortAndPlot("visualization2a", "penicilin");
    sortAndPlot("visualization2b", "streptomycin");
    sortAndPlot("visualization2c", "neomycin");
}

function visualization3() {
    var dataCopy = bacteria;
    var xValuesPos = [];
    var yValuesPos = [];
    var zValuesPos = [];

    var xValuesNeg = [];
    var yValuesNeg = [];
    var zValuesNeg = [];

    for (var i = 0; i < bacteria.length; i++) {
        var bacterium = bacteria[i];
        if (bacterium.gramStain == 'positive') {
            xValuesPos.push(bacterium.antibodies.penicilin);
            yValuesPos.push(bacterium.antibodies.streptomycin);
            zValuesPos.push(bacterium.antibodies.neomycin);
        } else {
            xValuesNeg.push(bacterium.antibodies.penicilin);
            yValuesNeg.push(bacterium.antibodies.streptomycin);
            zValuesNeg.push(bacterium.antibodies.neomycin);
        }
    }

    var trace1 = {
        name: 'Positive',
        x: xValuesPos,
        y: yValuesPos,
        z: zValuesPos,
        mode: 'markers',
        marker: {
            color: '47A51D',
            size: 12,
            opacity: 0.5
        },
        type: 'scatter3d'
    };
    var trace2 = {
        name: 'Negative',
        x: xValuesNeg,
        y: yValuesNeg,
        z: zValuesNeg,
        mode: 'markers',
        marker: {
            color: 'AD241B',
            size: 12,
            opacity: 0.5
        },
        type: 'scatter3d'
    };
    var data = [trace1, trace2];
    var layout = {
        title: "MIC Comparisons vs ",
        margin: {
            l: 0,
            r: 0,
            b: 0,
            t: 0
        },
        xaxis: {
            title: "Penicilin MIC"
        },
        yaxis: {
            title: "Streptomycin MIC"
        },
        zaxis: {
            title: "Neomycin MIC"
        }
    };
    plotly.newPlot('visualization3', data, layout);
}


function sortAndPlot(target, type) {
    var dataCopy = bacteria;
    dataCopy.sort(function(a, b) {return a.antibodies[type] - b.antibodies[type]});
    var xValues = [];
    var yValues = [];

    var annotationList = [];
    for (var i = 0; i < dataCopy.length; i++) {
        var bacterium = dataCopy[i];
        xValues.push(bacterium.antibodies[type]);
        yValues.push(bacterium.name);

        var fontSettings = {};
        if (bacterium.gramStain == 'positive') {
            fontSettings['color'] = '47A51D';
        } else {
            fontSettings['color'] = 'AD241B';
        }

        var annotation = {
            x: bacterium.antibodies[type],
            y: bacterium.name,
            text: bacterium.gramStain,
            xanchor: 'left',
            yanchor: 'middle',
            showarrow: false,
            font: fontSettings
        }

        annotationList.push(annotation)
    }

    var data = [{
        x: xValues,
        y: yValues,
        type: 'bar',
        orientation: 'h'
    }];

    var layout = {
        title: "Gram Stain results against " + type + " MIC value",
        margin: {
            l: 250
        },
        xaxis: {
            title: 'MIC'
        },
        yaxis: {
            title: 'Bacterium'
        },
        annotations: annotationList
    }

    plotly.newPlot(target, data, layout);
}


/**
Internal class used to hold information about a bacterium. 
*/
class Bacterium {
    /**
    @param name: Name of the bacterium.
    @param antibodies: Map of antibodies mapped to their MIC values.
    @param gramStain: The Gram stain test result.
    */
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
anychart.onDocumentReady(function() {

    // data
    data = anychart.data.set([
        { x: "Jan", value: 10 },
        { x: "Feb", value: 2 },
        { x: "Mar", value: 15 },
        { x: "Apr", value: 10 },
        { x: "May", value: 15 },
        { x: "Jun", value: 10 },
        { x: "Jul", value: 2 },
        { x: "Aug", value: 15 },
        { x: "Sep", value: 10 },
        { x: "Sep", value: 22 },
    ]);

    // set chart type
    var chart = anychart.line();

    chart.title("Cromos Token Value");

    // set data
    var area = chart.line(data);

    // set container and draw chart
    chart.container("container").draw();
});

// function, if listener triggers
// dateInput = document.getElementById('dateInput')
// month = dateInput.value


// valueInput = document.getElementById('valueInput')


const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const d = new Date();
let nameDate = month[d.getMonth()];
console.log(typeof nameDate)

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');

updateValue = document.getElementById('updateValue')

function addPoint() {
    // first index for new point
    newIndex = (data.mapAs().getRowsCount()) + 1;
    dateInput = document.getElementById('dateInput')
    Month = dateInput.value

    valueInput = document.getElementById('valueInput')

    updateValue = document.getElementById('updateValue')
    Value = valueInput.value;
    numValue = parseInt(Value)
        // append data
    data.append({
        // x value
        // x: month + " " + newIndex,
        x: nameDate + dd + "#" + newIndex,
        // random value from 1 to 100
        value: numValue
    });
};





//
// return data for chart
// functioconsole.log(month)n getData() {
//     return graph
// }
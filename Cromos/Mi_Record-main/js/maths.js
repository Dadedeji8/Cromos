const addCromos = document.getElementById('addCromos')
const purchaseCromos = document.getElementById('purchaseCromos')
const resetCromos = document.getElementById('resetCromos')
let dollarValue = document.getElementById('dollarValue')
let cromsoValue = document.getElementById('cromosValue')
let notice = document.getElementById('notice')
let wallet = document.querySelector('#wallet')

notice.style.display = 'none'

let dollar = 0
let cromos = 0

//conversion for cromos using  addCromos
addCromos.addEventListener('click', function() {
    cromos += 1
    dollar = cromos * 0.78
    dollarValue.textContent = `$ ${dollar}`
    cromsoValue.textContent = `${cromos} Cromos`

})

//purchase to generate wallet address
purchaseCromos.addEventListener('click', function() {

    wallet.style.display = ''
    wallet.textContent = `virtual wallet : 141071434139` //not really the wallet sha

    notice.style.display = 'block'
    if (cromos == 0) {
        alert('cannot generate wallet for empty value')
        notice.style.display = 'none'
        wallet.style.display = 'none'
    } else {
        alert('copy address generated and pay using your crypto app then return to dashboard')
    }

})


//reset button
resetCromos.addEventListener('click', function() {
        cromos = 0
        dollar = 0
        dollarValue.textContent = `$ ${dollar}`
        cromsoValue.textContent = `${cromos} Cromos`
        notice.style.display = "none"
        wallet.style.display = 'none'

    })
    //     //chat
    // var options = {
    //     series: [{
    //         name: "Desktop",
    //         data: randData() //data: [4, 61, 45, 26, 79, 13, 55, 22, 78],
    //     }],
    //     chart: {
    //         height: 400,
    //         type: "line",
    //         zoom: {
    //             enabled: false
    //         },
    //         toolbar: {
    //             show: false
    //         }
    //     },
    //     markers: {
    //         show: true,
    //         size: 6
    //     },
    //     dataLabels: {
    //         enabled: false
    //     },
    //     legend: {
    //         show: true,
    //         showForSingleSeries: true,
    //         position: "top",
    //         horizontalAlign: "right"
    //     },
    //     stroke: {
    //         curve: "smooth",
    //         linecap: "round"
    //     },
    //     grid: {
    //         row: {
    //             colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
    //             opacity: 0.5
    //         }
    //     },
    //     xaxis: {
    //         categories: [
    //             "Jan",
    //             "Feb",
    //             "Mar",
    //             "Apr",
    //             "May",
    //             "Jun",
    //             "Jul",
    //             "Aug",
    //             "Sep"
    //         ]
    //     }
    // };

// var chart = new ApexCharts(document.querySelector("#chart"), options);
// chart.render();


// function appendChartSeries() {
//     var data = randData();
//     // Append new data to existing Chart
//     chart.appendSeries({
//         name: "New Series",
//         data: data,
//         //data: [4, 61, 45, 26, 79, 13, 55, 22, 78],
//         animate: true
//     });
// }

// function updateChartSeries() {
//     var data = randData();
//     // Replace data to existing Chart
//     chart.updateSeries([{
//         name: "Pizza",
//         data: data
//     }]);
// }

// function updateChartOptions() {
//     chart.updateOptions({
//         chart: {
//             type: "bar",
//             animate: true
//         },
//         labels: '',
//         stroke: {
//             width: 0
//         }
//     });
// }

// function updateChartOptions2() {
//     chart.updateOptions({
//         chart: {
//             type: "line",
//             animate: true
//         },
//         labels: '',
//         stroke: {
//             width: 6
//         }
//     });
// }

// function updateChartOptions3() {
//     chart.updateOptions({
//         chart: {
//             type: "donut",
//             animate: true
//         },
//         series: [44, 55, 13],
//         labels: ['Apple', 'Orange', 'Watermelon']
//     });
// }

// $(".btn-append").on("click", function() {
//     appendChartSeries();
// });
// $(".btn-update").on("click", function() {
//     updateChartSeries();
// });

// $(".btn-options").on("click", function() {
//     updateChartOptions();
// });
// $(".btn-options2").on("click", function() {
//     updateChartOptions2();
// });
// $(".btn-options3").on("click", function() {
//     updateChartOptions3();
// });

// function randData() {
//     var arr = [];
//     for (var i = 0; i < 9; i++) {
//         arr.push(Math.floor(Math.random() * 200) + 1);
//     }

//     var str = [];
//     for (var i = 0; i < 9; i++) {
//         str[i] = arr[i];
//     }
//     return str;
// }
// var options = {
//     chart: {
//         type: 'bar'
//     },
//     series: [{
//         name: 'sales',
//         data: [30, 40, 45, 50, 49, 60, 70, 91, 125]
//     }],
//     xaxis: {
//         categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
//     }
// }

// var chart = new ApexCharts(document.querySelector("#chart"), options);

// chart.render();
// dataPoints: shops.map( function(aShop) {
//   return { label: aShop.shopName, y: aShop.numHoursOpen }
// })


$(function () {
  showChart();
});

function showChart() {
  var chartObject = { //Pass chart options
    title: {
      text: "Results"
    },
    axisY: {
      title: "Number of Votes",
      includeZero: true
    },
    data: [{
      type: "column", //change it to column, spline, line, pie, etc
    }]
  };

  var dataPoints = [{
    label: "Food",
    y: foodClicks
  }, {
    label: "Pandas",
    y: pandaClicks
  }];

  chartObject.data.push( {dataPoints: dataPoints} );

  $("#chart").CanvasJSChart(chartObject);
}

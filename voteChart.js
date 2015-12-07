// dataPoints: shops.map( function(aShop) {
//   return { label: aShop.shopName, y: aShop.numHoursOpen }
// })


$(function () {
  showChart();
  eventHandler();
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

  var dataPoints = [];
  if ($('#foodBox').prop('checked')) {
    dataPoints.push({
      label: "Food",
      y: localStorage.foodClicks
    });
  }
  if ($('#pandaBox').prop('checked')) {
    dataPoints.push({
      label: "Pandas",
      y: localStorage.pandaClicks
    });
  }

  log(dataPoints);
  chartObject.data.push( {dataPoints: dataPoints} );

  $("#chart").CanvasJSChart(chartObject);
}


function eventHandler() {
  $('#foodBox').change(function() {
    showChart();
  });
  $('#pandaBox').change(function() {
    showChart();
  });
}

// dataPoints: shops.map( function(aShop) {
//   return { label: aShop.shopName, y: aShop.numHoursOpen }
// })


$(function () {
  showChart();
});

function showChart() {
	$("#chart").CanvasJSChart({ //Pass chart options
    title: {
      text: "Results"
    },
    axisY: {
      title: "Number of Votes",
      includeZero: true
    },
		data: [{
		type: "column", //change it to column, spline, line, pie, etc
		dataPoints: [
			{ label: "Food", y: foodClicks },
			{ label: "Pandas", y: pandaClicks }
		]}]
  });
};

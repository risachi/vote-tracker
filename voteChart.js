// dataPoints: shops.map( function(aShop) {
//   return { label: aShop.shopName, y: aShop.numHoursOpen }
// })


$(function () {
	$("#chart").CanvasJSChart({ //Pass chart options
    title: {
      text: "Donuts"
    },
    axisY: {
      title: "Number of Votes",
      includeZero: true
    },
		data: [{
		type: "column", //change it to column, spline, line, pie, etc
		dataPoints: [
			{ label: food[voteImage.name], y: foodClicks },
			{ label: pandas[voteImage.name], y: pandaClicks }
		]}]
  });
});

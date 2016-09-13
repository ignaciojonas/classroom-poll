var options={
    chart: {
        renderTo: 'container',
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Encuesta en Clases - Entendiste?'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    series: [{
        name: 'Options',
        colorByPoint: true,
        data: [{
            name: 'Si, obvio!',
            color: 'green'
        }, {
            name: 'No, para nada!',
            color: 'red'
        }, {
            name: 'Algo Entendi!',
            color: 'yellow'
        }]
    }]
};
var chart = new Highcharts.Chart(options);

$(function () {
  firebase.database().ref('poll1/yes').on('value', function(value) {
      chart.series[0].data[0].update({y: value.val()})
  });

  firebase.database().ref('poll1/no').on('value', function(value) {
    chart.series[0].data[1].update({y: value.val()})
  });

  firebase.database().ref('poll1/maybe').on('value', function(value) {
    chart.series[0].data[2].update({y: value.val()})
  });
});

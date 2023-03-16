Highcharts.getJSON('https://demo-live-data.highcharts.com/aapl-ohlc.json', function (data) {

    // create the chart
    Highcharts.stockChart('stock_graph', {
        chart: {
            // backgroundColor: '#231d3a',
            backgroundColor: 'rgb(255 255 255 / 0%)'
        },
        
        rangeSelector: {
            buttons: [{
                type: 'month',
                count: 1,
                text: '1m',
                title: 'View 1 month'
            }, {
                type: 'month',
                count: 3,
                text: '3m',
                title: 'View 3 months'
            }, {
                type: 'month',
                count: 6,
                text: '6m',
                title: 'View 6 months'
            }],
            buttonTheme: {
                fill: 'none',
                stroke: '#fff',
                'stroke-width': 2,
                r: 2,
                style: {
                    color: '#fff',
                    fontWeight: 'bold'
                }
            },
            inputStyle: {
                    color: '#fff',
                    fontWeight: 'bold'
            },
            labelStyle: {
                color: '#fff',
                fontWeight: 'bold'
            },
            selected: 0
        },

        title: {
            text: 'Samsung Stock Price',
            style: {
               color: '#fff'   
            }
        },
        xAxis: {
            labels: {
                style: {
                    color: '#fff'
                }
            }
        },
        series: [{
            type: 'candlestick',
            name: 'Samsung Stock Price',
            data: data,
            upColor: '#ED3738',
            dataGrouping: {
                units: [
                    [
                        'week',
                        [1]
                    ], [
                        'month',
                        [1, 2, 3, 4, 6]
                    ]
                ]
            }
        }]
    });
});






$(document).ready(function(){$("#chart-container").insertFusionCharts({
        type: "pie3d",
        width: "400",
        height: "350",
        dataFormat: "json",
        dataSource: {
             chart: {
        caption: "machine1",
        startingangle: "0",
        showlabels: "0",
        showlegend: "1",
        enablemultislicing: "0",
        slicingdistance: "15",
        showpercentvalues: "1",
        showpercentintooltip: "0",
        theme: "fint"
    },
    data: [
        {
            label: "Utilise",
            value: "88"
        },
        {
            label: "Non Utilise",
            value: "12"
        },
    ]
        }
    });
});

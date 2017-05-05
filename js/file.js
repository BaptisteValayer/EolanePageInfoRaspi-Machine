/*$(document).ready(function(){
  var ajd = new Date();
  var year = ajd.getFullYear();
  var month = ajd.getMonth() +1;
  var day = ajd.getDate();


  var invocation = new XMLHttpRequest();
  var url = 'http://10.100.74.7/machUtil.cgi?MACHINE=+--&STIME=FROM&SDELTAD=0&PERIOD=DAYS&TIMEUNIT=HHMMSS&TIMEDISP=BOTH&BZ=Yes&REPORT=G%E9n%E9rer+les+rapports&STARTYEAR='+year+'&STARTMONTH='+month+'&STARTDAY='+day;

  invocation.onload = function() {

    alert(xdr.responseText);

  }


  invocation.open("GET", url, true);

  invocation.send();
  $.get("http://10.100.74.7/machUtil.cgi?MACHINE=+--&STIME=FROM&SDELTAD=0&PERIOD=DAYS&TIMEUNIT=HHMMSS&TIMEDISP=BOTH&BZ=Yes&REPORT=G%E9n%E9rer+les+rapports",{STARTYEAR:year,STARTMONTH:month,STARTDAY:day},function(data){
    console.log(data);
  })
});*/
var tableauTotale = [];

function getInfo(){
  var MachineNameList = $("h3");
  var MachineCaracList = $("tbody .DataTable").first().children();
  var MachineDonneeList = $(".DataTable > .DataTableNumeric").children();
  var obj={}
  MachineNameList.each(function(index){
        obj[MachineCaracList[0].textContent]=MachineDonneeList[0+(index*8)].textContent,
        obj[MachineCaracList[1].textContent] =MachineDonneeList[1+(index*8)].textContent,
        obj[MachineCaracList[2].textContent+"C"] =MachineDonneeList[2+(index*8)].textContent,
        obj[MachineCaracList[2].textContent+"P"] =MachineDonneeList[3+(index*8)].textContent.split(".")[0],
        obj[MachineCaracList[3].textContent+"C"] =MachineDonneeList[4+(index*8)].textContent,
        obj[MachineCaracList[3].textContent+"P"] =MachineDonneeList[5+(index*8)].textContent,
        obj[MachineCaracList[4].textContent] =MachineDonneeList[6+(index*8)].textContent,
        obj[MachineCaracList[5].textContent] =MachineDonneeList[7+(index*8)].textContent
        tableauTotale[MachineNameList[index].textContent]=obj;
        obj={};
  });
  createPageWithCharts(tableauTotale);
}

function createPageWithCharts(tableauInfo){
  $("#allInfo").empty();
  for (var nomMachine in tableauInfo) {
    if(tableauInfo[nomMachine]['Temps d\'activitéP']=="-"){
      $('<canvas>').addClass(nomMachine)
                   .attr("width",300)
                   .attr("height",300)
                   .css("display","inline")
                   .css("margin","5")
                   .css("background-color","#3d4350")
                   .css("border","solid 3px")
                   .css("border-color","#1b1d23")
                   .appendTo("#allCanvas");
      var ctx = $("."+nomMachine);
      ctx.drawText({
        text: nomMachine,
        fontFamily: 'Arial, Helvetica, Sans-Serif',
        fontStyle: 'bold',
        fontSize: 30,
        x: 150, y: 25,
        fillStyle: '#1b1d23',
      });
      ctx.drawRect({
        fillStyle: '#FFFFFF',
        x: 130, y: 145,
        fromCenter: false,
        width: 35,
        height: 10
      });
    }
    else {
      $('<canvas>').addClass(nomMachine)
                   .attr("width",300)
                   .attr("height",300)
                   .css("display","inline")
                   .css("margin","5")
                   .css("background-color","#3d4350")
                   .css("border","solid 3px")
                   .css("border-color","#1b1d23")
                   .appendTo("#allCanvas");
      var ctx = $("."+nomMachine);
      var data = {
        labels: [
            "Utilise",
            "Non Utilise",
        ],
        datasets: [
            {
                data: [tableauInfo[nomMachine]['Temps d\'activitéP'], 100-tableauInfo[nomMachine]['Temps d\'activitéP']],
                backgroundColor: [
                    "#2ECC71",
                    "#E74C3C",
                ],
                hoverBackgroundColor: [
                    "#2ECC71",
                    "#E74C3C",
                ]
            }]
      };
      var myPieChart = new Chart(ctx,{
        type: 'pie',
        data: data,
        options: {
            title: {
                display: true,
                fontSize : 30,
                fontColor: '#1b1d23',
                text: nomMachine,
            },
            animation:{
                animateScale:true,
                onComplete: function () {
                  this.chart.ctx.textBaseline = "middle";

                  this.chart.ctx.font = "bold 20px Helvetica Neue Helvetica, Arial, sans-serif",
                  this.chart.ctx.fillStyle = ColorCalcul(tableauInfo[this.chart.ctx.canvas.className]['Temps d\'activitéP'])
                  this.chart.ctx.fillText(tableauInfo[this.chart.ctx.canvas.className]['Temps d\'activitéP']+"%",135,220);
                  this.chart.ctx.fillStyle = "#9da5b4";
                  this.chart.ctx.fillText("Pieces = "+tableauInfo[this.chart.ctx.canvas.className]['Pièces'],15,60);
                  this.chart.ctx.fillText("Cartes = "+tableauInfo[this.chart.ctx.canvas.className]['Cartes unitaires'],15,88);
                }
            },
            legend: {
              display: false,
            },
            tooltips: {
              enable: false
            },
            rotation: 1 * Math.PI,
            circumference: 1 * Math.PI,
            cutoutPercentage: 50,
            responsive: false
        }
      });
    }
  }
}

function ColorCalcul(pourcent){
  if(pourcent<60){return "#E74C3C"}
  else if (pourcent<=75) {
    return "#E67E22"
  }
  else {
    return "#2ECC71"
  };
}


/*$(document).ready(function(){
  /*var ajd = new Date();
  var year = ajd.getFullYear();
  var month = ajd.getMonth() +1;
  var day = ajd.getDate();


  var invocation = new XMLHttpRequest();
  var url = 'http://10.100.74.4/machUtil.cgi?MACHINE=+--&STIME=FROM&SDELTAD=0&PERIOD=DAYS&TIMEUNIT=HHMMSS&TIMEDISP=BOTH&BZ=Yes&REPORT=G%E9n%E9rer+les+rapports&STARTYEAR='+year+'&STARTMONTH='+month+'&STARTDAY='+day;

  invocation.onload = function() {

    alert(xdr.responseText);

  }


  invocation.open("GET", url, true);

  invocation.send();
  /*$.get("http://10.100.74.4/machUtil.cgi?MACHINE=+--&STIME=FROM&SDELTAD=0&PERIOD=DAYS&TIMEUNIT=HHMMSS&TIMEDISP=BOTH&BZ=Yes&REPORT=G%E9n%E9rer+les+rapports",{STARTYEAR:year,STARTMONTH:month,STARTDAY:day},function(data){
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
        obj[MachineCaracList[2].textContent+"P"] =MachineDonneeList[3+(index*8)].textContent,
        obj[MachineCaracList[3].textContent+"C"] =MachineDonneeList[4+(index*8)].textContent,
        obj[MachineCaracList[3].textContent+"P"] =MachineDonneeList[5+(index*8)].textContent,
        obj[MachineCaracList[4].textContent] =MachineDonneeList[6+(index*8)].textContent,
        obj[MachineCaracList[5].textContent] =MachineDonneeList[7+(index*8)].textContent
        tableauTotale[MachineNameList[index].textContent]=obj;
        obj={};
  });
  location.href="index.php";//+tableauTotale;
}

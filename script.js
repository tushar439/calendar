

var date = new Date();
var cur_month = date.getMonth();
var cur_yr = date.getFullYear();
console.log(cur_month,cur_yr);
var moth = ["Jan","Feb","Mar","Apr","May",
  "Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

var month=cur_month;
var year = cur_yr;
var h3 = document.getElementsByTagName('h3');

function data(month,year){
  var first_day = new Date((month+1)+" "+"1"+" "+year);
  var no_of_days = new Date(year, month+1, 0).getDate();
  console.log(no_of_days);
  var table_data=document.getElementsByTagName("td");
  for(j=0;j<table_data.length;j++){
    table_data[j].innerHTML="";
  } 
  console.log(table_data);
  var day=new Array(42);
  if(first_day.getDay()==0){
    for(var i=0;i<no_of_days;i++){
      table_data[i].innerHTML=i+1;
    }

  }
  else if(first_day.getDay()==1){
    for(var i=1;i<no_of_days+1;i++){
      table_data[i].innerHTML=i;
    }
    
  }
  else if(first_day.getDay()==2){
    for(var i=2;i<no_of_days+2;i++){
      table_data[i].innerHTML=i-1;
    }
    
  }
  else if(first_day.getDay()==3){
    for(var i=3;i<no_of_days+3;i++){
      table_data[i].innerHTML=i-2;
    }
    
  }
  else if(first_day.getDay()==4){
    for(var i=4;i<no_of_days+4;i++){
      table_data[i].innerHTML=i-3;
    }
    
  }
  else if(first_day.getDay()==5){
    for(var i=5;i<no_of_days+5;i++){
      table_data[i].innerHTML=i-4;
    }
    
  }
  else if(first_day.getDay()==6){
    
    for(var i=6;i<no_of_days+6;i++){
      table_data[i].innerHTML=i-5;
    }
  }

  console.log(day);

 h3[0].innerHTML=moth[month]+"  "+year;

}
data(month,year);
var yr_n = document.getElementById('yr_n');
yr_n.addEventListener('click',function(){
  year=year-1;
  console.log(year);
  data(month,year);
 

});
var mn_n = document.getElementById('mn_n');
console.log(mn_n);
mn_n.addEventListener('click',function()
  {
    month=month-1;
    console.log(month);
    data(month,year);
  });
var yr_p = document.getElementById('yr_p');
yr_p.addEventListener('click',function(){
  year=year+1;
  console.log(year);
  data(month,year);
 

});
var mn_p = document.getElementById('mn_p');
console.log(mn_n);

mn_p.addEventListener('click',function()
  {
    month=month+1;
    console.log(month);
    data(month,year);
  });
var today = document.getElementById('today');
today.addEventListener('click',function(){
  data(cur_month,cur_yr);
});
var submit=document.getElementById('submit');



submit.addEventListener('click',function()
  {
    var year_input = document.getElementById('year_input').value;
    var month_input = document.getElementById('month_input').value;
    year=parseInt(year_input);
    month=parseInt(month_input);
    console.log(month);
    data(month,year);
  //   year=year+1;
  // console.log(year);
  // data(month,year);

  });

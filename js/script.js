$(document).ready(function(){
    
   $('button').click(function(){               
    var rcValue = $('#rcnumber').val();
        var price = $('#price').val();
        var address = $('#address').val();                
        var minf = 100000000;
        var maxf = 999999999;
        var minl = 100000;
        var maxl = 999999;
        var randomNumberf = Math.floor(Math.random() * (maxf - minf + 1)) + minf;
        var randomNumberl = Math.floor(Math.random() * (maxl - minl + 1)) + minl;    
    $('#rcText').html(rcValue);
        $('.amount').children('span').html(price);
        $('#addressText').html(address);        
        $('#transactionText').html('00' + randomNumberf+"-"+randomNumberl);
        onTimeChange();
        $('.form').hide();
    })
    var inputEle = document.getElementById('time');
    function onTimeChange() {
        var date = $( "#date" ).val();
        var timeSplit = inputEle.value.split(':'),
          hours,
          minutes,
          meridian;
        hours = timeSplit[0];
        minutes = timeSplit[1];
        if (hours > 12) {
          meridian = 'PM';
          hours -= 12;
        } else if (hours < 12) {
          meridian = 'AM';
          if (hours == 0) {
            hours = 12;
          }
        } else {
          meridian = 'PM';
        }
        $('#dateText').html($.date(date) + " at " + hours + ":" + minutes + " " + meridian);
      }



	
	const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
	$.date = function(dateObject) {
    var d = new Date(dateObject);
    var day = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    if (day < 10) {
        day = "0" + day;
    }
    
    var date = day + " " +  monthNames[month]  + " " + year;

    return date;
};
})

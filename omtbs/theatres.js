function buttonClick3(){
    alert("logged out successfully!");
}
document.getElementById("logout").addEventListener('click',buttonClick3);

function visibility(){
    document.getElementById("hall").classList.remove("hall");
}




function kaithi() {
    document.getElementById("myBtn").value = "newButtonValue";
    document.getElementById("film").innerText = "Kaithi (u) tamil";
    document.getElementById("place").innerText = "INOX ,marina mall,omr";
    document.getElementById("time").innerText = "02:10pm";
}
function bigil() {
    document.getElementById("myBtn11").value = "newButtonValue";
    document.getElementById("film").innerText = "Bigil (u/a) tamil";
    document.getElementById("place").innerText = "INOX ,marina mall,omr";
    document.getElementById("time").innerText = "11:10am";
}
function bigil2() {
    document.getElementById("myBtn12").value = "newButtonValue";
    document.getElementById("film").innerText = "Bigil (u/a) tamil";
    document.getElementById("place").innerText = "INOX ,marina mall,omr";
    document.getElementById("time").innerText = "06:10pm";
}
function bigil3() {
    document.getElementById("myBtn13").value = "newButtonValue";
    document.getElementById("film").innerText = "Bigil (u/a) tamil";
    document.getElementById("place").innerText = "INOX ,marina mall,omr";
    document.getElementById("time").innerText = "10:10pm";
}

function nKP() {
    document.getElementById("myBtn21").value = "newButtonValue";
    document.getElementById("film").innerText = "Nerkonda Paarvai (u/a) tamil";
    document.getElementById("place").innerText = "PVR ,vr mall,anna nagar";
    document.getElementById("time").innerText = "02:10pm";
}
function nKP2() {
    document.getElementById("myBtn22").value = "newButtonValue";
    document.getElementById("film").innerText = "Nerkonda Paarvai (u/a) tamil";
    document.getElementById("place").innerText = "PVR ,vr mall,anna nagar";
    document.getElementById("time").innerText = "06:10pm";
}
function nKP3() {
    document.getElementById("myBtn23").value = "newButtonValue";
    document.getElementById("film").innerText = "Nerkonda Paarvai (u/a) tamil";
    document.getElementById("place").innerText = "PVR ,vr mall,anna nagar";
    document.getElementById("time").innerText = "09:10pm";
}
function darbar() {
    document.getElementById("myBtn31").value = "newButtonValue";
    document.getElementById("film").innerText = "Darbar (u) tamil";
    document.getElementById("place").innerText = "PVR ,vr mall,anna nagar";
    document.getElementById("time").innerText = "06:30am";
}
function darbar2() {
    document.getElementById("myBtn32").value = "newButtonValue";
    document.getElementById("film").innerText = "Darbar (u) tamil";
    document.getElementById("place").innerText = "PVR ,vr mall,anna nagar";
    document.getElementById("time").innerText = "11:30am";
}
function asuran() {
    document.getElementById("myBtn5").value = "newButtonValue";
    document.getElementById("film").innerText = "Asuran (u/a) tamil";
    document.getElementById("place").innerText = "Palazzo ,vijaya mall,vadapalani";
    document.getElementById("time").innerText = "02:30pm";
}
function asuran2() {
    document.getElementById("myBtn5").value = "newButtonValue";
    document.getElementById("film").innerText = "Asuran (u/a) tamil";
    document.getElementById("place").innerText = "Palazzo ,vijaya mall,vadapalani";
    document.getElementById("time").innerText = "10:30pm";
}
function nVP() {
    document.getElementById("myBtn5").value = "newButtonValue";
    document.getElementById("film").innerText = "Namma Veetu Pillai (u) tamil";
    document.getElementById("place").innerText = "palazzo ,vijaya mall,vadapalani";
    document.getElementById("time").innerText = "11:30am";
}
function nVP2() {
    document.getElementById("myBtn5").value = "newButtonValue";
    document.getElementById("film").innerText = "Namma Veetu Pillai (u) tamil";
    document.getElementById("place").innerText = "Palazzo ,vijaya mall,vadapalani";
    document.getElementById("time").innerText = "06:30pm";
}


function onLoaderFunc()
{
  $(".seatStructure *").prop("disabled", true);
  $(".displayerBoxes *").prop("disabled", true);
}
function takeData()
{
  if (( $("#Coupon").val().length == 0 ) || ( $("#Numseats").val().length == 0 ))
  {
  alert("Please Enter your Coupon Code and Number of Seats");
  }
  else
  {
    $(".inputForm *").prop("disabled", true);
    $(".seatStructure *").prop("disabled", false);
    document.getElementById("notification").innerHTML = "<b style='margin-bottom:0px;background:yellow;color:black;'>Please Select your Seats NOW!</b>";
  }
}


function updateTextArea() { 
    
  if ($("input:checked").length == ($("#Numseats").val()))
    {
      $(".seatStructure *").prop("disabled", true);
      
     var allCouponVals = [];
     var allNumberVals = [];
     var allSeatsVals = [];
  
     //Storing in Array
     allCouponVals.push($("#Coupon").val());
     allNumberVals.push($("#Numseats").val());
     $('#seatsBlock :checked').each(function() {
       allSeatsVals.push($(this).val());
     });
    
     //Displaying 
     $('#couponDisplay').val(allCouponVals);
     $('#NumberDisplay').val(allNumberVals);
     $('#seatsDisplay').val(allSeatsVals);
     document.getElementById("finalBtn").disabled = false;
    }
  else
    {
      alert("Please select " + ($("#Numseats").val()) + " seats")
    }
  }


function myFunction() {
  alert($("input:checked").length);
}




$(":checkbox").click(function() {
  if ($("input:checked").length == ($("#Numseats").val())) {
    $(":checkbox").prop('disabled', true);
    $(':checked').prop('disabled', false);
  }
  else
    {
      $(":checkbox").prop('disabled', false);
    }
});








function finalBtn(){
    var movieName=document.getElementById("film").innerHTML;
    var moviePlace=document.getElementById("place").innerHTML;
    var movieTime=document.getElementById("time").innerHTML;
    var movieSeats=document.getElementById("seatsDisplay").value;
    alert("YOUR BOOKING DETAILS"+"\n"+"MOVIE NAME: "+movieName+"\n"+"MOVIE PLACE: "+moviePlace+"\n"+"MOVIE TIME: "+movieTime+"\n"+"SEATS NO: "+movieSeats+"\n"+"**take a SCREENSHOT of this ticket and show it in enterance of the cinema hall")
}
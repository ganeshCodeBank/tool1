$(document).ready(function(){
 
  $("#report-Id").click(function(){
    $(".dashView").hide();
    $(".reportview").show();
     $(".buildview").hide();
     $(".codeview").hide();
     $(".dashtext").css("color","cadetblue");
     $(".reporttext").css("color","red");
     $(".buildtext").css("color","cadetblue"); 
 });
$("#dash-Id").click(function(){
    $(".dashView").show();
    $(".reportview").hide();
     $(".buildview").hide(); 
     $(".codeview").hide();
     $(".dashtext").css("color","red");
     $(".reporttext").css("color","cadetblue");
     $(".buildtext").css("color","cadetblue");  
 });

$("#buildicon-Id").click(function(){
    
    $(".dashView").hide();
    $(".reportview").hide();
     $(".buildview").show();
     $(".codeview").hide();
      $(".dashtext").css("color","cadetblue");
     $(".reporttext").css("color","cadetblue");
     $(".buildtext").css("color","red"); 
 });

 });
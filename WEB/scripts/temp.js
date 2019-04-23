$( document ).ready(function(){
var fn=function(){ 
    // ТЕМПЕРАТУРА В ТЕПЛИЦЕ
    $.ajax({
        type: "GET",
        url: 'main.php',
        data: {param:'tempTeplica'},
        success: function(data){
            $('#temp').html(data+"°С");
        }
    });
// ТЕМПЕРАТУРА НА УЛИЦЕ
    $.ajax({
        type: "GET",
        url: 'main.php',
        data: {param:'tempOut'},
        success: function(data){
            $('#tempOut').html(data+"°С");
        }
    });


    setTimeout(arguments.callee,5000);
    }
    
    
    setTimeout( fn,500 );

});
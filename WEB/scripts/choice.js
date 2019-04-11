// УЗНАЕМ ТЕКУЩЕЕ СОСТОЯНИЕ

$( document ).ready(function(){

  $.ajax({
    type: "GET",
    url: 'main.php',
    data: {param:'mode'},
    success: function(data){
        if (data == '1') {
          $( '#ch2' ).hide();
          $('#manual').css({ "background-color": "brown" });
        }

        if (data == '2') {
          $( '#ch' ).hide();
        $('#auto').css({ "background-color": "brown" });
          
        }
    }
  });
});

$(function() {

       $('#auto').click(function(){
        $( '#ch' ).hide();
        $( '#ch2' ).fadeIn();
        $('#auto').css({ "background-color": "brown" });
        $('#manual').css({ "background-color": "#1ba1a5" });
        });

        $('#manual').click(function(){
            $( '#ch2' ).hide();
            $( '#ch' ).fadeIn();
            $('#auto').css({ "background-color": "#1ba1a5" });
            $('#manual').css({ "background-color": "brown" });
          });

    });
    
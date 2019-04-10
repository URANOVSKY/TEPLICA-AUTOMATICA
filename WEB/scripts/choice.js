$(function() {

    $( '#ch' ).hide();

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
    
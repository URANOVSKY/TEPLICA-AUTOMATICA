var fn=function(){ 
    // alert('1');
    setTimeout(arguments.callee,1000);
    }
    
    
    setTimeout( fn,1000 );
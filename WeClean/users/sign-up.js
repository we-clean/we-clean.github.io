function main() {
    
    $(".dropdown-toggle").click(function(){
        $(".dropdown-menu").toggle();       
    });
    
    $(".dropdown-toggle").mouseenter(function(){
        $(".dropdown-menu").show();       
    }); 
    
    $(".dropdown-menu").mouseleave(function(){
        $(".dropdown-menu").hide();       
    });    
    
    $(".item").mouseenter(function(){
        $(".dropdown-menu").hide();       
    });
    
}

$(document).ready(main);

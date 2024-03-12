//resource link: https://www.w3schools.com/jquery/default.asp

$(document).ready(function() {
    $("#rs").hide();
        $("#triangle").click(function(){
            $("#rs").show();
        });
        $("#rs").click(function(){
            $("#rs").hide();
        });
    
    $("#happy").hide();
        $("#sad").click(function(){
            $("#happy").show();
            $("#sad").hide();
        });
        $("#happy").click(function(){
            $("#sad").show();
            $("#happy").hide();
        });

    $("#recycles").hide();
        $("#bottles").click(function(){
            $("#recycles").show();
            $("#bottles").hide();
        });
        $("#recycles").click(function(){
            $("#bottles").show();
            $("#recycles").hide();
        });
    
    $("#what").click(function(){
        $(".three").addClass("animate-img");

        setTimeout(function(){
            $(".three").removeClass("animate-img");
        },2000);
    })

    $("#what").click(function(){
        $(".three").addClass("animate-img");
        setTimeout(function(){
            $(".three").removeClass
            ("animate-img");
        }, 2000);
    });
    $("#what").css({
        animation: "expandText 2s forwards"
});
});
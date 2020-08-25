function clearTerm() {
    $("#term").val("0");
}

function bs() {
    $("#term").val( ($("#term").val().length==1 ? "0" : $("#term").val().substr(0, $("#term").val().length -1)) );
}

function solve() {
    try {
        var x = eval($("#term").val());
        $("#term").val(x);
        $("#term").addClass("ok");
        $("#term").effect("highlight");
    } catch (err) {
        $("#term").addClass("notok");
        $("#term").effect("shake", 75);
    }        
}

$("input[type='button']").click(function() {
    $("#term").removeClass("notok").removeClass("ok");
    var exp= /[0123456789()\/*+.\-=<C]/;
    if($(this).val().match(exp)) {
        switch($(this).val()) {
            case "<": bs(); break;
            case "C": clearTerm(); break;
            case "=": solve(); break;
            default: 
                $("#term").val( ($("#term").val()!="0" ? $("#term").val() + $(this).val() : $(this).val()) );
                break;
        }
    }
});

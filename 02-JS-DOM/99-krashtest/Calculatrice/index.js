// function clearTerm permet de remetre le compteur à 0
function clearTerm() {
    console.log('function clearTerm')
    $("#term").val("0");
}

// Doc opérateur ?
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/L_op%C3%A9rateur_conditionnel
function bs() {
    console.log('function bs')
    $("#term").val( ($("#term").val().length==1 ? "0" : $("#term").val().substr(0, $("#term").val().length -1)) );
}

// function solve() permet de demander le résultat (=)
function solve() {
    console.log('function solve')
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

// Fonction à l'écoute de notre input
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

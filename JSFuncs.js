function initEvents()
{
    $("#myspan").click(function () {
        alert('REQUEST Service');
    });
    $("#myspan1").click(function () {
        alert('ASK A Question');
    });
    $("#myspan2").click(function () {
        alert('MAP Service Requests');
    });
}
var loggedIn = false;
function mainpageOnLoad() {
    if (loggedIn) {
        $("#aLogon").html("wideball");
        $("#aLogout").show();
    }
    else {
        $("#aLogon").html("Login/Register");
        $("#aLogout").hide();
    }
}
    
        



         
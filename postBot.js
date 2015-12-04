var chatBox  = document.getElementsByName("xhpc_message")[0];
var boxID = document.getElementsByClassName("_42ft _4jy0 _11b _4jy3 _4jy1 selected _51sy");
 
var postInit   = function() {
chatBox.value = 'yes'; 
 
        boxID[0].click();
    }
window.onload = postInit();
//spam one person
var chatBox  = document.getElementsByName("message_body")[0];
var boxID = document.getElementById("seeDesc");
 
var spamInit   = setInterval(function() {
    chatBox.value = 'Your Message';
 
 
    setTimeout(function(){
        boxID.click();
    }, 1000);
 
}, 2000);
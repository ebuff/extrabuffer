//Notification Messages of a User...
function msg(){
var msg_data=function () {
    var temp;
$.ajax({
        async: false,
        global: false,
        dataType: 'html',
        type: "POST",
    url : "http://www.extrabuffer.com/msg.php",
    success: function(data, textStatus, jqXHR)
    {
        temp=data;
    }
});
return temp;
}();

var msg_display=function () {
    var tmp = null;
$.ajax({
        async: false,
        type: "POST",
        global: false,
        dataType: 'html',
    url : "http://www.extrabuffer.com/notification.php?login_message=1",
    success: function(data, textStatus, jqXHR)
    {
       
        tmp = data;
    }
});
return tmp;
}();

//localStorage.setItem(msg_display,"");

if(msg_data!=''&&msg_data!='undefined'&&(msg_data.length)!=0&&msg_data!='null'){
var str = msg_data.replace("undefined", "");
str=msg_data.replace("null", "");
chrome.notifications.create( {
              type: "basic",
              title: "Message Alert",
              message: "New Message for You..",
              iconUrl: "notification.png"
             });  
localStorage.setItem(msg_display,str+localStorage.getItem(msg_display));
}
if(localStorage.getItem(msg_display)!='undefined'&&msg_display!=''){
document.getElementById('msg').innerHTML=localStorage.getItem(msg_display);
}

else   
 document.getElementById('msg').innerHTML="No Messages To show Please Login For Notifications..";   

recall();
}


function recall(){
 var myVar = setInterval(msg, 3000);
}
 recall();


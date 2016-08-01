

//chrome.browserAction.setBadgeText({text: ""});
//testing code....
function msgs()
 {
    var a=0;
    chrome.browserAction.setBadgeText({text: a});
    chrome.notifications.create( {
              type: "basic",
              title: "Message Alert",
              message: "New Message for You..",
              iconUrl: "notification.png"
             });  
    a++;
    recall();
 }

 //Working code Starts Here...

$.ajax({
    url : "http://www.extrabuffer.com/check.php",
    type: "POST",
    success: function(data, textStatus, jqXHR)
    {
        jQuery('#error_msg').html(data);
    }
});

//notify when user's loggedin
var name=function () {
    var tmp = null;
$.ajax({
        async: false,
        type: "POST",
        global: false,
        dataType: 'html',
    url : "http://www.extrabuffer.com/notification.php?login_notify=1",
    success: function(data, textStatus, jqXHR)
    {
       
        tmp = data;
    }
});
return tmp;
}();

//message purpose

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

var len=msg_display.length;

if(len==0){
var login = document.getElementById("login");
var aTag = document.createElement('a');
aTag.setAttribute('href',"#");
aTag.innerHTML = "Signup";
aTag.id='btn_signup';
login.appendChild(aTag);
login.appendChild(document.createElement("br"));

//Login message
var msg_login=document.createElement("h3");
msg_login.innerHTML="Login::>";
login.appendChild(msg_login);


//Login Form
var form_login = document.createElement("form");
form_login.setAttribute('method',"post");
form_login.setAttribute('action',"http://www.extrabuffer.com/setcook.php");
//form_login.setAttribute('onsubmit',"setcook(this)");
var i = document.createElement("input");
i.type = "text";
i.name = "login_email";
i.id = "login_email";
i.placeholder="Email";

var c = document.createElement("input");
c.type = "password";
c.id = "pass";
c.name = "pass";
c.placeholder="password";

var s = document.createElement("input");
s.type = "submit";
s.value = "Submit";

form_login.appendChild(i);
form_login.appendChild(c);
form_login.appendChild(s);

login.appendChild(form_login);

}

else{

var welcome=document.createElement("p");
welcome.innerHTML="Hello,"+msg_display;

var logout = document.getElementById("login");
var aTag = document.createElement('a');
aTag.setAttribute('href',"#");
aTag.id="logout_url";
aTag.innerHTML = "Logout";
logout.appendChild(welcome);
logout.appendChild(aTag);


}




//Calls the Notify function..

if(name!='null'&&name!='')
   {
    notify(0);
   }


function notify(flag)
 { 
          if(flag==0){       
              chrome.notifications.create( {
              type: "basic",
              title: "Welcome",
              message: "Welcome "+name,
              iconUrl: "notification.png"
             });
            }
            if(flag==1)
                {
                  chrome.notifications.create( {
              type: "basic",
              title: "Message Alert",
              message: "New Message for You..",
              iconUrl: "notification.png"
             });  
                }
 }


$("#logout_url").click(function(){
$.ajax({
        type: "POST",
        url : "http://www.extrabuffer.com/logout.php",
       success: function(data, textStatus, jqXHR)
        {  
          window.location="popup.html";
          /*document.getElementById("error_msg").innerHTML="Logged Out Successfullt";
         $("#error_msg").show().delay(5000).fadeOut();*/

        }
});
});

$("#msg_submit").click(function(){
var a=document.getElementById("email").value;
var b=document.getElementById("url").value;
var data={email:a,url:b};
$.ajax({
        type: "POST",
        url : "http://www.extrabuffer.com/msg.php",
        data: data,
       success: function(data, textStatus, jqXHR)
        {  
          document.getElementById("error_msg").innerHTML="Message Send Successfully";
          $("#error_msg").css("color","green");
         $("#error_msg").show().delay(5000).fadeOut();

        }
});
});
var flag_sign=0;
$("#btn_signup").click(function(){
if(flag_sign==0){
  flag_sign++;

  var a=document.createElement("input");
  a.placeholder="Enter the Email";
  a.type="email";
  a.id="sign_id";

  var b=document.createElement("input");
  b.placeholder="Enter the Password";
  b.id="sign_pass";
  b.type="password";

  var d=document.createElement("br");
  d.id="br";
  
  var e=document.createElement("input");
  e.id="submit_sign_form";
  e.type="submit";

  var c=document.getElementById("signup_form");
  c.appendChild(d);
  c.appendChild(a);
  c.appendChild(b);
  c.appendChild(e);

}
else{
  var c=document.getElementById("signup_form");
  c.removeChild(document.getElementById("sign_pass"));
  c.removeChild(document.getElementById("sign_id"));
  c.removeChild(document.getElementById("submit_sign_form"));
  c.removeChild(document.getElementById("br"));
  flag_sign=0;
}
});

$("#submit_sign_form").click(function(){
alert("asd");
var a=document.getElementById("sign_id").value;
var b=document.getElementById("sign_pass").value;
var data={sin_email:a,sin_pass:b};
$.ajax({
        type: "POST",
        url : "http://www.extrabuffer.com/signup.php",
        data: data,
       success: function(datas, textStatus, jqXHR)
        {  
        document.getElementById("error_msg").innerHTML=datas;
        $("#error_msg").css("color","green");
        $("#error_msg").show().delay(5000).fadeOut();

        }
});
});

/*var usr_name=function () {
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
}();*/
//localStorage.setItem(usr_name+"my_group","");
var usr_name="garhia";
if(localStorage.getItem(usr_name+"my_group")!=null&&(localStorage.getItem(usr_name+"my_group").length)!=0){
 var groups = JSON.parse(localStorage[usr_name+"my_group"]);
 var i;
 var main=document.getElementById("mygroup");
 for(i=0;i<groups.length;i++){
    var link=document.createElement("a");
    link.id="group"+(i+1);
    link.setAttribute("href","#");
    link.innerHTML=groups[i];
    var br=document.createElement("br");
    main.appendChild(link);
    main.appendChild(br);
 }
}
else{
document.getElementById("mygroup").innerHTML="No Group To Show";
}

$("#creategroup").click(function(){
/*
var usr_name=function () {
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
*/	

var g_name=new Array();
g_name[0]=document.getElementById('g_name').value;
if(localStorage.getItem(usr_name+"my_group")!=null&&(localStorage.getItem(usr_name+"my_group").length)!=0){
var mgroups = JSON.parse(localStorage[usr_name+"my_group"]);
mgroups = mgroups.concat(g_name[0]);
localStorage[usr_name+"my_group"] = JSON.stringify(mgroups);
}
else{
localStorage[usr_name+"my_group"] = JSON.stringify(g_name[0]);
}
window.location="group.html";
});


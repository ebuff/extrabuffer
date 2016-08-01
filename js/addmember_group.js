//localStorage.setItem("abhishek","");
$("#group_person").hide();
var group_name,dum;
$("a").click(function(){
var id = $(this).attr('id');
dum=document.getElementById(id).innerHTML;
if(dum=='Delete'){
	//alert(dum);
	var groups_del = JSON.parse(localStorage[group_name]);
	var r_id=new Array();
	r_id=id;
	alert(groups_del[r_id[13]]);
}
	else{
		group_name=dum;
	}
$("#group_info").hide();
$("#basic_info").hide();
$("#group_person").show();
if(localStorage.getItem(group_name)!=null&&(localStorage.getItem(group_name).length)!=0){
 var groups = JSON.parse(localStorage[group_name]);
 var i;
 var main=document.getElementById("members");
 for(i=0;i<groups.length;i++){
    var link=document.createElement("h4");
    link.id="member"+(i+1);
    link.innerHTML=groups[i];

    var links=document.createElement("a");
    links.id="member_delete"+(i+1);
    links.setAttribute("href","#");
    links.innerHTML="Delete";
    main.appendChild(link);
    //var brs=document.createTextNode("\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0");
    //main.appendChild(brs);
    main.appendChild(links);
    main.appendChild(br);
 }
}
else{
document.getElementById("members").innerHTML="No Member in the  "+group_name;
}
});

$("#back_group").click(function(){
$("#group_person").hide();
$("#group_info").show();
$("#basic_info").show();
});
//script for adding members to the group..

$("#add_member").click(function(){
var new_member=new Array();
new_member[0]=document.getElementById("add_group_member").value;
if(localStorage.getItem(group_name)!=null&&(localStorage.getItem(group_name).length)!=0){
var members = JSON.parse(localStorage[group_name]);
members = members.concat(new_member[0]);
localStorage[group_name] = JSON.stringify(members);
}
else{
localStorage[group_name] = JSON.stringify(new_member);
}
window.location.reload();
});
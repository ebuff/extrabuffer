
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

$("#main_im_coll").hide();

$("#url_link").click(function(){
$("#url_form").show();
$("#main_im_coll").hide();
});

$("#images_link").click(function(){
$("#url_form").hide();
$("#main_im_coll").show();
});

$("#sub_button").click(function(){
var selected = [];
$('#image_coll input:checked').each(function() {
    selected.push($(this).attr('id'));
});
var len=selected.length;
var i;
for(i=0;i<len;i++){
	alert(document.getElementById(selected[i]).src);
}
});

document.getElementById("sending_msg").value="abhi kuch nahi hai bhai";
if(document.getElementById("url").value=' '){
	chrome.tabs.getSelected(null, function(tab) {
        document.getElementById("url").value=tab.url;
      });
}
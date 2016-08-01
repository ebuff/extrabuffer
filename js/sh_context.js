chrome.runtime.onInstalled.addListener(function() {
  var context = "all";
  var title = "sharely";
  var id = chrome.contextMenus.create({"title": title,
                                         "contexts":[context],
                                         "id": "sh_sharely"}); 

  var id1 = chrome.contextMenus.create({"title": "facebook",
                                         "contexts":[context],
                                         "id": "sh_facebook"}); 

});

// add click event
chrome.contextMenus.onClicked.addListener(onClickHandler);
function onClickHandler(info, tab) {
  var sText = info.menuItemId;
  
  if(sText=="sh_sharely"){  
    //docuemnt.getElementById("url").value=encodeURIComponent(text);  
    var text=info.selectionText;
    
    window.open("popup.html", "extension_popup", "width=400,height=450,status=no,scrollbars=yes,resizable=no");
    document.getElementById("url").value="hello";
    }
   if(sText=="sh_facebook"){
   window.open("https://www.facebook.com", '_blank'); 
   }
};


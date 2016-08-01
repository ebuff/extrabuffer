

chrome.runtime.onMessage.addListener(function(request, sender) {
  if (request.action == "getSource") {
    var a=request.source;
    var app_main=document.getElementById("image_coll");
    app_main.innerHTML=a; 
  }
});

function onWindowLoad() {

  var message = document.querySelector('#image_coll');

  chrome.tabs.executeScript(null, {
    file: "js/getPageSource.js"
  }, function() {
    // If you try and inject into an extensions page or the webstore/NTP you'll get an error
    if (chrome.runtime.lastError) {
      message.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
    }
  });

}

window.onload = onWindowLoad;



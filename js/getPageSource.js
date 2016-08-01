function DOMtoString(document_root) {
    var html = '',
        node = document_root.firstChild;
    while (node) {
        switch (node.nodeType) {
        case Node.ELEMENT_NODE:
            html += node.outerHTML;
            break;
        case Node.TEXT_NODE:
            html += node.nodeValue;
            break;
        case Node.CDATA_SECTION_NODE:
            html += '<![CDATA[' + node.nodeValue + ']]>';
            break;
        case Node.COMMENT_NODE:
            html += '<!--' + node.nodeValue + '-->';
            break;
        case Node.DOCUMENT_TYPE_NODE:
            // (X)HTML documents are identified by public identifiers
            html += "<!DOCTYPE " + node.name + (node.publicId ? ' PUBLIC "' + node.publicId + '"' : '') + (!node.publicId && node.systemId ? ' SYSTEM' : '') + (node.systemId ? ' "' + node.systemId + '"' : '') + '>\n';
            break;
        }
        node = node.nextSibling;
    }
    var select=document.getElementsByTagName('img');
    var main=document.createElement("div");

    var bre=document.createElement("br");
    main.appendChild(bre);
    
    var i;
    for(i=0;i<select.length;i++){
     var img=document.createElement("img");
     img.src=select[i].src;
     img.id="pic"+(i+1);
     img.width="150";
     img.height="100";
     var ch=document.createElement("input");
     ch.type="checkbox";
     ch.id="pic"+(i+1);
     //ch.setattribute("onclick","hello()";
     main.appendChild(ch);
     main.appendChild(img);
     var br=document.createElement("br");
     main.appendChild(br);
    }
    return main.innerHTML;
}

chrome.runtime.sendMessage({
    action: "getSource",
    source: DOMtoString(document)
});
 
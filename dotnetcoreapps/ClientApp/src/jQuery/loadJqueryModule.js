import $ from 'jquery';


export default function register() {   
    //alert("custom module");
    $("#module1").load("imageAnnonate.html");
    //dynamicallyLoadScript("./jQuery/annotorious.min.js");
    console.log($("#module1").length);
}

function dynamicallyLoadScript(url) {
    var script = document.createElement("script"); //Make a script DOM node
    script.src = url; //Set it's src to the provided URL
    document.head.appendChild(script); //Add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}
console.log("app.js execution started");
const origWidth  = 500;
const origHeight = 400;
document.getElementById('amoeba').setAttribute("width", origWidth);
document.getElementById('amoeba').setAttribute("height", origHeight);

function scaleFunction(){
    console.log("scaleFunction started");
    
    console.log("orig width="+origWidth+", & height="+origHeight);

    let scaleFactor = window.prompt("Enter how much to scale", 2);

    newWidth = scaleFactor*origWidth;
    newHeight = scaleFactor*origHeight;
    console.log("new width="+newWidth+", & height="+newHeight);

    document.getElementById('amoeba').setAttribute("width", newWidth);
    document.getElementById('amoeba').setAttribute("height", newHeight);
}//scaleFunction
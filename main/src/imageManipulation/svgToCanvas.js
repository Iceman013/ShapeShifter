export function convertSVGToUrl(element) {
    var svgString = new XMLSerializer().serializeToString(element);
    console.log(document.querySelector('svg'));
    console.log(element);
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var DOMURL = self.URL || self.webkitURL || self;
    var img = new Image();
    var svg = new Blob([svgString], {type: "image/svg+xml;charset=utf-8"});
    var url = DOMURL.createObjectURL(svg);
    let parent = document.getElementById("png-container");
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    img.onload = function() {
        ctx.drawImage(img, 0, 0);
        var png = canvas.toDataURL("image/png");
        document.querySelector('#png-container').innerHTML = '<img src="'+png+'"/>';
        DOMURL.revokeObjectURL(png);
    };
    img.src = url;
    img.id = "chosenOne";
    return url;
}
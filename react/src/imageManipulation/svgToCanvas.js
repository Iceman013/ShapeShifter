export function convertSVGToUrl(element) {
    let svgString = new XMLSerializer().serializeToString(element);
    // console.log(document.querySelector('svg'));
    // console.log(element);
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let DOMURL = self.URL || self.webkitURL || self;
    let img = new Image();
    let svg = new Blob([svgString], {type: "image/svg+xml;charset=utf-8"});
    let url = DOMURL.createObjectURL(svg);
    let parent = document.getElementById("png-container");
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    img.onload = function() {
        ctx.drawImage(img, 0, 0);
        let png = canvas.toDataURL("image/png");
        document.querySelector('#png-container').innerHTML = '<img src="'+png+'"/>';
        DOMURL.revokeObjectURL(png);
    };
    img.src = url;
    img.id = "chosenOne";
    return url;
}
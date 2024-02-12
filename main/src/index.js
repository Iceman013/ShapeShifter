import addOnUISdk from "https://new.express.adobe.com/static/add-on-sdk/sdk.js";
import { addImageFromURL } from "./imageManipulation/addImage.js";
import { convertSVGToUrl } from "./imageManipulation/svgToCanvas.js";

import { shapeList } from "./shapes/shapeList.js";
import { Shape } from "./shapes/shape.js";

function addShapesToPicker() {
    let chosenShape = null;
    for (let i = 0; i < shapeList.length; i++) {
        let base = document.createElement("div");
        base.classList.add("shapeElement");
        document.getElementById("shapePicker").appendChild(base);
        let size = base.clientWidth;
        let added = shapeList[i].draw(size);
        base.appendChild(added);
        const you = shapeList[i];
        added.addEventListener("click", function() {
            document.getElementById("shapeSelector").style.display = "none";
            document.getElementById("shapeEditor").style.display = "block";
            chosenShape = you;
            you.editMode();
        });
    }

    // Controls for moving verticies
    document.getElementById("shapeViewer").addEventListener("mousedown", function(event) {
        chosenShape.mouseDown(event);
    });
    document.getElementById("shapeViewer").addEventListener("mouseup", function(event) {
        chosenShape.mouseUp(event);
    });
    document.getElementById("shapeViewer").addEventListener("mousemove", function(event) {
        chosenShape.mouseMove(event);
    });

    document.addEventListener("mouseup", function(event) {
        chosenShape.mouseUp(event);
    });
}


addOnUISdk.ready.then(function() {
    addShapesToPicker();

    const addShape = document.getElementById("addShape");
    addShape.addEventListener("click", function() {
        convertSVGToUrl(document.getElementById("hiddenReal"));
        setTimeout(function() {
            let url = document.querySelector("img").src;
            addImageFromURL(url)
        }, 100);
    });
});
import addOnUISdk from "https://new.express.adobe.com/static/add-on-sdk/sdk.js";
import { addImageFromURL } from "./imageManipulation/addImage.js";
import { convertSVGToUrl } from "./imageManipulation/svgToCanvas.js";

import { shapeList } from "./shapes/shapeList.js";
import { Shape } from "./shapes/shape.js";

function addShapesToPicker() {
    for (let i = 0; i < shapeList.length; i++) {
        let base = document.createElement("div");
        base.classList.add("shapeElement");
        document.getElementById("shapePicker").appendChild(base);
        let size = 80;
        let added = shapeList[i].draw(size);
        base.appendChild(added);
        const you = shapeList[i];
        added.addEventListener("click", function() {
            you.editMode();
        });
    }
}

addOnUISdk.ready.then(function() {
    addShapesToPicker();

    const addShape = document.getElementById("addShape");
    addShape.addEventListener("click", function() {
        addShape.innerHTML = "Clicked";
        convertSVGToUrl(document.getElementById("custom"));
        setTimeout(function() {
            let url = document.querySelector("img").src;
            addImageFromURL(url)
        }, 100);
    });
});
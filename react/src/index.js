/* Theme and typography imports */
import '@spectrum-web-components/styles/typography.css';
import '@spectrum-web-components/theme/express/theme-light.js';
import '@spectrum-web-components/theme/express/scale-medium.js';
import '@spectrum-web-components/theme/sp-theme.js';

import "@spectrum-web-components/button/sp-button.js";
import "@spectrum-web-components/button-group/sp-button-group.js";
import "@spectrum-web-components/field-label/sp-field-label.js";
import '@spectrum-web-components/menu/sp-menu.js';
import '@spectrum-web-components/menu/sp-menu-item.js';
import "@spectrum-web-components/number-field/sp-number-field.js";
import '@spectrum-web-components/picker/sp-picker.js';
import "@spectrum-web-components/slider/sp-slider.js";
import "@spectrum-web-components/swatch/sp-swatch.js";
import '@spectrum-web-components/switch/sp-switch.js';

import addOnUISdk from "https://new.express.adobe.com/static/add-on-sdk/sdk.js";
import { addImageFromURL } from "./imageManipulation/addImage.js";
import { convertSVGToUrl } from "./imageManipulation/svgToCanvas.js";

import { shapeList } from "./shapes/shapeList.js";
import { Shape } from "./shapes/shape.js";

import "./style/style.css";
import "./style/controls.css";

// import cornerArcs from "./images/cornerArcs.png";
// import cornerBevel from "./images/cornerBevel.png";
// import cornerRound from "./images/cornerRound.png";

addOnUISdk.app.on("themechange", (data) => { 
    applyTheme(data.theme); 
});


function addShapesToPicker() {
    let chosenShape = null;
    for (let i = 0; i < shapeList.length; i++) {
        let base = document.createElement("div");
        base.classList.add("shapeElement");
        document.getElementById("shapePicker").appendChild(base);
        let size = base.clientWidth - 8;
        base.style.height = base.clientWidth + "px";
        let added = shapeList[i].draw(size);

        let tooltip = document.createElement("span");
        tooltip.innerText = shapeList[i].name;
        tooltip.classList.add("tooltip");
        base.appendChild(tooltip);
        tooltip.style.top = -1*tooltip.clientHeight + "px";
        
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
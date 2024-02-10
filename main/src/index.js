import addOnUISdk from "https://new.express.adobe.com/static/add-on-sdk/sdk.js";
import { addImageFromURL } from "./addImage.js";
import { convertSVGToUrl } from "./svgToCanvas.js";

addOnUISdk.ready.then(function() {

    const clickMeButton = document.getElementById("clickMe");
    clickMeButton.addEventListener("click", function() {
        clickMeButton.innerHTML = "Clicked";
        convertSVGToUrl();
        setTimeout(function() {
            let url = document.querySelector("img").src;
            addImageFromURL(url)
        }, 100);
    });
});
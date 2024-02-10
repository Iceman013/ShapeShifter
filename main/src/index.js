import addOnUISdk from "https://new.express.adobe.com/static/add-on-sdk/sdk.js";
import { addImageFromURL } from "./addImage.js";
import { convertSVGToUrl } from "./svgToCanvas.js";

addOnUISdk.ready.then(function() {

    const clickMeButton = document.getElementById("clickMe");
    clickMeButton.innerHTML = "Cow";
    clickMeButton.addEventListener("click", function() {
        clickMeButton.innerHTML = "Clicked";
        // addImageFromURL("defaultImage.jpg");
        // convertSVGToUrl();
        convertSVGToUrl();
        setTimeout(function() {
            let url = document.querySelector("img").src;
            addImageFromURL(url)
        }, 200);
        // addImageFromURL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAA8dJREFUeF7tmU2rTVEAhp9LQqYGzBEZIEUZ+M6ImKBM/AdiRklKUX6CDGRgSOkm+YiRzwFFTIyYSUmicFbtXauT65z3dHvv3t13T27Xefd513qes9e5a5kiV6cITHVqNBkMEdKxD8G4Qg4Cp4H1zfhfAxeAOx2bT++HM46Q/cCtGWa6F7jXewodmsA4Qp4A2wZPx03gLLCgeToOAY+AHR2aT++H0gopPx8CS4EDwGdgBXAJOAwsBtYC75oZl6WrLFs/gHPAxebfyz23gW/Azt7TmYMJ1EJeABuBD8B24ApwtBnTXWDf0PjuV9BPAjeaJ2YVUN5r8xzMp/eV9ZK1sgJaT6wsSWVp+tdVXnsw9ML7Zhn71Hs6czCB4e+QIqUAXlONZdT3zJ8qW5a0XUBkTCjzf7Bb0OMKGZWbcIjz67YI6ZjvYSH1F3U71FGf/HrJKvc8BbZ0bJ69GU6EdExVlqwI6RiBjg1n+Alpd9r1pq7s0n/OMO7yWtmtt9ezaqffsan2YzjjbAzLweJx4MvQlJYDV4Fy+Fhf7U4/e5EJPgP10clLYAPQ7rRXA9ODc6olzUbvCPC46Sibv+tA2Uh+B/YAH6ud/itg0wTjmfe31ELKn6vLBlB3Vzvtcoh4rTmX+g1cBhYCJwaHiuXe583T86YhWQSVP52/Dv6vZOu8pzsBgFF7jPKW5bj91EDE+cGx+6Km4xdwpjkNLqJyzRKBcYS0VeuaZar8fgx4O0tjyNtUBBQhAWcgECEGyEpFhCi0DNkIMUBWKiJEoWXIRogBslIRIQotQzZCDJCVighRaBmyEWKArFREiELLkI0QA2SlIkIUWoZshBggKxURotAyZCPEAFmpiBCFliEbIQbISkWEKLQM2QgxQFYqIkShZchGiAGyUhEhCi1DNkIMkJWKCFFoGbIRYoCsVESIQsuQjRADZKUiQhRahmyEGCArFRGi0DJkI8QAWamIEIWWIRshBshKRYQotAzZCDFAVioiRKFlyEaIAbJSESEKLUM2QgyQlYoIUWgZshFigKxURIhCy5CNEANkpSJCFFqGbIQYICsVEaLQMmQjxABZqYgQhZYhGyEGyEpFhCi0DNkIMUBWKiJEoWXIRogBslIRIQotQzZCDJCVighRaBmyEWKArFREiELLkI0QA2SlIkIUWoZshBggKxURotAyZCPEAFmpiBCFliEbIQbISkWEKLQM2QgxQFYqIkShZchGiAGyUhEhCi1DNkIMkJWKCFFoGbIRYoCsVESIQsuQjRADZKUiQhRahmyEGCArFX8BK91VZfSMZE4AAAAASUVORK5CYII=")
    });
});
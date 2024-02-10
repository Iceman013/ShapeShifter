import addOnUISdk from "https://new.express.adobe.com/static/add-on-sdk/sdk.js";

// Wait for the SDK to be ready
await addOnUISdk.ready;

// Reference to the active document
const { document } = addOnUISdk.app;

// Add image via url to the current page
export async function addImageFromURL(url) {
    try {
        const blob = await fetch(url).then((response) => response.blob());
        await document.addImage(blob);
    } catch (error) {
        console.log("Failed to add the image to the page.");
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const openApp = document.getElementById("openApp");

    // Extract shapeId from URL
    const params = new URLSearchParams(window.location.search);
    const shapeId = params.get("id");

    if (shapeId) {
        openApp.href = `propertymarket://share/${shapeId}`;
    } else {
        openApp.href = "https://play.google.com/store/apps/details?id=com.ascaban.propertyconnect";
    }
});

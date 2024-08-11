document.addEventListener("DOMContentLoaded", () => {
    var btn = document.getElementById('submit-btn');
    
    // Reset the button state if the page is reloaded or user navigates back
    btn.innerText = "Start"; // Reset text
    btn.classList.remove('submitted'); // Remove the 'submitted' class
    btn.removeAttribute("disabled"); // Remove the 'disabled' attribute

    window.addEventListener('pageshow', function(event) {
        if (event.persisted || performance.getEntriesByType("navigation")[0].type === "back_forward") {
            btn.innerText = "Submit"; // Reset text
            btn.classList.remove('submitted'); // Remove the 'submitted' class
            btn.removeAttribute("disabled"); // Remove the 'disabled' attribute
        }
    });

    document.getElementById('truck-form').addEventListener('submit', function(event) {
        event.preventDefault();
        var btn = document.getElementById('submit-btn')
        btn.innerText = "Please wait..."
        btn.classList = `${btn.classList} submitted`
        btn.setAttribute("disabled", "true")
        
        var name = document.getElementById('mf-input-text-18b37ef').value;
        var email = document.getElementById('mf-input-email-a1c9c66').value;
        var truckBrand = document.getElementById('mf-input-select-3f57205').value;
        
        var eid = localStorage.getItem("eid") || "11"
        
        var phone = "+18032579170"
        var message = `Hi there! My name is ${name}, and my email address is ${email}. I'm thrilled to take the first step toward transforming my life by starting my own trucking business with 2 big rigs. My preferred brand is ${truckBrand}. Let's make this dream a reality!\n\nApplication Entry ID: ${eid}`;
        var whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        
        window.location.href = whatsappUrl;
    });
})
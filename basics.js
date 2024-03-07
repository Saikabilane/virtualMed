function rgbToHex(rgb) {
    // Split the rgb() string into individual color values
    let colors = rgb.match(/\d+/g);
    // Convert each color value to hexadecimal
    let hex = "#";
    colors.forEach(color => {
        hex += ("0" + parseInt(color).toString(16)).slice(-2); // Convert to hexadecimal and pad with zeros if necessary
    });
    return hex;
}

function colorChange(button) {
    let computedStyle = window.getComputedStyle(button);
    let backgroundColor = computedStyle.backgroundColor;
    let hexColor = rgbToHex(backgroundColor);
    if (hexColor === "#e8dab2") {
        let login = document.getElementById('butt1');
        let signup = document.getElementById('butt2');
        login.classList.toggle('login-active');
        signup.classList.toggle('signup-active');
    }   
}
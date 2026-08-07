function changeColour() {
    var colour = document.getElementById("textColourValue").value;
    document.getElementById("pageBody").style.color = colour;
    var colour = document.getElementById("colour").value;
    document.getElementById("pageBody").style.backgroundColor = colour;
    if (colour === '') {
        document.getElementById("chosenColour").textContent = 'No colour chosen';
    }
    else {
        document.getElementById("chosenColour").textContent = colour;
    }
    var lowerColour = colour.toLowerCase();
    if (lowerColour === 'red' || lowerColour === '#ff0000') {
        console.log("The user chose the colour red");
    }
}

function resetColour() {
    var colour = ''; // Reset to default colour
    document.getElementById("pageBody").style.backgroundColor = 'white'; // Set background to default
    document.getElementById("pageBody").style.color = 'black'; // Set text colour to default
    document.getElementById("chosenColour").textContent = colour;
    document.getElementById("colour").value = ''; // Clear the choose colourinput field
    document.getElementById("textColourValue").value = ''; // Clear the text colour input field
}
function updateOpacity() {
    var opacityValue = document.getElementById("opacity").value;                   // Get the current value of the range slider. Prende il valore attuale dello slider.
    var opacityDecimal = opacityValue / 100;                                       // Convert it to a decimal between 0 and 1. Lo converte in un decimale tra 0 e 1.
    if (opacityDecimal < 0.075) {                                                   // Check if the value has dropped below the minimum threshold. Controlla se il valore è sceso sotto la soglia minima.
        opacityDecimal = 0.075;                                                    // Lock it at the minimum so the page never fully disappears. Lo blocca al minimo così la pagina non sparisce mai del tutto.
    }
    document.getElementById("pageBody").style.opacity = opacityDecimal;            // Apply it as the opacity of the page body. Lo applica come opacità del corpo della pagina.
    updateDisplay();                                                                // Update the display of the current opacity value. Aggiorna la visualizzazione del valore attuale dell'opacità.
}

function changeColour() {
    var colour = document.getElementById("textColourValue").value;                 // Read the text colour chosen by the user. Legge il colore del testo scelto dall'utente.
    document.getElementById("pageBody").style.color = colour;                      // Apply it as the text colour of the page body. Lo applica come colore del testo del corpo della pagina.
    var colour = document.getElementById("colour").value;                          // Reuse the variable to read the background colour input. Riusa la variabile per leggere l'input del colore di sfondo.
    document.getElementById("pageBody").style.backgroundColor = colour;            // Apply it as the background colour of the page body. Lo applica come colore di sfondo del corpo della pagina.
    if (colour === '') {
        document.getElementById("chosenColour").textContent = 'No colour chosen';  // Show a placeholder message if the field is empty. Mostra un messaggio se il campo è vuoto.
    }
    else {
        document.getElementById("chosenColour").textContent = colour;              // Otherwise display the chosen colour as text. Altrimenti mostra il colore scelto come testo.
    }
    var lowerColour = colour.toLowerCase();                                        // Convert to lowercase so the comparison ignores case. Converte in minuscolo così il confronto ignora maiuscole/minuscole.
    if (lowerColour === 'red' || lowerColour === '#ff0000') {
        console.log("The user chose the colour red");                              // Log a message to the console if the colour is red. Scrive un messaggio in console se il colore è rosso.
    }
    updateDisplay();
}

function randomColour() {
    var hexColour = '#' + Math.floor(Math.random() * 16777215).toString(16);       // Build a random hex colour code. Costruisce un codice colore esadecimale casuale.
    document.getElementById("colour").value = hexColour;                           // Write the generated colour into the colour input field. Scrive il colore generato nel campo di input del colore.
    changeColour();                                                                // Call changeColour to apply background/text/display. Richiama changeColour per applicare sfondo/testo/visualizzazione.
}

function applyPreset(presetColour) {
    document.getElementById("colour").value = presetColour;                        // Write the preset colour into the colour input. Scrive il colore preimpostato nell'input del colore.
    changeColour();                                                                // Call changeColour to apply it like a manual choice. Richiama changeColour per applicarlo come una scelta manuale.
}

function resetColour() {
    var colour = '';                                                               // An empty string represents "no colour chosen". Una stringa vuota rappresenta "nessun colore scelto".
    document.getElementById("pageBody").style.backgroundColor = 'white';           // Reset the background colour to white. Riporta il colore di sfondo a bianco.
    document.getElementById("pageBody").style.color = 'black';                     // Reset the text colour to black. Riporta il colore del testo a nero.
    document.getElementById("chosenColour").textContent = colour;                  // Clear the displayed "chosen colour" text. Svuota il testo visualizzato del "colore scelto".
    document.getElementById("colour").value = '';                                  // Clear the background colour input field. Svuota il campo di input del colore di sfondo.
    document.getElementById("textColourValue").value = '';                         // Clear the text colour input field. Svuota il campo di input del colore del testo.
    document.getElementById("opacity").value = 100;                                // Reset the opacity slider back to 100. Riporta lo slider dell'opacità a 100.
    document.getElementById("pageBody").style.opacity = '1';                       // Reset the actual page opacity back to fully visible. Riporta l'opacità reale della pagina a completamente visibile.
    updateDisplay();                                                                // Update the display of current settings. Aggiorna la visualizzazione delle impostazioni attuali.
}

function updateDisplay() {
    document.getElementById("currentColour").textContent = document.getElementById("colour").value; // Display it in the "chosen colour" span. Lo visualizza nello span "colore scelto".
    document.getElementById("currentTextColour").textContent = document.getElementById("textColourValue").value; // Display it in the "chosen text colour" span. Lo visualizza nello span "colore testo scelto".
    document.getElementById("currentOpacity").textContent = document.getElementById("opacity").value; // Apply it as the page opacity. Lo applica come opacità della pagina.
}
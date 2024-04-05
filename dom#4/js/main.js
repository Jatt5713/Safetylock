//woord een palindwroom
//lepel => lepel wel palidroom
//appel => leppa geen palindroom
//schoen => neohcs
// mug => gum
//poep => peop
//legovogel => legovogel
//kok => kok
//meetsysteem => meetsysteem
var txt = document.getElementById("js--text");
txt.onkeyup = function(event){
    if(event.key === "Enter"){

        //moeilijke
        //lepel 
        //[ l   e   p   e   l]
        //  ^               ^ 
        //     ^        ^
        //          ^
        //          ^
        //[ a  b  b  a]
        //  ^        ^
        //    ^   ^  
        //  Als pointers elkaar kruisen of als ze op dezelfde plek zitten === palindroom



        //makkelijke
        // appel 
        // [l e  p p a]
        // leppa
        //appel === leppa
        var word = Array.from(txt.value);
        var reversed = [];

        for(var i = word.length - 1; i >= 0; i--){
            reversed.push(word[i]);
        }

        word = word.join("");
        reversed = reversed.join("");


        if(word === reversed) {
            document.getElementById("js--dialog").innerText = word + " is omgedraaid " + reversed + " dus dit is een palindroom.";

        }
        else{
            document.getElementById("js--dialog").innerText = word + " is omgedraaid " + reversed + " dus dit is geen palindroom.";

        }
        
        document.getElementById("js--dialog").style.display = "flex";
    }
}

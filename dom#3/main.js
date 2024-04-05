var text = document.getElementById("js--text");


// Abc -> aBC
text.onkeyup = function(event){
    if(event.key === "Enter"){
        var original = Array.from(event.target.value);
        //j e r o e n
        var omdraaien = [];
        for(var i = 0; i < original.length; i++){
            if(original[i] === original[i].toUpperCase() ){
                //het is een hoofdletter
                omdraaien.push(original[i].toLowerCase())
            }
            else{
                console.log("kleine letter");
                omdraaien.push(original[i].toUpperCase());
            }
        }
        omdraaien = omdraaien.join("");
        var alert = document.getElementById("js--alert");
        alert.style.display = "block";
        alert.innerText = omdraaien;

        //in bar veranderen
        event.target.value = omdraaien;
    }
}
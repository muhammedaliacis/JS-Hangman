/* < div class = "letter" > a < /div> <
    div class = "letter" > a < /div> <
    div class = "letter" > a < /div> 
	
            <p>a, b, c, d</p>

	*/

const word_el = document.getElementById("word");
const wrongLetter = document.getElementsByClassName("wrong-letter");
const wrong = document.getElementById("wrong");

const item = document.getElementsByClassName("item");


function getRandomWord()  {
    const words = ["javascript", "python", "java", "html", "css", "c", "react", "angular", "vue", "computer"];

    return words[Math.floor(Math.random() * words.length)];
}

const word = getRandomWord();
getWord();


function getWord() {
    let a = 0;
    while (a < word.length) {
        const letter = document.createElement("div");
        letter.className = "letter";
        letter.textContent = "";
        word_el.appendChild(letter);
        a++;
    }

}

let c = 0;
let d = 0;
window.addEventListener("keypress", function(e){
    if (e.keyCode >= 97 && e.keyCode <= 122){
        const harf = e.key;
        i = 0;
        if (word.includes(harf)){
            while (word[i])
            {
                if (word[i] === harf){
                    displayWord(word[i], i, d);
                }
                i++;
            }
            d++;
        }
        else {
            displayWrong(harf, c);
            c++;
            if (c === 6){
                c = 0;
            }
        }
    }
})

function displayWord(word, i, d){
    const letter = document.querySelectorAll(".letter");
    letter[i].textContent = word;
    if (d === letter.length - 1){
        showInfos("Tebrikler, kazandınız.");
    }
    
}

function displayWrong(harf, i){
    wrong.textContent += `${harf}, `;

    item[i].style.display = "block";
    if (i === 5){
        i = 0;
        showInfos("Maalesef kaybettiniz.")
    }

    
    

}


			
function showInfos(message) {
    const messageBox = document.getElementById("popup-container");

    messageBox.setAttribute("style", "display: flex;");
    document.getElementById("success message").innerHTML = message;


    const tryy = document.getElementById("play-again");
    tryy.addEventListener("click", function(e) {
        messageBox.setAttribute("style", "display: none;");
        let i = 0;
        while (i < 6){
            item[i].style.display = "none";
            i++;
        }
        i = 0;
        document.getElementById("wrong").textContent = "";
        word_el.innerHTML = "";
        window.location.reload();

    })
}
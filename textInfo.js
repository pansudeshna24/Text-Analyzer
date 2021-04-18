const textareaEl = document.querySelector("#text");
let text = null;

let data = {
    words: 0,
    sentences: 0,
    upercase: 0,
    lowercase: 0,
    spaces: 0,
    digits: 0,
    vowels: 0,
    consonants: 0,
};


const fl = (item) => (item == null ? 0 : item.length);


const setText = () => {
    text = textareaEl.value;

    if (text != null) {
        data.sentences = fl(text.match(/\056/gi));
        data.words = fl(text.match(/[a-zA-Z]+/gi));
        data.spaces = fl(text.match(/\s/g));
        data.upercase = fl(text.match(/[A-Z]/g));
        data.lowercase = fl(text.match(/[a-z]/g));
        data.digits = fl(text.match(/\d/g));
        data.vowels = fl(text.match(/[aeiou]/gi));
        data.consonants = fl(text.match(/[bcdfghjklmnpqrstvwxyz]/gi));
    }
   localStorage.setItem("data", JSON.stringify(data));
    window.location = "info.html";
};

const getData = () => {
    return JSON.parse(localStorage.getItem("data"));
};


const showData = () => {
    let data = getData();
    let htmlContent = "";

    for(item in data) {
        htmlContent+= `<div class="box">
        <h2>${data[item]}</h2>
        <p>${item}</p> 
        </div>`;
    }

    document.querySelector(".info-wrapper").innerHTML = htmlContent;
};

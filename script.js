const agirlikDom = document.querySelector(".container");
const buttonsDom = document.querySelector(".buttons");
const inputsDom = document.querySelector(".inputs");
const calculateDom = document.querySelector(".hesapla");
const sonuc = document.querySelector(".sonuc");
const resim = document.querySelector(".resim");


const data = [
    {
        id: 1,
        title: "Saç",
        inputs: ["Kalınlık", "Genişlik", "Uzunluk"],
        img: "https://www.karacametal.com/front/calc/plate.jpg"
    },
    {
        id: 2,
        title: "Boru",
        inputs: ["Dış Çap", "Duvar", "Uzunluk"],
        img: "https://www.karacametal.com/front/calc/tube.jpg"
    },
    {
        id: 3,
        title: "Kutu",
        inputs: ["Yükseklik", "Genişlik", "Kalınlık", "Uzunluk"],
        img: "https://www.karacametal.com/front/calc/rectangulartube.jpg"
    },
    {
        id: 4,
        title: "Kare",
        inputs: ["Genişlik", "Uzunluk"],
        img: "https://www.karacametal.com/front/calc/square.jpg"
    },
    {
        id: 5,
        title: "Köşebent",
        inputs: ["Kalınlık(t)", "Yükseklik(L1)", "Genişlik(L2)", "Uzunluk"],
        img: "https://www.karacametal.com/front/calc/kosebent.jpg"
    },
    {
        id: 6,
        title: "Lama",
        inputs: ["Kalınlık", "Genişlik", "Uzunluk"],
        img: "https://www.karacametal.com/front/calc/flat.jpg"
    },
    {
        id: 7,
        title: "Çubuk",
        inputs: ["Cap", "Uzunluk"],
        img: "https://www.karacametal.com/front/calc/round.jpg"
    }
];

let tabIndex = 0;
let inputsValues = [];
let allInputs;
let total = 0;

const createInputs = (id) => {
    inputsValues = [];
    total = 0;
    showSonuc(0)

    const input = data[id].inputs.map((input, index) => `<div>
    <label for=${index}>${input}</label>
    <input class="inputVal" id=${index} type="number" placeholder="Metre cinsinden" required>
    </div>`);


    resim.innerHTML = `<img src=${data[id].img}>`

    inputsDom.innerHTML = input.join("")

    allInputs = document.getElementsByClassName("inputVal")

    ui(id)
}

const ui = (id) => {
    const button = data.map(button => `<button id=${button.id} class="buttonType ${button.id == id + 1 ? "active" : ""}">${button.title}</button>`);
    buttonsDom.innerHTML = button.join("");

    const buttonType = document.querySelectorAll(".buttonType");

    buttonType.forEach((button) => {
        button.addEventListener("click", (event) => {
            tabIndex = event.target.id - 1
            createInputs(tabIndex)
        });
    })

}

agirlikDom.addEventListener("submit", event => {
    event.preventDefault();
    for (let i = 0; i < allInputs.length; i++) {
        inputsValues.push(allInputs[i].value)

    }
    console.log(inputsValues)
    total = inputsValues.reduce((acc, curr) => acc * curr)
    console.log(total)

    showSonuc(total)
    inputsValues = []
})

const showSonuc = (total) => {
    if (total > 0) sonuc.innerHTML = `Sonuç : ${total}`
    else {
        sonuc.innerHTML = ""
    }
}

ui(0);
createInputs(0)



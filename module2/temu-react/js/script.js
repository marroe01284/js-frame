const root = document.querySelector("#root");
let count = 0;





function App(){
    const app = document.createElement("div")
    app.textContent = "Hello World!";
app.appendChild(Card());
app.appendChild(Button());
    return app;
}

function Card(){
const card = document.createElement("div");
const title = document.createElement("h2");
title.textContent = "Title";
const content = document.createElement("p");
content.textContent = "Content goes here";
card.append(title, content);
return card;
}

function Button(){
    const button = document.createElement("button");
    button.textContent = "Count:" + count;
    button.addEventListener("click", () => {
        console.log("button was clicked, count is:" + count);
        count++;
        render();
    });
    return button;
   
}

function render() {
    root.innerHTML = "";
    root.appendChild(App());
}
render();
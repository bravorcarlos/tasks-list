let input = document.querySelector("input");
let btnAdd = document.getElementById("btn-add");
let ul = document.querySelector("ul");

btnAdd.addEventListener("click", function() {
    let text = input.value

    if (text !== "") {
        let li = document.createElement("li");
        let p = document.createElement("p");
        p.textContent = text;
        li.appendChild(p);
        li.appendChild(addDeleteBtn());
        ul.appendChild(li);

        input.value = "";

    }
    
});

function addDeleteBtn() {
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "-";
    deleteBtn.className = "btnDlt";

    deleteBtn.addEventListener("click", (e) => {
        let item = e.target.parentElement;
        ul.removeChild(item);
    });
    return deleteBtn;

}
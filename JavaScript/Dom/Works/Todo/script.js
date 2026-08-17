const input = document.querySelector("input");
const add = document.querySelector("button");

function createTask() {
  if(input.value.trim() === "") return;

  const div = document.createElement("div");
  div.classList.add("tasks");
  const h1 = document.createElement("h1");

  const btns = document.createElement("div");
  btns.classList.add("btns");

  const edit = document.createElement("img");
  edit.setAttribute("src", "./assets/Edit.svg");
  edit.setAttribute("alt", "edit");
  edit.classList.add("edit");

  const del = document.createElement("img");
  del.setAttribute("src", "./assets/Delete.svg");
  del.setAttribute("alt", "delete");
  del.classList.add("del");

  const main = document.querySelector("main");

  main.append(div);
  div.append(h1, btns);
  btns.append(edit, del);

  h1.textContent = input.value;
  
  input.value = "";
};

add.addEventListener("click", createTask);
const item = document.querySelector("#item");
const sbtn = document.querySelector("#submitbtn");
const todobox = document.querySelector("#list-todo");

item.addEventListener(
  "keyup",

  function (event) {
    if (event.key == "Enter") {
      addtodo(this.value);
      this.value = "";
    }
  }
);
sbtn.addEventListener("click", function (event) {
  addtodo(item.value);
  item.value = "";
  sbtn.appendChild(listitem);
});

const addtodo = (item) => {
  const listitem = document.createElement("li");
  listitem.innerHTML = `${item} 
  <i class="fas fa-trash-alt" id="deletebtn"></i>`;

  listitem.addEventListener("click", function () {
    this.classList.toggle("");
  });
  listitem.querySelector("#deletebtn").addEventListener("click", function () {
    listitem.remove();
  });

  todobox.appendChild(listitem);
};

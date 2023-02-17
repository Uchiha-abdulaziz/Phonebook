let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let submit = document.getElementById("submit");
let output = document.getElementById("output");
let users = [];

submit.addEventListener("click", function () {
  CreateObject();
  CheckInput();
});

// { name: "Temirlan", number: +99655599988 },

class Phonebook {
  constructor(object) {
    this.name = object.name;
    this.phone = object.phone;
  }

  getUserContainer() {
    return `<div class="outputContent">
            <p>${this.name} : ${this.phone}</p>
         </div>`;
  }
}

function CreateObject() {
  let user = new Phonebook({
    name: input1.value,
    phone: input2.value,
  });
  output.insertAdjacentHTML("beforeend", user.getUserContainer());

  users.push(user);
}

function CheckInput() {
  if (input1.value == "" || input2.value == "") {
    alert("Пожалуйста, введите имя или телефон");
  }
}

const form = document.getElementById("addForm");
const item = document.getElementById("items");
const itemList = document.getElementsByClassName("list-group-item");

// this code is add a edit button on the predefined LI TAGS
for (let i = 0; i < itemList.length; i++) {
  const editBtn = document.createElement("button");
  editBtn.className = "btn btn-dark btn-sm float-right mr-2";
  editBtn.appendChild(document.createTextNode("EDIT"));
  itemList[i].appendChild(editBtn);
}

form.addEventListener("submit", onSubmit);
function onSubmit(e) {
  e.preventDefault();
  const inputValue = document.getElementById("item").value;
  const description = document.getElementById("description").value;

  const li = document.createElement("li");
  li.className = "list-group-item";

  const newText = document.createTextNode(inputValue);
  const descriptionNode = document.createTextNode(" " + description);

  li.appendChild(newText);
  li.appendChild(descriptionNode);

  // adding delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  deleteBtn.appendChild(document.createTextNode("X"));
  li.appendChild(deleteBtn);

  // adding edit button
  const editBtn = document.createElement("button");
  editBtn.className = "btn btn-sm float-right mr-2 editBtn";
  editBtn.appendChild(document.createTextNode("EDIT"));
  li.appendChild(editBtn);
  item.appendChild(li);
}
// delete function mean when press on the x button the LI TAG is delete
item.addEventListener("click", ondelete);
function ondelete(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are You Sure?")) {
      var li = e.target.parentElement;
      item.removeChild(li);
    }
  }
}

filter.addEventListener("keyup", onFilter);
const filter = document.getElementById("filter");
function onFilter(e) {
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // // Get list
  var items = item.getElementsByTagName("li");

  Array.from(items).forEach(function (item) {
    const itemName = item.firstChild.textContent;
    const description = item.childNodes[1].textContent;

    // console.log(itemName);
    if (
      itemName.toLowerCase().indexOf(text) != -1 ||
      description.toLowerCase().indexOf(text) != -1
    ) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
// var filter = document.getElementById("filter");

// Form Submit event
form.addEventListener("submit", addItem);

//  Delete event
itemList.addEventListener("click", removeItem);

// Filter
// filter.addEventListener("keyup", filterItems);

///

// Add Item
function addItem(e) {
  e.preventDefault();
  // Get input value
  var newItem = document.getElementById("item").value;

  // Create new li element
  var li = document.createElement("li");

  // add class
  li.className = "list-group-item";

  // add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // create delete button element
  var deleteBtn = document.createElement("button");
  // Add classes to delete button
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";

  // Append text Node
  deleteBtn.appendChild(document.createTextNode("X"));

  // Append button to li
  li.appendChild(deleteBtn);

  //
  itemList.appendChild(li);
}

// Remove Item
function removeItem(e) {
  // console.log(1);

  if (e.target.classList.contains("delete")) {
    // console.log(1);
    if (confirm("Are You Sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// // filter Items
// function filterItems(e) {
//   // convert text to lowercase
//   var text = e.target.value.toLowerCase();
//   // console.log(text);

//   // Get list
//   var items = itemList.getElementsByTagName("li");
//   // console.log(items);

//   // convert to an array
//   Array.from(items).forEach(function (item) {
//     var itemName = item.firstChild.textContent;
//     // console.log(itemName);
//     if (itemName.toLowerCase().indexOf(text) != -1) {
//       item.style.display = "block";
//     } else {
//       item.style.display = "none";
//     }
//   });

//   //
// }

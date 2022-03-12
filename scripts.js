//1. Adding a new item to the list of items:function newItem will be activated with click on the "Add" button (id button)
function newItem() {
let li = $('<li></li>');
let inputValue = $("#input").val();
li.append(inputValue);

if (inputValue === '') {
    alert("add a list item!");
} else {
 $('#list').append(li);
}

 //2. Crossing out an item from the list of items:
 function crossOut() {
    li.toggleClass("strike");
}

li.on("dblclick",function crossOut() {
    li.toggleClass("strike");
});

 //3(i). Adding the delete button "X": 
 let crossOutButton = $('<crossOutButton></crossOutButton>');
 crossOutButton.append(document.createTextNode('X'));
 li.append(crossOutButton);

//3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
function deleteListItem(){
     li.addClass("delete")
 }
 
 crossOutButton.on("click", deleteListItem);

// 4. Reordering the items: 
$('#list').sortable();
}
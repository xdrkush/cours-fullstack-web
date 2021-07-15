// Ajouter une rangée dans le tableau
function addRow(tableID) {
  var table = document.getElementById(tableID);
  var row = table.insertRow(-1);
  var element1 = document.createElement("input");
  element1.type = "checkbox";
  element1.name = "chkbox[]";
  element1.value = table.rows.length;
  row.insertCell(0).appendChild(element1);
  for (var i = 1; i < 6; i++) {
    var cell = row.insertCell(i);
    cell.innerHTML = table.rows.length - 1;
  }
}

// Supprimer les rangés cocher
function deleteRow(tableID, ajax) {
  let arrayId = []
  var table = document.getElementById(tableID);
  for (var i = 1; i < table.rows.length; i++) {
    var row = table.rows[i];
    var chkbox = row.cells[0].children[0];
    if (chkbox && chkbox.checked) {
        table.deleteRow(i--);
        // Construction du tableau à envoyer
        arrayId.push(chkbox.value - 1)
    }
  }
  // envoie de notre tableau dans sendForm()
  if (ajax === true) sendForm(arrayId)
  if (table.rows.length == 1)
    table.rows[0].cells[0].children[0].checked = false;
}

// Tout selectionner
function checkAll(tableID) {
  var table = document.getElementById(tableID);
  var val = table.rows[0].cells[0].children[0].checked;
  console.log('checkAll')
  for (var i = 1; i < table.rows.length; i++) {
    table.rows[i].cells[0].children[0].checked = val;
  }
}

// Envoie de notre tableau sur une route http (req.body)
function sendForm(data) {
    console.log('Send: ', data)
    const body = { data }
    // Notre requete ajax
    $.ajax({
        url: "/deleteMulti", // link of your "whatever" php
        type: "POST",
        async: true,
        cache: false,
        data: body, // all data will be passed here
        success: function(data){ 
            alert(data) // The data that is echoed from the ajax.php
        }
    });
}
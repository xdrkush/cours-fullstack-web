/*
 * On déclare nos variables
 ***************************/

var idTest = document.getElementById('idTest');
var para = document.createElement('p')

// On execute nos actions
para.textContent = 'Mon super paragraphe !'
idTest.appendChild(para)

// On déclare d'autre variable
// Important !! il faut bien déclaré ces variables apprès l'execution sinon notre querySelector('p') ne trouvera pas son selecteur
var text = document.createTextNode(' - La suite de mon super paragraphe !')
var linkPara = document.querySelector('p')

linkPara.appendChild(text)
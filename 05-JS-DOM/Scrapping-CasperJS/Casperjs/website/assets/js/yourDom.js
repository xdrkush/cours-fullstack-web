const
  articleMedia = document.getElementById('articleMedia')

const
  myJson = function () {
    const
      urlJSON = '/assets/js/json/getData.json',
      req = new XMLHttpRequest()

    req.open('GET', urlJSON)
    req.responseType = 'json'
    req.send()
    req.onload = function () {
      const
        articleMedia = req.response
      showArticle(articleMedia)
    }
    console.log(req)
  },
  showArticle = function (jsonObj) {
    const article = jsonObj

    // Boucle de récupération du Json pour l'affichage dans le html
    for (var i = 0; i < article.length; i++) {
      // Création de nouvelle élément
      const
        myArticle = document.createElement('div'),
        myTitle = document.createElement('h5'),
        myLink = document.createElement('a'),
        myContent = document.createElement('p'),
        myCard = document.createElement('div'),
        myCardBody = document.createElement('div')

      // Attribution de class
      const
        classCard = document.createAttribute("class"),
        classContent = document.createAttribute("class"),
        classColMd4 = document.createAttribute("class"),
        classCardBody = document.createAttribute("class")

      // Définition du contenu des éléments Valeur | (key / value)
      myTitle.textContent = article[i].title
      myLink.href = article[i].link
      myContent.textContent = article[i].content

      // Définition des class à utiliser
      classColMd4.value = "col-md-4"
      classContent.value = "col-md-12"
      classCard.value = "card mb-4 text-center shadow-sm"
      classCardBody.value = "card-body"

      /*
       * Affichage des Elements avec leur variable (Parent => Enfant)
       ***************************************************************/

      // articleMedia créé un enfant (=>) qui est myArticle
      articleMedia.appendChild(myArticle)

      // myArticle définit (=) ses class (classColMd4)
      myArticle.setAttributeNode(classColMd4)
      // myArticle => myCard
      myArticle.appendChild(myCard)

      // myCard => myLink
      myCard.appendChild(myLink)
      // myArticle = (classCard)
      myCard.setAttributeNode(classCard)

      // myLink => myContent
      myLink.appendChild(myTitle)

      // myContent = (classContent)
      myContent.setAttributeNode(classContent)

      // myCard => (myCardBody)
      myCard.appendChild(myCardBody)

      // myCardBody => myTitle
      myCardBody.appendChild(myContent)
      // myCardBody = (classCardBody)
      myCardBody.setAttributeNode(classCardBody)

    }
  }

/*
 * 
 * Execution des Functions
 * 
 */

myJson()
showArticle() 
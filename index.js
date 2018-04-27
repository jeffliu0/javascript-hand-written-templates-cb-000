function addComment(){
  var bodyText = "This research is bold and important!"
  var commenter = "Definitely not a woodchuck looking to eat the wood"

  var commentBody = createCommentBody(bodyText)
  var commenterLabel = createCommenterLabel(commenter)
  postNewComment(commenter, commenterLabel)
}

function createCommentBody(comment){
  var bodyDiv = document.createElement('div')
  var bodyPara = document.createElement('p')
  bodyPara.innerHTML = comment
  bodyDiv.appendChild(bodyPara)
  return bodyDiv
}

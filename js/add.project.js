const myElement = document.getElementById("add.project");
function addProject(title, description, image, link){
    myElement.innerHTML += '<div class="col-md-6 col-sm-6"><!-- PROJECT ITEM --><div class="project-item"><a href="'+
    link+'" class="image-popup"><img src="'+image+
    '" class="img-responsive" alt=""><div class="project-overlay"><div class="project-info"><h1>'+
    title+'</h1><h3>'+description+'</h3></div></div></a></div></div> '
}

// addProject('images/project-image4.jpg', 'title', 'description')
addProject('data cryptor', 'encrypt or decrypt text', 'images/data-cryptor.png', '#data-cryptor-v1.0/')

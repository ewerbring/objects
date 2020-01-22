var names = ["calle", 2, "anna", true, "johhanaaa", "anna4"];

var project = {
  title: "Photographs",
  class: "imageClass",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, quam nemo! Reprehenderit eius et libero reiciendis itaque nulla ullam sit!",
  image:
    "https://static.turbosquid.com/Preview/2018/10/13__01_18_23/stone35_context_1480pix.jpg9C96AC9D-9844-4BF9-8BBD-B6523924B2DFDefaultHQ.jpg"
};

function logName() {
  console.log(names[4]);
  console.log(project.image);
}

function displayTitle() {
  var container = document.querySelector("#container");
  var title = document.createElement("h3");
  var rockImage = document.createElement("img");
  var description = document.createElement("p");

  description.innerHTML = project.description;
  rockImage.src = project.image;
  title.innerHTML = project.description;

  title.className = "titleClass";
  description.className = "descriptionClass";
  rockImage.className = "imageClass";

  container.appendChild(rockImage);
  container.appendChild(title);
  container.appendChild(description);
}

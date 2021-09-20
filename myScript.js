function addMovie() {
  // step one create list item
  var newMovie = document.createElement("li");
  var movie = prompt("What movie would you like to add?"); // get text for list item
  var movieNode = document.createTextNode(movie);
  newMovie.appendChild(movieNode); // add text to list item

  // step two add list item to list
  var scary = document.getElementById("scary");
  scary.appendChild(newMovie);

  var movies = document.getElementsByTagName("li").length;
  document.getElementById("movies").innerHTML = movies;
}
var movies = document.getElementsByTagName("li").length;
document.getElementById("movies").innerHTML = movies;

////// Lets create our own React spin off



//// Our basic react spinoff library code
createPost = (post) => {
  var para = document.createElement("p");
  para.innerText = post;
  return para;
}

render = (element) => {
  document.body.appendChild(element);
}



//// Users application logic
post1 = createPost("This is my FIRST post...bla bla bla");
post2 = createPost("This is my SECOND post...bla bli bla");



render(post1);
render(post2)

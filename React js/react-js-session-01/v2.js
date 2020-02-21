///// Lets create something even more closer to react


//// Our basic react spinoff library code
h1 = (data) => {
  var headingTag = document.createElement("h1");
  headingTag.innerText = data;
  return headingTag;
}

p = (data) => {
  var para = document.createElement("p");
  para.innerText = data;
  return para;
}

render = (element) => {
  document.body.appendChild(element);
}





//// can I do the below????

render( h1("Hello, world!") );

render( h1("Post Title") );
render( p("This is my first post guys!!! Hello!!! Yaayyyy!!!") );

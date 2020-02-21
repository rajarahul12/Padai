const App = (props) => {
  return <h1>Hello, {props.name}!</h1>;
}

ReactDOM.render(
  <App name="world" />,
  document.getElementById('root')
);

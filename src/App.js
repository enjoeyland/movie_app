function Food({fav}) {
  console.log(fav);
  return <h3>I like {fav}</h3>
}

function App() {
  return (
    <div className="App">
      <h1>hello!!</h1>
      <Food fav="kimchi"/>
      <Food fav="라면"/>
      <Food fav="삼겹살"/>
      <Food fav="쭈꾸미"/>
    </div>
  );
}

export default App;

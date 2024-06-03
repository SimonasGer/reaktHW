import Header from "../nav/Nav";
import Main from "../main/Main";
import Side from "../side/Side";
import Footer from "../footer/Footer";
import "./app.scss"

function App() {
  return (
    <div className="App">
      <Header/>
      <section className="side">
        <Main className = "main"/>
        <Side className = "sideSide"/>
      </section>
      <Footer/>
    </div>
    
  );
}

export default App;

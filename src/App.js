import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
  return (
    <div>
      <div className="wrapper">
        <div className="container">
        <Header/>
          <main className="main">
            <Content/>
          </main>
         <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;

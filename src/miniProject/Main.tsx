import "./main.css";

function Main() {
  return (
    <main>
      <div>
        <h2>main things in react</h2>
        <p>react - is library to make a interface</p>
        <h5>#react #library</h5>
        <p className="p">opyblicated in 2023, 27 may</p>
      </div>
      <div>
        <h2>Components and Props</h2>
        <p>Components it is UI parts</p>
        <h5>#UI#props #components</h5>
        <p className="p">opyblicated in 2024, 12 march</p>
      </div>
      <div>
        <h2>author:Myrzabek Kaisar</h2>
        <p>Kaisar is student in Amjilt cyber school</p>
        <h5>#Amjilt #cyberSchool #programming</h5>
        <p className="p">opyblicated in 2024, 1 september</p>
      </div>

      <form className="add">
        <h2>share you opinion</h2>
        <input type="text" placeholder="type a text" />
        <button>enter</button>
      </form>
    </main>
  );
}

export default Main;

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import Header from "./miniProject/header";
// import Main from "./miniProject/main";
// import Footer from "./miniProject/footer";

// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <Header />
//     <Main />
//     <Footer />
//   </StrictMode>
// );

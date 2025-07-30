import "./App.css";
import React, { Component } from "react";
import Profile from "./Profile";

// function App() {
//   return <h1>Hello World</h1>;
// }

function App() {
  return (
    <>
      <Header />
      <h1>To-do List</h1>
      <ol>
        <li>Mengerjakan Tugas Front END</li>
        <li>Mempelajari Tutorial React JS</li>-<li>Murajaah 1 Juz</li>
      </ol>
      <Profile nama="ucup" alamat="Depok" umur={21} />
      <img
        src="https://picsum.photos/id/127/200/300"
        alt="gambar-pemandangan"
        width={100}
        height={100}
      />
      <Footer name="Ahyar Pattani" />
    </>
  );
}

function Header() {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Login</li>
      </ul>
    </nav>
  );
}

class Footer extends Component {
  render() {
    return (
      <footer>
        <h3>Copyright &copy;2025 Developed by {this.props.name}</h3>
        <span>Make With &#10084; </span>
      </footer>
    );
  }
}

export default App;

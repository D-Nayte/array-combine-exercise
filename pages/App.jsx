import React from "react";
import DisplayData from "../components/DisplayData";

function App() {
  const owned = [
    { title: "Book1", color: "green" },
    { title: "Book2", color: "green" },
    { title: "Book3", color: "green" },
    { title: "Book4", color: "green" },
    { title: "Book5", color: "green" },
    { title: "Book6", color: "green" },
    { title: "Book7", color: "green" },
    { title: "Book8", color: "green" },
    { title: "Book9", color: "green" },
  ];

  const searched = [
    { title: "Book10", color: "red" },
    { title: "Book20", color: "red" },
    { title: "Book30", color: "red" },
    { title: "Book40", color: "red" },
    { title: "Book50", color: "red" },
    { title: "Book60", color: "red" },
    { title: "Book70", color: "red" },
    { title: "Book80", color: "red" },
    { title: "Book90", color: "red" },
    { title: "Book3", color: "red" },
    { title: "Book7", color: "red" },
  ];

  // write a function to compare 2 arrays, store it in "combined"
  //and display all "searched" results in red
  //if you already own the book, should been displayed in green

  /*-----WANTED OUTCOM------------------
  //   const combined = [
  //     { title: "Book10", color: "red" },
  //     { title: "Book20", color: "red" },
  //     { title: "Book30", color: "red" },
  //     { title: "Book40", color: "red" },
  //     { title: "Book50", color: "red" },
  //     { title: "Book60", color: "red" },
  //     { title: "Book70", color: "red" },
  //     { title: "Book80", color: "red" },
  //     { title: "Book90", color: "red" },
  //     { title: "Book3", color: "green" },
  //     { title: "Book7", color: "green" },
   ];*/

  const combined = [];

  function combineAndSearch() {
    //Your code goes here...
  }

  return (
    <div>
      <DisplayData title="Owned data" data={owned} />
      <DisplayData title="Searched data" data={searched} />
      <DisplayData title="Combined data" data={combined} />
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import DisplayData from "../components/DisplayData";
import owned from "../assets/data/ownedBooks.json";
import searched from "../assets/data/searchedBooks.json";

function App() {
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
    //Your code goes here
  }

  combineAndSearch();

  console.log(searched);

  return (
    <div>
      <DisplayData title="Owned data" data={owned} />
      <DisplayData title="Searched data" data={searched} />
      <DisplayData title="Combined data" data={combined} />
    </div>
  );
}

export default App;

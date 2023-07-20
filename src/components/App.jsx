import data from "C:\\Users\\maxri\\LizardGlobalAssessment\\src\\mock\\data.json"
import React from "react";

function App() {
  return <div>
    <head>
      <title>Lorem ipsum dolor library</title>
    </head>
  <h1>Below, you can see all the books in the library.</h1>
  <p>There are {data.length} books in the library.</p>

  // Here I will make full list of books / posts
  // This is the main page
  <p>{data["posts"]}</p>

  // On the left side of the screen, I intend to make a menu with filters
  // You can filter by year, author and tags

  </div>;
}

export default App();

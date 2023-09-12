import data from "C:\\Users\\maxri\\LizardGlobalAssessment\\src\\mock\\data.json"
import React from "react";

function FilterOnYear(data) {
  let year = prompt("Enter year to filter by", "")
  for (let i = 0; i < data.length; i++) {
    let objct = data["posts"][i];
    if ((objct["publishDate"].substring(0,4)) == year)
    {
      console.log(objct);
    }
  }
}

function FilterOnMonth(data) {
  let month = prompt("Enter month to filter by", "")

  for (let i = 0; i < data.length; i++) {
    let objct = data["posts"][i];
    if ((objct["PublishDate"].substring(5,7)) == month)
    {
      console.log(objct);
    }
  }
}

function FilterMonthYear(data) {
  let year = prompt("Enter year to filter by", "")
  let month = prompt("Enter month to filter by", "")
  const date = year.concat("-",month)

  for (let i = 0; i < data.length; i++) {
    let objct = data["posts"][i];
    if ((objct["PublishDate"].substing(0,7)) == date)
    {
      console.log(objct);
    }
  }
}

function FilterByCategory(data) {
  let filtered_data = []
  let copy_list = []
  while (true) {
    let user_cat = prompt("Insert category to filter by. Type 'stop' to stop")
    if (filtered_data.length != 0) {
      if (user_cat == "stop") {
        break
      }
      else {
        for (let i = 0; i < data.length; i++) {
          let objct = data["posts"][i]
          for (let j = 0; j < objct["categories"].length; j++) {
            if (user_cat in objct["categories"]["name"]) {
              copy_list.push(objct)
              filtered_data = copy_list
              copy_list = []
            }
          }
        }
      }
    }
    else {
      if (user_cat == "stop") {
        break
      }
      else {
        for (let i = 0; i < data.length; i++) {
          let objct = data["posts"][i]
          for (let j = 0; j < objct["categories"].length; j++) {
            if (user_cat in objct["categories"]["name"]) {
              filtered_data.push(objct)
            }
          }
        }
      }
    }
  }
  for (let i = 0; i < filtered_data.length; i++) {
    console.log(filtered_data[i])
  }
}

function App() {
  
  return (<div>
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

  <h1>This is where the user can filter on publising year.</h1>
  <div>
    {FilterOnYear(data)}
  </div>

  <h1>The user can filter on publishing month here</h1>
  <div>
    {FilterOnMonth(data)}
  </div>

  <h1>The user can filter on year and month here</h1>
  <div>
    {FilterMonthYear(data)}
  </div>

  <h1>The user can filter on tags here</h1>
  <div>
    {FilterByCategory(data)}
  </div>
  </div>);
}

export default App;

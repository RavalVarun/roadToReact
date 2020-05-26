import React from 'react';


const list = [
  {
    title: 'React',
    url: 'https://reactjs.org',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 3,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points : 5,
    objectID: 1,
  },
];

function App() {
  return (
    <div>
      <h1>My Hacker Stories</h1>
       
      <label htmlFor="search">Search :</label>
      <input id="serach" type="text" />

      <hr />
      <List />  
    </div>
  );
}

function List() {
  return list.map(function(item) {
    return(
      <div key={item.objectID}>
        <span>
          <a href={item.url}>{item.tile}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
      </div>
    )
  });
}

export default App;

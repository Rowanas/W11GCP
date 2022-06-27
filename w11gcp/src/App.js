import './App.css';
// import AboutPage from './Components/AboutPage';
// import ClassificationPage from './Components/ClassificationPage';
import React from "react";
import AboutPage from './Components/AboutPage';
import NavigationBar from './Components/NavigationBar';
import SearchBar from './Components/SearchBar';



function App() {
  return (

    <div>
      {/* < ClassificationPage /> */}
<NavigationBar />
<SearchBar />
    </div>

  );
}

export default App;

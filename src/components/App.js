import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [search, setSearch] = useState("")
  const [listings, setListings] = useState([]);


  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then((r) => r.json())
      .then(setListings);
  }, []);
  console.log(listings)

  const displayedListings = listings.filter((listing) => listing.description.toLowerCase().includes(search.toLowerCase())
  );


  function handleRemoveListing(id) {
    const newListings = listings.filter((listing) => listing.id !== id);
    setListings(newListings)
  }

  return (
    <div className="app">

      <Header onSearch={setSearch} />
      <ListingsContainer
        listings={displayedListings}
        onRemoveListing={handleRemoveListing} />
    </div>
  );
}

export default App;

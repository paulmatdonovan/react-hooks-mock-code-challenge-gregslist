import React from "react";
import ListingsCard from './ListingCard'
// import ListingCard from "./ListingCard";

function ListingsContainer() {
  return (
    <main>
      <ul className="cards">
        <ListingsCard />
      </ul>
    </main>
  );
}

export default ListingsContainer;

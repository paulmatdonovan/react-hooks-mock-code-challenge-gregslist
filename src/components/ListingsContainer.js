import React, { useEffect, useState } from "react";
import ListingCard from './ListingCard'



function ListingsContainer() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then((r) => r.json())
      .then((listings) => setListings(listings));
  }, []);
  console.log(listings)

  const listingCards = listings.map((listing) => {
    <ListingCard key={listing.id} listing={listing} />
  })

  return (
    <main>
      <ul className="cards">
        {listingCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;

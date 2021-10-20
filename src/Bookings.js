import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const search = searchVal => {
    if (searchVal === "") {
      setFilterBookings(bookings);
    } else {
      let bookingFinds = bookings.filter(booking => {
        return (
          booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
          booking.surname.toLowerCase().includes(searchVal.toLowerCase())
        );
      });
      setFilterBookings(bookingFinds);
    }
  };

  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilterBookings] = useState([]);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => {
        setBookings(data);
      });
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={filteredBookings} />
      </div>
    </div>
  );
};

export default Bookings;

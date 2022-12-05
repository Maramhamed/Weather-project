import React, { useEffect, useState } from "react";
import axios from "axios";
import { FakeWeather } from "./data/FakeWeather";
console.log(FakeWeather);

const Search = () => {

  
 


  return (
    <div>
      <input
      value={search}
        className="form-control mr-sm-2 form-control"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
    </div>
    
  );
};

export default Search;

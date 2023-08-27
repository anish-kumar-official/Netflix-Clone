import React from "react";
import Main from "./Main";
import Row from "../Components/Row";
import requests from "../DBconfig";

const Home = () => {
  return (
    <div>
      <Main />
      <Row
        rowID="1"
        title="Trending Movies"
        requestURL={requests.requestPopular}
      />
      <Row
        rowID="2"
        title="UpComing Movies"
        requestURL={requests.requestUpcoming}
      />
      <Row rowID="3" title="Top Rated" requestURL={requests.requestTopRated} />
      {/* <Row title="Action Movies" requestURL={requests.requestActionMovies} /> */}
    </div>
  );
};

export default Home;

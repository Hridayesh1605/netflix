import React from "react";

import Card from './card'
import sdata from "./data";


//arrow funvtion
// const ncard = (val) => {
//   return (
//     <Card imgsrc={val.imgsrc}
//       title={val.title}
//       category={val.category}
//       link={val.link}
//     />

//   )
// }

function App() {
  return (
    <>
      <h1 className="heading_style"> Top 5 Netflix Movies</h1>
      {/* using props inside card

      <Card imgsrc="https://i.ibb.co/CWChZsc/desktop-wallpaper-money-heist-netflix-web-series-thumbnail.jpg"
        title="Money Heist"
        category="netflix origina series"
        link="https://www.netflix.com/in/title/80192098"
      /> */}
      {/* using array */}
      {/* <Card imgsrc={sdata[0].imgsrc}
        title={sdata[0].title}
        category={sdata[0].category}
        link={sdata[0].link}
      /> */}
      {/* {sdata.map(ncard)} */}


      {/* //map function using arrow function// */}

      {sdata.map((val) => {
        return (
          <Card
            key={val.id}
            imgsrc={val.imgsrc}
            title={val.title}
            category={val.category}
            link={val.link}
          />

        )

      })}
    </>

  );
}

export default App;

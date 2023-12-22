import React from 'react';
import VideoPlayer from './VideoPlayer';

const UList = ({ section }) => {
  return (
    <div>
      {section.map((item, index) => (
        <div key={index}>
          { (item.length > 2) ? (
            // If item is an array [text, text, img]
            <>
              <p><b>{item[0]+ ": "}</b>{item[1]}</p>
                <img className="section-img" src={item[2]} alt={`${index}`} />
            </>
            ) : (
              // If item is just text
              <p><b>{item[0]+ ": "}</b>{item[1]}</p>
            )
          }

          {/* Version with img or video as options */}
          {/* { (item.length > 2) ? (
            // If item is an array [text, text, img]
            <>
              <p><b>{item[0]+ ": "}</b>{item[1]}</p>
              { item[2].includes(".jpg") ? (
                <img className="section-img" src={item[2]} alt={`${index}`} />
              ) : (
                <VideoPlayer section={item[2]} />
              ) }
            </>
          ) : (
            // If item is just text
            <p><b>{item[0]+ ": "}</b>{item[1]}</p>
          )} */}
        </div>
      ))}
    </div>
  );
}

// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     <li>{number}</li>
//   );
//   return (
//     <ul>{listItems}</ul>
//   );
// }

export default UList;

import React from 'react';
// TO DO: Create a Fact Functional component which returns a div in the format below

// NOTE: In order to maintain CSS styling, do not alter the existing tags or their classNames
const Fact = ({ fact, handleFavoriteClick }) => {
  return (
    <div className='factCard'>
      <h1>{fact.animal}</h1>
      {/* TODO: Attach an onClick event to the button */}
      <button value={fact.animal} onClick={(e) => handleFavoriteClick(e)}>
        Click to favorite
      </button>
      <img src={fact.image} width='600' height='400' />
      <h3>{fact.fact}</h3>
    </div>
  );
};

export default Fact;

/*
    id: 1,
    animal: "Elephant",
    fact: "Baby Elephants suck their trunks for comfort.",
    image:
      "https://cdn.pixabay.com/photo/2014/03/02/20/23/baby-elephant-278522_960_720.jpg",  
*/

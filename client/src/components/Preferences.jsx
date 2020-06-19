import React from "react";

const choices = ['jewelry', 'furniture', 'watch', 'art', 'animals', 'design', 'plants', 'family', 'entertainment'];

const Preferences = (props) => {
  return (
    <div className='preferences-container'>
      {choices.map((choice) => <div value = {choice} onClick = {props.addPreference}>{choice}</div>)}
    </div>

  );
}

export default Preferences;

//refactor as stateful component, add isClicked value to state; toggle isClicked when saved to db/deleted from db


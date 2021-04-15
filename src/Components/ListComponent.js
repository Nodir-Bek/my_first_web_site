import React from "react";

export const ListComponent = (props) => {
  return (
    <>
      <ol>
        {props.list.map((el,id) => {
          return ( 
          <li key={id}>{el}</li>
          )
        })}
      </ol>
    </>
  );
};

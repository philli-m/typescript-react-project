// The PropsComponent is defined using the React.FC (React Functional Component) generic type, which takes in 
// the pre-defined UserProps as an argument. This will ensure that whatever data we are getting back as props 
// wherever the PropsComponent is used will conform to the type we have defined.

import React from "react";
type UserProps = {
  firstName: string;
  lastName: string;
};

const PropsComponent: React.FC<UserProps> = ({ firstName, lastName }) => {
  return (
    <div>
      <p>{firstName}</p>
      <p>{lastName}</p>
    </div>
  );
};

export default PropsComponent;
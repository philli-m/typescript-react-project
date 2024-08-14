import React from "react";
import { useState } from 'react';

import styled from 'styled-components';

const Pic = "https://picsum.photos/200";

// Button component that'll render an <a> tag with some styles
const Button = styled.button`
  background-color: teal;
  color: white;
  padding: 1rem 2rem;
`

const FirstComponent: React.FC<{}> = () => {
  const [image, setImage] = useState(200);

  return (
    <div>
      <h3>This is my first component</h3>
      <div>
        <img height={image} src={Pic+'?'+image} alt="" />
      </div>
      <p>This component shows a random photo from picsum.photo </p>
      <Button onClick={() => setImage(image +1)}>I will try to change the image</Button>
    </div>);
};

export default FirstComponent;
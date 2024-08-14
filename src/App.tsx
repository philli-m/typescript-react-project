import React from "react";
import FirstComponent from "./components/FirstComponent";
import PropsComponent from "./components/PropsComponent";
import UserComponent from "./components/UserComponent";


const App = () => {
  return (
    <div>
        <h1>Playing with Typescript and Styled Components</h1>
        <FirstComponent />
        <PropsComponent firstName="John" lastName="Bob" />
        <UserComponent name="John Doe" age={26} address="87 Summer St, Boston, MA 02110" dob={new Date()} />
    </div>
  );
};

export default App;
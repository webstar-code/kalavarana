import Loader from "react-loader-spinner";
import React from 'react';
export default class App extends React.Component {
  //other logic
  render() {
    return (
      <div className="h-64 flex items-center justify-center">
        <Loader type="TailSpin" color="#08263F" height={50} width={50} />
      </div>

    );
  }
}
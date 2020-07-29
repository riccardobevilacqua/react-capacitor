import React from 'react';
import ReactDOM from 'react-dom';

const App: React.FunctionComponent = () => {
  return (
    <>
      <h1>React Capacitor</h1>
      <p>Android app example</p>
    </>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

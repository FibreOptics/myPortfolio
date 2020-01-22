import React from "react";

import { Header, Profile, History, Footer } from "react/components/components";

import "sass/main.scss";

function App() {
  return (
    <div className='App'>
      <Header />
      <Profile />
      <History />
      <Footer />
    </div>
  );
}

export default App;

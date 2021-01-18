import React from 'react';
import Navbar from "./components/Navbar";
import ContentMain from "./components/Content/ContentMain";

function App() {
    return (
        /*TODO fix that god damn modal, figure out how to save a copy of a file to the public/images directory*/
        <div className="main">
            <Navbar/>
            <ContentMain/>
        </div>
    );
}

export default App;

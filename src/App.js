import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import Card from "./components/Card";
import { Cdata } from "./components/Cdata";
import './components/index.css';
import './App.css';

function autoCard(object) {
    return <Card
        cimg={object.cimg}
        ctitle={object.ctitle}
        clink={object.clink}
        cabout={object.cabout}
        chrs={object.chrs}

    />
}

export default function App() {
    return (
        <div>
            <Navbar />
            {Cdata.map(autoCard)}
        </div>
    )
}

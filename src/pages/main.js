import React from 'react';
import Navbar from '../components/component-navbar';
import Header from '../components/componet-header';
import Card from '../components/componet-card';

function App() {
    return (
        <>
            <Navbar />
            <Header />
            <div className="container mt-5">
                <div className="row justify-content-md-center mt-5">
                    <div className="col-md-6">
                        <Card />
                    </div>
                </div>               
            </div>            
        </>
	);
}

export default App;

import React from 'react'

import Card from '../../../globalComponents/card'

function App(props) {
    return (        
        <>
            <div className="container mt-5">
                <div className="row justify-content-md-center mt-5">
                    <div className="col-md-6">
                        { props.data.id ? <Card dataPokemon={props.data} /> : <h1>Busca tu pokemon</h1>}
                                                  
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
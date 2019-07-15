import React from 'react'

function Card(props) {
    return (
        <>
            <div className="row card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={props.dataPokemon.sprites.front_default} height="150" width="150" className="card-img" alt="img-card" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                        <h5 className="card-title">{props.dataPokemon.name}</h5>
                        <p className="card-text"> Movimeintos </p>
                        <p className="card-text"> 
                            - {props.dataPokemon.moves[0].move.name} <br></br>
                            - {props.dataPokemon.moves[1].move.name} <br></br>
                            - {props.dataPokemon.moves[2].move.name} <br></br>
                            - {props.dataPokemon.moves[3].move.name} <br></br>
                            - {props.dataPokemon.moves[4].move.name} <br></br>
                            
                        </p>
                        <p className="card-text"> </p>
                        <p className="card-text"><small className="text-muted">Base de experiencia {props.dataPokemon.base_experience} EX</small></p>
                        </div>
                    </div>
                </div>
            </div> 
        </>
	)
}

export default Card
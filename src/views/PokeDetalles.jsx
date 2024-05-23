import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PokeContext } from "../context/PokeContext";
const PokeDetalles = () => {
  const { pokemones } = useContext(PokeContext);

  const { id } = useParams();
  const navigate = useNavigate();

  let pokemon = pokemones.find((pokemon) => pokemon.id == id);

  if (!pokemon) {
    return (
      <div className="container mt-3">
        <p>Pokemon no encontrado</p>
        <button
          onClick={() => navigate("/pokemones")}
          >
          Volver
        </button>
      </div>
    );
  }

  const volver = () => {
    navigate(`/pokemones`);
  };

  return (
    <div className="container text-center mt-3">
      <div className="card mb-3 mt-5 mx-auto" style={{ maxWidth: "45vw" }}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={pokemon.img} className="img_poke" alt={pokemon.name} />
          </div>
          <div className="col-md-8">
            <div className="card-body text-center">
              <h4 className="card-title">{pokemon.name}</h4>
              <ul>
                <li className="card-text">
                  Experiencia Base: {pokemon.base_experience}
                </li>
                <li className="card-text">Altura: {pokemon.height} cm.</li>
                <li className="card-text">Peso: {pokemon.weight} kgs.</li>
                <li className="card-text">Tipo: {pokemon.type}</li>
              </ul>

              <button onClick={volver} className="btn btn-dark">
                Regresar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokeDetalles;

import React from "react";

const Home = () => {
  return (
    <>
      <div className="container text-center">
        <h2 className="titulo"> Bienvenido maestro Pokemón </h2>
        {
          <img
            src="./src/assets/img/Pikachu.png"
            alt="Pikachu"
            className="pikachu img-fluid"
          />
        }
      </div>
    </>
  );
};

export default Home;

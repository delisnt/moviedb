import jumboImg from "../assets/jumboImg.jpg";

function Jumbotron() {
  return (
    <div className="jumbotron">
      <div className="title-jumbotron">
        <h2>Esplora i tuoi film preferiti</h2>
      </div>
      <img src={jumboImg} alt="img" />
    </div>
  );
}

export default Jumbotron;

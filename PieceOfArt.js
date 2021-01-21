import './PieceOfArt.css';

function PieceOfArt(props) {
  return (
    <div className="pieceOfArt">
      <h2>{props.title}</h2>
      <img src={props.imagePath} alt={props.alt} />
    </div>
  );
}

export default PieceOfArt;

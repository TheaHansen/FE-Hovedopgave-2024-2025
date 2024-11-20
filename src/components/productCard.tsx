import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from '../images/IMG_1618.jpg';

//Together
function ProductCard() {
  return (
    <Card className="card text-center" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Image} />
      <Card.Body>
        <Card.Title>Beni</Card.Title>
        <Card.Text>
            Not for sale DKK
        </Card.Text>
        <Button className="rounded-lg" style={{backgroundImage: 'linear-gradient(to right, #b6e2fc, #45baff)', border: 'none'}} >Tilføj til kurv</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function myCard({src}) {
  return (
    <Card style={{ width: '18rem',margin:'0 1%', borderRadius:0,border:'none',backgroundColor:'black',minWidth:250 }}>
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title style={{color:' #e58f00'}}>Italian Source Mashroom</Card.Title>
        <Card.Text style={{color:'white'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Text style={{color:"#e58f00"}}>
            Price:$12.00
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default myCard;
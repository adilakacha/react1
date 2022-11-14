import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Profile() {
  return (
    <Card style={{ width: '18rem', margin:"30%" }}>
    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcNPOPDCWiEvN0x11fc_02MzdhtzcLOwg-qg&usqp=CAU" />
    <Card.Body>
      <Card.Title>Adil Akacha</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Profile</Button>
    </Card.Body>
  </Card>
  )
}

export default Profile

import {
    Card,
    CardText,
    CardTitle,
    Button,
    Row,
    Col,
  } from "reactstrap";

  
  const Message = ({title, message, id, phone, onApprove }) => {
    return (
      <div>
        <>
        <Row>
          <Col md="12" lg="12">
            <Card body className="text-center">
              <CardTitle tag="h5">{title}</CardTitle>
              <CardText>
                <br/>
                {message}
              </CardText>
              <CardText>
                <span style={{color: 'grey'}}>Cell: {phone}</span>
              </CardText>
              <div>
             <Button color="light-danger" onClick={() => onApprove(id)}>Reject</Button>
                {/* <span style={{marginLeft: 20}}><Button color="light-warning">View Details</Button></span> */}
                <span style={{marginLeft: 20}}><Button color="light-success" onClick={() => onApprove(id)}>Approve</Button></span>
              </div>
            </Card>
          </Col>
        </Row>
        </>
      </div>
    );
  };
  
  export default Message;
  
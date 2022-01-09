import {
    Card,
    CardText,
    CardTitle,
    Button,
    Row,
    Col,
  } from "reactstrap";

  
  const Message = ({title, message}) => {
    return (
      <div>
        <>
        <Row>
          <Col md="12" lg="12">
            <Card body className="text-center">
              <CardTitle tag="h5">{title}</CardTitle>
              <CardText>
                {message}
              </CardText>
              <div>
             <Button color="light-danger">Reject</Button>
                {/* <span style={{marginLeft: 20}}><Button color="light-warning">View Details</Button></span> */}
                <span style={{marginLeft: 20}}><Button color="light-success">Approve</Button></span>
              </div>
            </Card>
          </Col>
        </Row>
        </>
      </div>
    );
  };
  
  export default Message;
  
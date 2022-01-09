import { Col, Row } from 'reactstrap';
import SalesChart from '../components/dashboard/SalesChart';
import Ratings from '../components/dashboard/Ratings';
// import Feeds from '../components/dashboard/Feeds';
import ProjectTables from '../components/dashboard/ProjectTable';


const Starter = () => {
  return (
    <div>
      {/***Top Cards***/}

      {/***Sales & Feed***/}
      <Row>
        <Col sm='6' lg='6' xl='7' xxl='6'>
          <SalesChart />
        </Col>
        <Col sm='6' lg='6' xl='7' xxl='6'>
          {/* <Feeds /> */}
          <Ratings />
        </Col>
      </Row>
      {/***Table ***/}
      <Row>
        <Col lg='12'>
          <ProjectTables />
        </Col>
      </Row>
      {/***Blog Cards***/}
      {/* <Row>
        {BlogData.map((blg, index) => (
          <Col sm="6" lg="6" xl="3" key={index}>
            <Blog
              image={blg.image}
              title={blg.title}
              subtitle={blg.subtitle}
              text={blg.description}
              color={blg.btnbg}
            />
          </Col>
        ))}
      </Row> */}
    </div>
  );
};

export default Starter;

<<<<<<< HEAD
import { Col, Row } from 'reactstrap';
import SalesChart from '../components/dashboard/SalesChart';
import Ratings from '../components/dashboard/Ratings';
// import Feeds from '../components/dashboard/Feeds';
import ProjectTables from '../components/dashboard/ProjectTable';

=======
import { Col, Row } from "reactstrap";
import SalesChart from "../components/dashboard/SalesChart";
import Feeds from "../components/dashboard/Feeds";
import ProjectTables from "../components/dashboard/ProjectTable";

import Blog from "../components/dashboard/Blog";
import bg1 from "../assets/images/bg/bg1.jpg";
import bg2 from "../assets/images/bg/bg2.jpg";
import bg3 from "../assets/images/bg/bg3.jpg";
import bg4 from "../assets/images/bg/bg4.jpg";

const BlogData = [
  {
    image: bg1,
    title: "This is simple blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg2,
    title: "Lets be simple blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg3,
    title: "Don't Lamp blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg4,
    title: "Simple is beautiful",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
];
>>>>>>> f6f914f (Alpha phase complete)

const Starter = () => {
  return (
    <div>
      {/***Top Cards***/}

      {/***Sales & Feed***/}
      <Row>
<<<<<<< HEAD
        <Col sm='6' lg='6' xl='7' xxl='6'>
          <SalesChart />
        </Col>
        <Col sm='6' lg='6' xl='7' xxl='6'>
          {/* <Feeds /> */}
          <Ratings />
=======
        <Col sm="6" lg="6" xl="7" xxl="8">
          <SalesChart />
        </Col>
        <Col sm="6" lg="6" xl="5" xxl="4">
          <Feeds />
>>>>>>> f6f914f (Alpha phase complete)
        </Col>
      </Row>
      {/***Table ***/}
      <Row>
<<<<<<< HEAD
        <Col lg='12'>
=======
        <Col lg="12">
>>>>>>> f6f914f (Alpha phase complete)
          <ProjectTables />
        </Col>
      </Row>
      {/***Blog Cards***/}
<<<<<<< HEAD
      {/* <Row>
=======
      <Row>
>>>>>>> f6f914f (Alpha phase complete)
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
<<<<<<< HEAD
      </Row> */}
=======
      </Row>
>>>>>>> f6f914f (Alpha phase complete)
    </div>
  );
};

export default Starter;

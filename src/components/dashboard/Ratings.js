import { Card, CardBody, CardTitle } from "reactstrap";
import Chart from "react-apexcharts";

const Ratings = () => {
  const options = {
    chart: {
      type: 'donut',
    },
    labels: ["5 star", "4 star", "3 start", "2 star", "1 star"],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  }

  const series = [44, 55, 41, 17, 15]

  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">My Ratings</CardTitle>
        <Chart options={options} series={series} type="donut" height="879" />
      </CardBody>
    </Card>
  );
};

export default Ratings;

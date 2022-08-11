<<<<<<< HEAD
import {
  Card,
  CardBody,
  //  CardSubtitle,
  CardTitle,
} from 'reactstrap'
import Chart from 'react-apexcharts'
=======
import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import Chart from "react-apexcharts";
>>>>>>> f6f914f (Alpha phase complete)

const SalesChart = () => {
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      stacked: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 4,
<<<<<<< HEAD
      colors: ['transparent'],
=======
      colors: ["transparent"],
>>>>>>> f6f914f (Alpha phase complete)
    },
    legend: {
      show: true,
    },
    plotOptions: {
      bar: {
        horizontal: false,
<<<<<<< HEAD
        columnWidth: '60%',
        borderRadius: 2,
      },
    },
    colors: ['#0d6efd', '#009efb', '#6771dc'],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
=======
        columnWidth: "30%",
        borderRadius: 2,
      },
    },
    colors: ["#0d6efd", "#009efb", "#6771dc"],
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
>>>>>>> f6f914f (Alpha phase complete)
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          plotOptions: {
            bar: {
<<<<<<< HEAD
              columnWidth: '60%',
=======
              columnWidth: "60%",
>>>>>>> f6f914f (Alpha phase complete)
              borderRadius: 7,
            },
          },
        },
      },
    ],
<<<<<<< HEAD
  }
  const series = [
    // {
    //   name: "2020",
    //   data: [20, 40, 50, 30, 40, 50, 30, 30, 40],
    // },
    {
      name: '2022',
      data: [10, 20, 40, 60, 20, 40, 90],
    },
  ]
=======
  };
  const series = [
    {
      name: "2020",
      data: [20, 40, 50, 30, 40, 50, 30, 30, 40],
    },
    {
      name: "2022",
      data: [10, 20, 40, 60, 20, 40, 60, 60, 20],
    },
  ];
>>>>>>> f6f914f (Alpha phase complete)

  return (
    <Card>
      <CardBody>
<<<<<<< HEAD
        <CardTitle tag="h5">Your % Conversion Rate</CardTitle>
        {/* <CardSubtitle className="text-muted" tag="h6">
           % montly conversion rate report
        </CardSubtitle> */}
        <Chart options={options} series={series} type="bar" height="379" />
      </CardBody>
    </Card>
  )
}

export default SalesChart
=======
        <CardTitle tag="h5">Sales Summary</CardTitle>
        <CardSubtitle className="text-muted" tag="h6">
          Yearly Sales Report
        </CardSubtitle>
        <Chart options={options} series={series} type="bar" height="379" />
      </CardBody>
    </Card>
  );
};

export default SalesChart;
>>>>>>> f6f914f (Alpha phase complete)

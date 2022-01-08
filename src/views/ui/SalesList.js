import { Card, CardBody, Table } from "reactstrap";
import user1 from "../../assets/images/users/user1.jpg";
import user2 from "../../assets/images/users/user2.jpg";
import user3 from "../../assets/images/users/user3.jpg";
import user4 from "../../assets/images/users/user4.jpg";
import user5 from "../../assets/images/users/user5.jpg";

const tableData = [
  {
    avatar: user1,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "073 345 1323",
    status: "pending",
    weeks: "01 Jan 2022",
    budget: "2441 Main Rd, Bedfordview",
    amount: 'R2500'
  },
  {
    avatar: user2,
    name: "Linda Motaung",
    email: "hgover@gmail.com",
    project: "074 6645 1326",
    status: "done",
    weeks: "02 Jan 2022",
    budget: "1415 Thomas St, pretoria",
    amount: 'R7500'
  },
  {
    avatar: user3,
    name: "Mary Cooper",
    email: "hgover@gmail.com",
    project: "063 345 0001",
    status: "holt",
    weeks: "02 Jan 2022",
    budget: " 389 Gemsbok St, santon",
    amount: 'R2000'
  },
  {
    avatar: user4,
    name: "Bothwell Sithole",
    email: "hgover@gmail.com",
    project: "061 145 3330",
    status: "pending",
    weeks: "03 Jan 2022",
    budget: "Street:  1535 Bo Meul St Fish Hoek",
    amount: 'R2500'
  },
  {
    avatar: user5,
    name: "Ronald Gover",
    email: "hgover@gmail.com",
    project: "078 845 9923",
    status: "done",
    weeks: "06 Jan 2022",
    budget: "883 Impala St, jhb central",
    amount: 'R3500'
  },
];

const SalesList = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Client Name</th>
                <th>Contact Number</th>
                {/* <th>Status</th> */}
                <th>Date</th>
                <th>Address</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <img
                        src={tdata.avatar}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.name}</h6>
                        <span className="text-muted">{tdata.email}</span>
                      </div>
                    </div>
                  </td>
                  <td>{tdata.project}</td>
                  <td>{tdata.weeks}</td>
                  <td>{tdata.budget}</td>
                  <td>{tdata.amount}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default SalesList;

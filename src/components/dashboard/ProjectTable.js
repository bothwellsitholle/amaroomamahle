import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
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
<<<<<<< HEAD
    project: "073 345 1323",
    status: "pending",
    weeks: "01 July 2022",
    budget: "R1500",
  },
  {
    avatar: user2,
    name: "Linda Motaung",
    email: "hgover@gmail.com",
    project: "074 6645 1326",
    status: "done",
    weeks: "02 July 2022",
    budget: "R2500",
  },
  {
    avatar: user3,
    name: "Amanda Cooper",
    email: "hgover@gmail.com",
    project: "063 345 0001",
    status: "done",
    weeks: "02 July 2022",
    budget: "R9000",
  },
  {
    avatar: user4,
    name: "Bothwell Sithole",
    email: "hgover@gmail.com",
    project: "061 145 3330",
    status: "pending",
    weeks: "03 July 2022",
    budget: "R7500",
  },
  {
    avatar: user5,
    name: "Max Williams",
    email: "hgover@gmail.com",
    project: "078 845 9923",
    status: "done",
    weeks: "06 Jan 2022",
    budget: "R2500",
=======
    project: "Flexy React",
    status: "pending",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user2,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Lading pro React",
    status: "done",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user3,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Elite React",
    status: "holt",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user4,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Flexy React",
    status: "pending",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user5,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Ample React",
    status: "done",
    weeks: "35",
    budget: "95K",
>>>>>>> f6f914f (Alpha phase complete)
  },
];

const ProjectTables = () => {
  return (
    <div>
      <Card>
        <CardBody>
<<<<<<< HEAD
          <CardTitle tag="h5">Recent Viewings</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {/* your list of recent viewings and their statuses */}
=======
          <CardTitle tag="h5">Project Listing</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of the projects
>>>>>>> f6f914f (Alpha phase complete)
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
<<<<<<< HEAD
                <th>Client Name</th>
                <th>Phone</th>

                <th>Status</th>
                <th>Date</th>
                <th>Cost</th>
=======
                <th>Team Lead</th>
                <th>Project</th>

                <th>Status</th>
                <th>Weeks</th>
                <th>Budget</th>
>>>>>>> f6f914f (Alpha phase complete)
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
                  <td>
                    {tdata.status === "pending" ? (
                      <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                    ) : tdata.status === "holt" ? (
                      <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>
                    ) : (
                      <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                    )}
                  </td>
                  <td>{tdata.weeks}</td>
                  <td>{tdata.budget}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectTables;

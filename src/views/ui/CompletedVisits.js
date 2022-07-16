import { Card, CardBody,  Table } from "reactstrap";
import DeleteIcon from '@mui/icons-material/Delete';




const CompletedVisits = ({visitsData, onDeleteVisit}) => {
  return (
    <div>
      <Card>
        <CardBody>
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Client Name</th>
                <th>Cell</th>
                {/* <th>Status</th> */}
                <th>Date</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {visitsData.map((tdata, index) => (
                <tr key={tdata.id} className="border-top">
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
                  <td><div style={{minWidth: 100}} className="mb-0">{tdata.project}</div></td>
                  {/* <td>
                    {tdata.status === "pending" ? (
                      <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                    ) : tdata.status === "holt" ? (
                      <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>
                    ) : (
                      <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                    )}
                  </td> */}
                  <td><div style={{minWidth: 100}} className="mb-0">{tdata.weeks} </div></td>
                  <td><div style={{minWidth: 100}} className="mb-0">{tdata.budget}</div></td>
                  <td>
                    <span style={{color: 'red', cursor: 'pointer'}} onClick={() => onDeleteVisit(tdata.id)}>
                      <DeleteIcon color="red" />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default CompletedVisits;

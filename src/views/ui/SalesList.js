import { Card, CardBody, Table } from 'reactstrap'
import DeleteIcon from '@mui/icons-material/Delete'

const SalesList = ({ salesData, deleteSale }) => {
  return (
    <div>
      <Card>
        <CardBody>
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Client Name</th>
                <th>Contact Number</th>
                <th>Date</th>
                <th>Address</th>
                <th>Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {salesData.map((tdata, index) => (
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
                  <td>{tdata.project}</td>
                  <td>{tdata.weeks}</td>
                  <td>{tdata.budget}</td>
                  <td>R{tdata.amount}</td>
                  <td>
                    <span style={{color: 'red', cursor: 'pointer'}} onClick={() => deleteSale(tdata.id)}>
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
  )
}

export default SalesList

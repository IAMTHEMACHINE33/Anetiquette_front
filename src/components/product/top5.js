import "../product/top5.css";
import Table from "react-bootstrap/Table";

function Top5() {
  return (
    <>
      <Table border hover size="sm">
        <thead>
          <tr className="text-center">
            <th>Rank</th>
            <th className="text-start">
              <span style={{ marginLeft: "70px" }}>Bidders Name</span>
            </th>
            <th>Bid</th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr className="align-middle">
            <td style={{ fontWeight: "bold" }}>1</td>
            <td className="text-start">
              <span>
                <img
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50px",
                    marginRight: "20px",
                  }}
                  src="https://indianmemetemplates.com/wp-content/uploads/Doge-with-a-gun.jpg"
                ></img>
              </span>
              Mark
            </td>

            <td style={{ color: "green", fontWeight: "500" }}>$12</td>
          </tr>
          <tr className="align-middle">
            <td style={{ fontWeight: "bold" }}>2</td>
            <td className="text-start">
              <span>
                <img
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50px",
                    marginRight: "20px",
                  }}
                  src="https://indianmemetemplates.com/wp-content/uploads/Doge-with-a-gun.jpg"
                ></img>
              </span>
              Mark
            </td>

            <td style={{ color: "green", fontWeight: "500" }}>$12</td>
          </tr>
          <tr className="align-middle">
            <td style={{ fontWeight: "bold" }}>3</td>
            <td className="text-start">
              <span>
                <img
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50px",
                    marginRight: "20px",
                  }}
                  src="https://indianmemetemplates.com/wp-content/uploads/Doge-with-a-gun.jpg"
                ></img>
              </span>
              Mark
            </td>

            <td style={{ color: "green", fontWeight: "500" }}>$12</td>
          </tr>
          <tr className="align-middle">
            <td style={{ fontWeight: "bold" }}>4</td>
            <td className="text-start">
              <span>
                <img
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50px",
                    marginRight: "20px",
                  }}
                  src="https://indianmemetemplates.com/wp-content/uploads/Doge-with-a-gun.jpg"
                ></img>
              </span>
              Mark
            </td>

            <td style={{ color: "green", fontWeight: "500" }}>$12</td>
          </tr>
          <tr className="align-middle">
            <td style={{ fontWeight: "bold" }}>5</td>
            <td className="text-start">
              <span>
                <img
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50px",
                    marginRight: "20px",
                  }}
                  src="https://indianmemetemplates.com/wp-content/uploads/Doge-with-a-gun.jpg"
                ></img>
              </span>
              Mark bahadur rai gharti  
            </td>

            <td style={{ color: "green", fontWeight: "500" }}>
              $121232132
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default Top5;

import React from "react";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";
import { Link } from "react-router-dom";
const Orders = (props) => {
  const {loading, error, orders} = props
  return (
    <div className=" d-flex justify-content-center align-items-center flex-column">
      {/* <div className="col-12 alert alert-info text-center mt-3">
                  No Orders
                    <Link
                      className="btn btn-success mx-2 px-3 py-2"
                      to="/"
                      style={{
                      fontSize: "12px",
                      }}
                    >
                      START SHOPPING
                    </Link>
      </div> */}

      <div className="table-responsive">
                <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>STATUS</th>
              <th>DATE</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr className={"alert-success"}>
              <td>
                <a href={`/`} className="link">
                  1
                </a>
              </td>
              <td>Paid</td>
              <td>Dec 12 2021</td>
              <td>$234</td>
            </tr>
          </tbody>
        </table>
      </div>        
    </div>
  );
};

export default Orders;

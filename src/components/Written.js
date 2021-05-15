import React from "react";

const Written = ({ info }) => {
  return (
    <div className="written">
      <table>
        <colgroup>
          <col span="1" style={{ width: "25%" }}></col>
          <col span="1" style={{ width: "25%" }}></col>
          <col span="1" style={{ width: "25%" }}></col>
          <col span="1" style={{ width: "25%" }}></col>
        </colgroup>
        <tbody>
          <tr className="tableHeader">
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Age</th>
          </tr>
          {info.map((item, index) => (
            <tr className="tableData" key={index}>
              <td>
                {item.name.first} {item.name.last}
              </td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.dob.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Written;

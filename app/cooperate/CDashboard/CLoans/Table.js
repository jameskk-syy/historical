import React from 'react';

const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Member Name</th>
          <th>ID Number</th>
          <th>Monthly Income</th>
          <th>Loan Category</th>
          <th>Loan Type</th>
          <th>Loan Amount</th>
          <th>Loan Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.memberName}</td>
            <td>{row.idNumber}</td>
            <td>{row.monthlyIncome}</td>
            <td>{row.loanCategory}</td>
            <td>{row.loanType}</td>
            <td>{row.loanAmount}</td>
            <td>{row.loanStatus}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
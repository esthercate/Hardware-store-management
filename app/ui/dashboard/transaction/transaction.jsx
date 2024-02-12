import React from 'react'

const Transaction = () => {
  return (
    <div>
      <h2>Latest Transactions</h2>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>Paid</td>
            <td>12.02.2024</td>
            <td>Ksh. 2,000</td>
          </tr>
          <tr>
            <td>Jane Doe</td>
            <td>Paid</td>
            <td>12.02.2024</td>
            <td>Ksh. 2,000</td>
          </tr>
          <tr>
            <td>Joni Doe</td>
            <td>Paid</td>
            <td>12.02.2024</td>
            <td>Ksh. 2,000</td>
          </tr>
          <tr>
            <td>Jose Doe</td>
            <td>Paid</td>
            <td>12.02.2024</td>
            <td>Ksh. 2,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Transaction
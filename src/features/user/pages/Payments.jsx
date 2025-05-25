import React from "react";

const Payments = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Payment History</h1>

        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b text-left">Date</th>
              <th className="py-2 px-4 border-b text-left">Amount</th>
              <th className="py-2 px-4 border-b text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">2025-05-10</td>
              <td className="py-2 px-4 border-b">$99.00</td>
              <td className="py-2 px-4 border-b text-green-600">Paid</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">2025-04-10</td>
              <td className="py-2 px-4 border-b">$99.00</td>
              <td className="py-2 px-4 border-b text-green-600">Paid</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">2025-03-10</td>
              <td className="py-2 px-4 border-b">$99.00</td>
              <td className="py-2 px-4 border-b text-red-600">Failed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payments;

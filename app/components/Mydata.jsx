import { useState } from "react";

const data = [
  {
    id: 1,
    name: "John Doe",
    income: 5000,
    category: "Health",
    status: "Employed",
    coverage: 10000,
    insuranceStatus: "Active",
  },
  {
    id: 2,
    name: "Jane Doe",
    income: 4500,
    category: "Life",
    status: "Unemployed",
    coverage: 8000,
    insuranceStatus: "Inactive",
  },
  {
    id: 3,
    name: "Alice Johnson",
    income: 7000,
    category: "Health",
    status: "Employed",
    coverage: 15000,
    insuranceStatus: "Active",
  },
  {
    id: 4,
    name: "Bob Smith",
    income: 3000,
    category: "Car",
    status: "Employed",
    coverage: 5000,
    insuranceStatus: "Active",
  },
  {
    id: 5,
    name: "Charlie Brown",
    income: 6000,
    category: "Home",
    status: "Self-Employed",
    coverage: 12000,
    insuranceStatus: "Active",
  },
  {
    id: 6,
    name: "David Wilson",
    income: 4000,
    category: "Health",
    status: "Unemployed",
    coverage: 7000,
    insuranceStatus: "Inactive",
  },
  {
    id: 7,
    name: "Ella Thomas",
    income: 5500,
    category: "Life",
    status: "Employed",
    coverage: 9000,
    insuranceStatus: "Active",
  },
  {
    id: 8,
    name: "Frank Martin",
    income: 4800,
    category: "Car",
    status: "Self-Employed",
    coverage: 6000,
    insuranceStatus: "Active",
  },
  {
    id: 9,
    name: "Grace Lee",
    income: 5200,
    category: "Home",
    status: "Employed",
    coverage: 11000,
    insuranceStatus: "Active",
  },
  {
    id: 10,
    name: "Hank Green",
    income: 6300,
    category: "Health",
    status: "Self-Employed",
    coverage: 13000,
    insuranceStatus: "Active",
  },
  {
    id: 11,
    name: "Ivy White",
    income: 5800,
    category: "Life",
    status: "Employed",
    coverage: 14000,
    insuranceStatus: "Active",
  },
  {
    id: 12,
    name: "Jack Black",
    income: 5400,
    category: "Car",
    status: "Unemployed",
    coverage: 10000,
    insuranceStatus: "Inactive",
  },
];

//   Column styles
const col_styles = {
  fontFamily: "poppins",
  fontSize: "16px",
  fontWeight: "600",
  color: "white",
};
// row data styles
const row_styles = {
  fontFamily: "poppins",
  fontSize: "13px",
  fontWeight: "400",
  color: "black",
  textAlign: "center",
};

const columns = [
  { key: "name", label: "Member Name" },
  { key: "id", label: "ID Number" },
  { key: "income", label: "Monthly Income" },
  { key: "category", label: "Insurance Category" },
  { key: "status", label: "Employment Status" },
  { key: "coverage", label: "Coverage Amount" },
  { key: "insuranceStatus", label: "Insurance Status" },
];

const rowsPerPage = 10;

const DataTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState(columns[0].key);
  const [filterId, setFilterId] = useState("");

  const handleSortChange = (e) => {
    setSortColumn(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterId(e.target.value);
    setCurrentPage(1);
  };

  const filteredData = filterId
    ? data.filter((item) => item.id === Number(filterId))
    : data;

  const sortedData = filteredData.sort((a, b) => {
    if (a[sortColumn] < b[sortColumn]) return -1;
    if (a[sortColumn] > b[sortColumn]) return 1;
    return 0;
  });

  const renderTableRows = () => {
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return sortedData.slice(start, end).map((item) => (
      <tr key={item.id}>
        {columns.map((col) => (
          <td
            style={row_styles}
            key={col.key}
            className={`py-2 px-4 border ${
              col.key === sortColumn ? "bg-purple-200" : ""
            }`}
          >
            {item[col.key]}
          </td>
        ))}
      </tr>
    ));
  };

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  return (
    <div className="container mx-auto pt-1 ">
      {/* <h1 className="text-2xl font-bold mb-4">Paginated Data Table</h1> */}
      <div className="mb-2 flex space-x-4">
        <select
          className="border px-2 py-1 rounded-lg outline-none mini_s:w-32"
          style={{
            border: "1px solid #76c5dc",
            fontFamily: "poppins",
            fontSize: "13px",
            fontWeight: "600",
            color: "black",
          }}
          value={sortColumn}
          onChange={handleSortChange}
        >
          {columns.map((col) => (
            <option key={col.key} value={col.key}>
              Sort by {col.label}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Filter by ID"
          value={filterId}
          onChange={handleFilterChange}
          className="border px-2 py-1 rounded-lg outline-none  mini_s:w-32"
          style={{
            border: "1px solid #76c5dc",
            fontFamily: "poppins",
            fontSize: "13px",
            fontWeight: "600",
            color: "black",
          }}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr className="bg-green-400">
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="py-2 px-4 border"
                  style={col_styles}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{renderTableRows()}</tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-lg">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          className="px-4 py-2 bg-gray-300 rounded"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DataTable;

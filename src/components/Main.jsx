
import { useState } from "react";
import next from "../assets/next.png";
import pervious from "../assets/back.png";
import player from "../assets/tom_brady 1.png";
import SelectOption from "./Selectoption";
export const Main = () => {
    const [rowsPerPage, setRowsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const data = [
    {
      name: "Tom Brady",
      team: "Team A",
      position: "Forward",
      salary: "$100,000",
      points: 51,
    },
    {
      name: "Jane Smith",
      team: "Team B",
      position: "Midfielder",
      salary: "$80,000",
      points: 40,
    },
    {
      name: "Mike Johnson",
      team: "Team A",
      position: "Defender",
      salary: "$90,000",
      points: 35,
    },
    {
      name: "Mike Johnson",
      team: "Team A",
      position: "Defender",
      salary: "$90,000",
      points: 35,
    },
    {
      name: "Mike Johnson",
      team: "Team A",
      position: "Defender",
      salary: "$90,000",
      points: 35,
    },
    {
      name: "Mike Johnson",
      team: "Team A",
      position: "Defender",
      salary: "$90,000",
      points: 35,
    },
    {
      name: "Mike Johnson",
      team: "Team A",
      position: "Defender",
      salary: "$90,000",
      points: 35,
    },
    {
      name: "Mike Johnson",
      team: "Team A",
      position: "Defender",
      salary: "$90,000",
      points: 35,
    },
    {
      name: "Mike Johnson",
      team: "Team A",
      position: "Defender",
      salary: "$90,000",
      points: 35,
    },
    {
      name: "Mike Johnson",
      team: "Team A",
      position: "Defender",
      salary: "$90,000",
      points: 35,
    },
    {
      name: "Mike Johnson",
      team: "Team A",
      position: "Defender",
      salary: "$90,000",
      points: 35,
    },
    // Add more dummy data as needed
  ];
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  // Change page
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Change rows per page
  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 8));
    setCurrentPage(1);
  };
  return (
    <>
      <br />
      <SelectOption />
      <br />
    <div className="container mx-auto p-4 rounded">
        <div className="grid grid-cols-8 sm:grid-cols-8 md:grid-cols-8 lg:grid-cols-8  gap-4 rounded">
          {/* Add your content here */}
          {/* Example grid items */}
          <div className="col-span-8 sm:col-span-5 md:col-span-5 lg:col-span-5  ">
            <div className="flex flex-col">
              <div className="overflow-x-auto">
                <div className="p-1.5 w-full inline-block align-middle">
                  <div className="  rounded-lg">
                    <div className="flex flex-col">
                      <div className="overflow-x-auto">
                        <div className="p-1.5 w-full inline-block align-middle">
                          <div className="  rounded-lg">
                            <table className="min-w-full table-auto  rounded-md">
                              <thead className="rounded">
                                <tr>
                                  <th className="px-6 py-3 bg-gr-700 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                                    Name
                                  </th>
                                  <th className="px-6 py-3 bg-gr-700 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                                    Team
                                  </th>
                                  <th className="px-6 py-3 bg-gr-700 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                                    Position
                                  </th>
                                  <th className="px-6 py-3 bg-gr-700 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                                    Salary
                                  </th>
                                  <th className="px-6 py-3 bg-gr-700 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                                    Points
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="bg-gr-800 text-white rounded-md ">
                                {currentRows.map((item, index) => (
                                  <tr key={index} className="hover:bg-yl-200">
                                    <td className="px-6 py-4 whitespace-no-wrap">
                                      {item.name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap">
                                      {item.team}
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap">
                                      {item.position}
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap">
                                      {item.salary}
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap">
                                      {item.points}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>

                            {/* Pagination controls */}
                            <div className="bg-gr-700 flex items-center justify-between h-12 rounded">
                              <div className="flex justify-center items-center">
                                <span className="text-lg leading-5 text-white">
                                  page{" "}
                                </span>
                                <select
                                  className="mx-2  bg-gr-900  rounded-md px-2 py-1 text-lg leading-5 text-white"
                                  value={rowsPerPage}
                                  onChange={handleRowsPerPageChange}
                                >
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                </select>
                              </div>

                              <div className="flex justify-center items-center">
                                <span className="text-lg leading-5 text-white">
                                  Rows per page
                                </span>
                                <select
                                  className="mx-2  bg-gr-900  rounded-md px-2 py-1 text-lg leading-5 text-white"
                                  value={rowsPerPage}
                                  onChange={handleRowsPerPageChange}
                                >
                                  <option>8</option>
                                  <option>20</option>
                                  <option>30</option>
                                </select>
                              </div>

                              <div className="">
                                <span className="text-lg leading-5  text-white">
                                  {indexOfFirstRow + 1}-
                                  {indexOfLastRow > data.length
                                    ? data.length
                                    : indexOfLastRow}{" "}
                                  of {data.length}
                                </span>

                                <button
                                  className="px-4 py-2 rounded-md text-sm leading-5 font-medium text-white mr-2"
                                  disabled={currentPage === 1}
                                  onClick={() =>
                                    handlePageChange(currentPage - 1)
                                  }
                                >
                                  <img
                                    src={pervious}
                                    className="h-4 w-5 justify-start "
                                    alt="pervious"
                                  />
                                </button>
                                <button
                                  className=" py-2  rounded-md text-sm leading-5 font-medium text-white"
                                  disabled={indexOfLastRow >= data.length}
                                  onClick={() =>
                                    handlePageChange(currentPage + 1)
                                  }
                                >
                                  <img
                                    src={next}
                                    className="h-4 w-5 justify-start "
                                    alt="next"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-8 sm:col-span-3 md:col-span-3 lg:col-span-3  flex flex-col items-center rounded-lg flex-none order-1 flex-grow-0">
            <div className="flex-none order-none self-stretch flex-grow-0">
              <img src={player} className="justify-center bg-gr-900" alt="" />
            </div>
            <div className="bg-gr-800 flex flex-col  rounded-lg flex-none order-1 self-stretch flex-grow-0">
              <span className="text-3xl p-4 whitespace-nowrap dark:text-white flex flex-col items-center">
                Tom Brady
              </span>
              <div className=" not-italic font-normal  flex flex-col items-center text-center flex-none order-none flex-grow-0">
                <span className="text-8xl p-3 whitespace-nowrap dark:text-white flex flex-col items-center">
                  51
                </span>
              </div>
              <div className=" not-italic font-normal  flex flex-col items-center text-center flex-none order-none flex-grow-0">
                <span className="text-xl p-9 whitespace-nowrap dark:text-white flex flex-col items-center">
                  Points
                </span>
              </div>
            </div>
          </div>
          {/* Add more grid items as needed */}
        </div>
      </div>
    </>
  )
}

export default Main;
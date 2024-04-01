import React, { useEffect, useState } from "react";
import Header from "../partials/Header";

import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export default function TeamMembers() {
  const [uniqueTeam, setUniqueTeam] = useState([]);
  const teamMembers = useSelector((state) => state.TeamMembers);
  const teams = useSelector((state) => state.teams);
  const navigate = useNavigate();

  useEffect(() => {
    if (teams.length === 0) {
      navigate("/teams");
    }
  }, []);

  const { id } = useParams();

  const uniqueMembers = teamMembers?.filter(
    (item) => item.teamId === parseInt(id)
  );

  useEffect(() => {
    if (id) {
      const uqTeam = teams.filter((item) => item.teamId === parseInt(id));
      console.log(uqTeam);
      setUniqueTeam(uqTeam);
    }
  }, [id]);

  return (
    <>
      <Header />
      <div className="flex items-center justify-center">
        <h1 className="text-blue-500 px-6 py-2 rounded-lg m-2">
          Team {uniqueTeam[0]?.teamName}
        </h1>
      </div>

      <div className="w-full text-sm text-left text-gray-500  overflow-x-auto flex justify-center">
        <table className="w-full md:w-1/2 lg:w-1/2 text-sm text-left text-gray-500 m-2">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    disabled
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Member Name
              </th>
            </tr>
          </thead>

          <tbody>
            {uniqueMembers && uniqueMembers.length > 0
              ? uniqueMembers.map((item, index) => (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    key={index}
                  >
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          disabled
                        />
                        <label
                          htmlFor="checkbox-table-search-1"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>

                    <td className="px-6 py-4">{index + 1}</td>

                    <td className="px-6 py-4">{item.userName}</td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
      <div>
        {uniqueMembers && uniqueMembers.length > 0 ? null : (
          <div className="flex items-center justify-center m-2">
            <p>No member found.</p>
          </div>
        )}
      </div>
    </>
  );
}

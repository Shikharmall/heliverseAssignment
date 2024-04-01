import React, { useState } from "react";
import Header from "../partials/Header";
import { useDispatch } from "react-redux";
import { createTeamActions } from "../redux/actions";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Teams() {
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.teams);
  //console.log(teams);

  const [teamName, setTeamName] = useState("");
  const submitHandler = () => {
    try {
      dispatch(createTeamActions(teamName, 6));
      setTeamName("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Header />
      <div className="flex items-center justify-center">
        <input
          type="text"
          value={teamName}
          onChange={(e) => {
            setTeamName(e.target.value);
          }}
          placeholder="Enter team name"
          className="border border-gray-500 px-6 py-2 rounded-lg m-2"
        />
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-lg m-2"
          onClick={() => {
            submitHandler();
          }}
          disabled={teamName === "" ? true : false}
        >
          Add Team
        </button>
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
                Team ID
              </th>
              <th scope="col" className="px-6 py-3">
                Team Name
              </th>
              <th scope="col" className="px-6 py-3">
                View Members
              </th>
            </tr>
          </thead>

          <tbody>
            {teams && teams.length > 0
              ? teams.map((item, index) => (
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

                    <td className="px-6 py-4">{item.teamId}</td>

                    <td className="px-6 py-4">{item.teamName}</td>

                    <td className="px-6 py-4">
                      <NavLink
                        to={{
                          pathname: `/teamMembers/${item.teamId}`,
                        }}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                      >
                        View Members
                      </NavLink>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
      <div>
        {teams && teams.length > 0 ? null : (
          <div className="flex items-center justify-center m-2">
            <p>No teams found.</p>
          </div>
        )}
      </div>
    </>
  );
}

import React, { useEffect, useState } from "react";
import Header from "../partials/Header";
import { getAllUsersAPI, getAllUsersDetailsAPI } from "../api/UserAPI";
import Pagination from "../components/Pagination";
import UserData from "../components/UserData";

export default function Home() {
  const [usersData, setUsersData] = useState([]);
  const [usersDetailsData, setUsersDetailsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [domain, setDomain] = useState("");
  const [gender, setGender] = useState("");
  const [available, setAvailable] = useState("");
  const [loading, setLoading] = useState(false);

  const getAllUsersFunc = async (page, domain, gender, available) => {
    setLoading(true);
    try {
      const response = await getAllUsersAPI(page, domain, gender, available);
      //console.log(response);
      if (response.status === 200) {
        setLoading(false);
        setUsersData(response?.data?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getAllUsersDetailsFunc = async () => {
    setLoading(true);
    try {
      const response = await getAllUsersDetailsAPI();
      //console.log(response);
      if (response.status === 200) {
        setLoading(false);
        setUsersDetailsData(response?.data?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsersFunc(currentPage, domain, gender, available);
  }, [currentPage, domain, gender, available]);

  useEffect(() => {
    getAllUsersDetailsFunc();
  }, []);

  const setPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Header />

      <div className="flex flex-wrap items-center justify-end py-4 px-4 bg-white dark:bg-gray-800 rounded-tl-lg rounded-tr-lg">
        <div className="relative p-2 box-border">
          <select
            className="block p-2 px-3 text-sm text-gray-500 border border-gray-300 placeholder-gray-400 focus:outline-none rounded-lg w-full bg-gray-50 focus:ring-gray-500 focus:border-gray-500 box-border"
            value={domain}
            onChange={(e) => {
              setDomain(e.target.value);
            }}
          >
            <option value="">All domain</option>
            <option value="Marketing">Marketing</option>
            <option value="Finance">Finance</option>
            <option value="IT">IT</option>
            <option value="Sales">Sales</option>
            <option value="Management">Management</option>
            <option value="UI Designing">UI Designing</option>
            <option value="Business Development">Business Development</option>
          </select>
        </div>

        <div className="relative p-2 box-border">
          <select
            className="block p-2 px-3 text-sm text-gray-500 border border-gray-300 placeholder-gray-400 focus:outline-none rounded-lg w-full bg-gray-50 focus:ring-gray-500 focus:border-gray-500 box-border"
            value={gender}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          >
            <option value="">All gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Bigender">Bigender</option>
            <option value="Agender">Agender</option>
          </select>
        </div>

        <div className="relative p-2 box-border">
          <select
            className="block p-2 px-3 text-sm text-gray-500 border border-gray-300 placeholder-gray-400 focus:outline-none rounded-lg w-full bg-gray-50 focus:ring-gray-500 focus:border-gray-500 box-border"
            value={gender}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          >
            <option value="">Available</option>
            <option value="Male">Available</option>
            <option value="Female">Not available</option>
            <option value="Agender">Agender</option>
          </select>
        </div>

        <div className="relative p-2 box-border">
          <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="table-search-users"
            className="block p-2 pl-10 text-sm text-gray-500 border border-gray-300 placeholder-gray-400 focus:outline-none rounded-lg w-full bg-gray-50 focus:ring-gray-500 focus:border-gray-500 box-border"
            placeholder="Search for users"
            //value={search}
            //onChange={filterhoadata}
          />
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center">
          <p>Loading.....</p>
        </div>
      ) : (
        <UserData usersData={usersData} />
      )}

      <Pagination
        currentPage={currentPage}
        usersData={usersData}
        setPage={setPage}
        usersDetailsData={usersDetailsData}
      />
    </>
  );
}

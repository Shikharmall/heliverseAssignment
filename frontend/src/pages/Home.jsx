import React, { useEffect, useState } from "react";
import Header from "../partials/Header";
import { getAllUsersAPI, getAllUsersDetailsAPI } from "../api/UserAPI";
import Pagination from "../components/Pagination";
import UserData from "../components/UserData";

export default function Home() {
  const [usersData, setUsersData] = useState([]);
  const [search, setSearch] = useState("");
  const [usersDataCount, setUsersDataCount] = useState(0);
  const [usersDetailsData, setUsersDetailsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [domain, setDomain] = useState("");
  const [gender, setGender] = useState("");
  const [uniqueGender, setUniqueGender] = useState([]);
  const [uniqueDomain, setUniqueDomain] = useState([]);
  const [available, setAvailable] = useState("");
  const [loading, setLoading] = useState(false);

  const getAllUsersFunc = async (page, domain, gender, available,search) => {
    setLoading(true);
    try {
      const response = await getAllUsersAPI(page, domain, gender, available , search);
      console.log(response);
      if (response.status === 200) {
        setLoading(false);
        setUsersData(response?.data?.data);
        setUsersDataCount(response?.data?.count);
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
        const uniqueGenders = [
          ...new Set(response?.data?.data?.map((item) => item.gender)),
        ];
        const uniqueDomain = [
          ...new Set(response?.data?.data?.map((item) => item.domain)),
        ];
        setUniqueGender(uniqueGenders);
        setUniqueDomain(uniqueDomain);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsersFunc(currentPage, domain, gender, available, search);
  }, [currentPage, domain, gender, available, search]);

  useEffect(() => {
    getAllUsersDetailsFunc();
  }, []);

  const setPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Header />

      <div className="flex flex-wrap items-center flex-col md:flex-row justify-end py-4 bg-white dark:bg-gray-800 rounded-tl-lg rounded-tr-lg mx-3 sm:mx-20">
        <div className="relative p-2 box-border w-full md:w-auto">
          <select
            className="block p-2 px-3 text-sm text-gray-500 border border-gray-300 placeholder-gray-400 focus:outline-none rounded-lg w-full bg-gray-50 focus:ring-gray-500 focus:border-gray-500 box-border"
            value={domain}
            onChange={(e) => {
              setDomain(e.target.value);
              setCurrentPage(1);
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

        <div className="relative p-2 box-border w-full md:w-auto">
          <select
            className="block p-2 px-3 text-sm text-gray-500 border border-gray-300 placeholder-gray-400 focus:outline-none rounded-lg w-full bg-gray-50 focus:ring-gray-500 focus:border-gray-500 box-border"
            value={gender}
            onChange={(e) => {
              setGender(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="">All gender</option>
            {uniqueGender &&
              uniqueGender.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
          </select>
        </div>

        <div className="relative p-2 box-border w-full md:w-auto">
          <select
            className="block p-2 px-3 text-sm text-gray-500 border border-gray-300 placeholder-gray-400 focus:outline-none rounded-lg w-full bg-gray-50 focus:ring-gray-500 focus:border-gray-500 box-border"
            value={available}
            onChange={(e) => {
              setAvailable(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="">All avab/unavab</option>
            <option value="1">Available</option>
            <option value="0">Not available</option>
          </select>
        </div>

        <div className="relative p-2 box-border w-full lg:w-auto">
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
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
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
        setPage={setPage}
        usersDataCount={usersDataCount}
      />
    </>
  );
}

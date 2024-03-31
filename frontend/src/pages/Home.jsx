import React, { useState } from "react";
import Header from "../partials/Header";

export default function Home() {
  const [usersData, setUsersData] = useState([
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ]);
  return (
    <>
      
      <Header />
      
      <div className="flex flex-wrap items-center justify-end py-4 px-4 bg-white dark:bg-gray-800 rounded-tl-lg rounded-tr-lg">
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

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full px-20">
        {usersData.map((_, index) => (
          <div class="relative mx-auto w-full">
            <a
              //href="#"
              class="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full"
            >
              <div class="shadow px-4 py-4 rounded-lg bg-gray-200">
                <div class="mt-1">
                  <div class="grid grid-cols-2 mt-2">
                    <div class="flex items-center">
                      <div class="relative">
                        <img
                          src="https://robohash.org/sintessequaerat.png?size=50x50&set=set1"
                          alt="user-profile-image"
                          class="inline-block w-10 h-10 bg-gray-500 rounded-full"
                        />
                      </div>

                      <p class="ml-2 text-gray-800 line-clamp-1 text-lg">
                        John Doe
                      </p>
                    </div>
                  </div>
                  <p
                    class="mt-2 text-sm text-gray-800 line-clamp-1"
                    title="New York, NY 10004, United States"
                  >
                    {`abhay@gmail.com`}
                  </p>
                </div>

                <div class="grid grid-cols-2 grid-rows-2 gap-4 mt-8">
                  <p class="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                    <svg
                      fill="#000000"
                      class="inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current text-gray-800"
                      viewBox="0 0 256 256"
                      id="Flat"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M219.9978,23.95557q-.00219-.56984-.05749-1.13819c-.018-.18408-.05237-.36279-.07849-.54443-.02979-.20557-.05371-.41211-.09424-.61621-.04029-.20362-.09607-.40088-.14649-.60059-.04541-.18017-.08484-.36084-.13867-.53906-.05884-.19434-.13159-.38135-.19971-.57129-.06445-.17969-.12353-.36084-.19677-.5376-.07349-.17724-.15967-.34668-.24109-.51953-.08582-.18213-.16687-.36621-.26257-.54492-.088-.16455-.18824-.32031-.2837-.48047-.10534-.17627-.2052-.355-.32031-.52685-.11572-.17334-.24475-.33545-.369-.502-.11-.14746-.21252-.29834-.3302-.4414-.23462-.28614-.4834-.55957-.74316-.82227-.01782-.01807-.03247-.03809-.05054-.05615-.01831-.01856-.03857-.0332-.05688-.05127q-.39441-.38966-.82227-.74317c-.13965-.11474-.28686-.21435-.43042-.32177-.16992-.127-.33606-.25879-.51269-.377-.16883-.11328-.34424-.21093-.51734-.31445-.16333-.09765-.32324-.20019-.49145-.29-.1731-.09277-.3512-.1709-.52759-.25439-.17871-.08448-.35462-.17383-.538-.24951-.16932-.07032-.34229-.12647-.514-.18848-.19751-.07129-.39307-.14649-.59534-.208-.16882-.05078-.34045-.08789-.51086-.13135-.20874-.05322-.41529-.11132-.62818-.15332-.19055-.03759-.383-.05957-.57507-.08789-.19544-.02881-.38831-.06494-.58679-.08447-.33252-.03271-.666-.04541-.99988-.05078C208.11853,12.0083,208.0603,12,208,12H172a12,12,0,0,0,0,24h7.0293l-15.051,15.05127A71.97526,71.97526,0,1,0,108,178.981V192H88a12,12,0,0,0,0,24h20v16a12,12,0,0,0,24,0V216h20a12,12,0,0,0,0-24H132V178.981A71.928,71.928,0,0,0,180.27783,68.69287L196,52.9707V60a12,12,0,0,0,24,0V24C220,23.98486,219.9978,23.97021,219.9978,23.95557ZM120,156a48,48,0,1,1,48-48A48.05468,48.05468,0,0,1,120,156Z" />
                    </svg>
                    <span class="mt-2 xl:mt-0">{`Male`}</span>
                  </p>
                  <p class="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                    <svg
                      class="inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 9C2 7.89543 2.89543 7 4 7H20C21.1046 7 22 7.89543 22 9V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V9Z"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16 7V4C16 2.89543 15.1046 2 14 2H10C8.89543 2 8 2.89543 8 4V7"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M22 12L12.3922 13.9216C12.1333 13.9733 11.8667 13.9733 11.6078 13.9216L2 12"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span class="mt-2 xl:mt-0">{`IT sector`}</span>
                  </p>
                  <p class="inline-flex flex-col xl:flex-row xl:items-center text-white">
                    {false ? (
                      <span class="mt-2 xl:mt-0 bg-green-500 px-4 rounded-lg py-2">
                        Available
                      </span>
                    ) : (
                      <span class="mt-2 xl:mt-0 bg-red-500 px-4 rounded-lg py-2">
                        Not available
                      </span>
                    )}
                  </p>
                  <p class="inline-flex flex-col xl:flex-row xl:items-center text-white">
                    <span class="mt-2 xl:mt-0 bg-blue-500 px-4 rounded-lg py-2 cursor-pointer">
                      Add to team
                    </span>
                  </p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      {usersData.length > 0 ? null : (
        <div className="flex items-center justify-center w-[100%]">
          <p>No users found.</p>
        </div>
      )}

      {/*{societydata.length > 0 ? (
        <a className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          {currentPage} of {Math.ceil(totalPosts / postsPerPage)}
        </a>
      ) : (
        <a className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          0 of 0
        </a>
      )} */}

      {/*<nav aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px text-sm">
          <li>
            {societydata.length > 0 ? (
              <>
                {currentPage === 1 ? (
                  <a
                    className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover-text-gray-700 dark-bg-gray-800 dark-border-gray-700 dark-text-gray-400 dark-hover-bg-gray-700 dark-hover-text-white cursor-pointer"
                    onClick={() =>
                      paginate(Math.ceil(totalPosts / postsPerPage))
                    }
                  >
                    Previous
                  </a>
                ) : (
                  <a
                    className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover-bg-gray-100 hover-text-gray-700 dark-bg-gray-800 dark-border-gray-700 dark-text-gray-400 dark-hover-bg-gray-700 dark-hover-text-white cursor-pointer"
                    onClick={() => paginate(currentPage - 1)}
                  >
                    Previous
                  </a>
                )}
              </>
            ) : (
              <a className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover-bg-gray-100 hover-text-gray-700 dark-bg-gray-800 dark-border-gray-700 dark-text-gray-400 dark-hover-bg-gray-700 dark-hover-text-white cursor-pointer">
                Previous
              </a>
            )}
          </li>

          <li>
            {societydata.length > 0 ? (
              <a className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover-bg-gray-100 hover-text-gray-700 dark-bg-gray-800 dark-border-gray-700 dark-text-gray-400 dark-hover-bg-gray-700 dark-hover-text-white">
                {currentPage}
              </a>
            ) : (
              <a className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover-bg-gray-100 hover-text-gray-700 dark-bg-gray-800 dark-border-gray-700 dark-text-gray-400 dark-hover-bg-gray-700 dark-hover-text-white">
                0
              </a>
            )}
          </li>

          <li>
            {societydata.length > 0 ? (
              <>
                {currentPage === Math.ceil(totalPosts / postsPerPage) ? (
                  <a
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover-bg-gray-100 hover-text-gray-700 dark-bg-gray-800 dark-border-gray-700 dark-text-gray-400 dark-hover-bg-gray-700 dark-hover-text-white cursor-pointer"
                    //onClick={() => paginate(1)}
                  >
                    Next
                  </a>
                ) : (
                  <a
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover-bg-gray-100 hover-text-gray-700 dark-bg-gray-800 dark-border-gray-700 dark-text-gray-400 dark-hover-bg-gray-700 dark-hover-text-white cursor-pointer"
                    //onClick={() => paginate(currentPage + 1)}
                  >
                    Next
                  </a>
                )}
              </>
            ) : (
              <a className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover-bg-gray-100 hover-text-gray-700 dark-bg-gray-800 dark-border-gray-700 dark-text-gray-400 dark-hover-bg-gray-700 dark-hover-text-white cursor-pointer">
                Next
              </a>
            )}
          </li>
        </ul>
      </nav>*/}
    </>
  );
}

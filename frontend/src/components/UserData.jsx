import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToTeamActions } from "../redux/actions";

export default function UserData({ usersData }) {
  const [isOpen, setisOpen] = useState(false);
  const teams = useSelector((state) => state.teams);
  const [options, setOptions] = useState("");
  const [userNamee, setUserNamee] = useState({});
  const dispatch = useDispatch();

  const submitHandler = () => {
    try {
      dispatch(addToTeamActions(options, userNamee));
      setOptions("");
      setUserNamee("");
      setisOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full px-3 sm:px-20 ">
        {usersData.map((item, index) => (
          <div className="relative mx-auto w-full" key={item.id}>
            <a
              //href="#"
              className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full"
            >
              <div className="shadow px-4 py-4 rounded-lg bg-gray-200">
                <div className="mt-1">
                  <div className="grid grid-cols-1 mt-2">
                    <div className="flex items-center">
                      <div className="relative">
                        <img
                          src={item.avatar}
                          alt="user-profile-image"
                          className="inline-block w-10 h-10 bg-gray-500 rounded-full"
                        />
                      </div>

                      <p className="ml-2 text-gray-800 text-sm">
                        {item.first_name} {item.last_name}
                      </p>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-800">{item.email}</p>
                </div>

                <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-8">
                  <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                    <svg
                      fill="#000000"
                      className="inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current text-gray-800"
                      viewBox="0 0 256 256"
                      id="Flat"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M219.9978,23.95557q-.00219-.56984-.05749-1.13819c-.018-.18408-.05237-.36279-.07849-.54443-.02979-.20557-.05371-.41211-.09424-.61621-.04029-.20362-.09607-.40088-.14649-.60059-.04541-.18017-.08484-.36084-.13867-.53906-.05884-.19434-.13159-.38135-.19971-.57129-.06445-.17969-.12353-.36084-.19677-.5376-.07349-.17724-.15967-.34668-.24109-.51953-.08582-.18213-.16687-.36621-.26257-.54492-.088-.16455-.18824-.32031-.2837-.48047-.10534-.17627-.2052-.355-.32031-.52685-.11572-.17334-.24475-.33545-.369-.502-.11-.14746-.21252-.29834-.3302-.4414-.23462-.28614-.4834-.55957-.74316-.82227-.01782-.01807-.03247-.03809-.05054-.05615-.01831-.01856-.03857-.0332-.05688-.05127q-.39441-.38966-.82227-.74317c-.13965-.11474-.28686-.21435-.43042-.32177-.16992-.127-.33606-.25879-.51269-.377-.16883-.11328-.34424-.21093-.51734-.31445-.16333-.09765-.32324-.20019-.49145-.29-.1731-.09277-.3512-.1709-.52759-.25439-.17871-.08448-.35462-.17383-.538-.24951-.16932-.07032-.34229-.12647-.514-.18848-.19751-.07129-.39307-.14649-.59534-.208-.16882-.05078-.34045-.08789-.51086-.13135-.20874-.05322-.41529-.11132-.62818-.15332-.19055-.03759-.383-.05957-.57507-.08789-.19544-.02881-.38831-.06494-.58679-.08447-.33252-.03271-.666-.04541-.99988-.05078C208.11853,12.0083,208.0603,12,208,12H172a12,12,0,0,0,0,24h7.0293l-15.051,15.05127A71.97526,71.97526,0,1,0,108,178.981V192H88a12,12,0,0,0,0,24h20v16a12,12,0,0,0,24,0V216h20a12,12,0,0,0,0-24H132V178.981A71.928,71.928,0,0,0,180.27783,68.69287L196,52.9707V60a12,12,0,0,0,24,0V24C220,23.98486,219.9978,23.97021,219.9978,23.95557ZM120,156a48,48,0,1,1,48-48A48.05468,48.05468,0,0,1,120,156Z" />
                    </svg>
                    <span className="mt-2 xl:mt-0">{item.gender}</span>
                  </p>
                  <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                    <svg
                      className="inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 9C2 7.89543 2.89543 7 4 7H20C21.1046 7 22 7.89543 22 9V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V9Z"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16 7V4C16 2.89543 15.1046 2 14 2H10C8.89543 2 8 2.89543 8 4V7"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M22 12L12.3922 13.9216C12.1333 13.9733 11.8667 13.9733 11.6078 13.9216L2 12"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="mt-2 xl:mt-0 line-clamp-1">
                      {item.domain}
                    </span>
                  </p>
                  <p className="inline-flex flex-col xl:flex-row xl:items-center text-white">
                    {item.available ? (
                      <span className="mt-2 xl:mt-0 bg-green-500 px-4 rounded-lg py-2">
                        Available
                      </span>
                    ) : (
                      <span className="mt-2 xl:mt-0 bg-red-500 px-4 rounded-lg py-2">
                        Not available
                      </span>
                    )}
                  </p>
                  <p className="inline-flex flex-col xl:flex-row xl:items-center text-white">
                    {item.available ? (
                      <span
                        className="mt-2 xl:mt-0 bg-blue-500 px-4 rounded-lg py-2 cursor-pointer"
                        title="Click to add user to created team."
                        onClick={() => {
                          setisOpen(true);
                          setUserNamee(item.first_name + " " + item.last_name);
                        }}
                      >
                        Add to team
                      </span>
                    ) : (
                      <span
                        className="mt-2 xl:mt-0 bg-blue-500 px-4 rounded-lg py-2"
                        title="Click to add user to created team."
                      >
                        Add to team
                      </span>
                    )}
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

      {isOpen ? (
        <div className={`fixed inset-0 z-50 flex justify-center items-center`}>
          <div
            data-state="open"
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in"
            data-aria-hidden="true"
            aria-hidden="true"
            style={{ pointerEvents: "auto" }}
          ></div>
          <div
            role="dialog"
            id="radix-:r3:"
            aria-describedby="radix-:r5:"
            aria-labelledby="radix-:r4:"
            data-state="open"
            className={`fixed z-50 gap-4 rounded-b-lg border bg-background p-6 shadow-lg animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:max-w-lg sm:rounded-lg sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0 h-auto w-[200px] md:w-[500px] md:mt-20 flex flex-col items-center justify-center bg-white transition-transform transform ${
              isOpen ? "scale-100" : "scale-0"
            }`}
            tabindex="-1"
            style={{ pointerEvents: "auto" }}
          >
            <button
              type="button"
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
              onClick={() => setisOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
              <span className="sr-only">Close</span>
            </button>
            <br />
            <div className="flex-col space-y-1.5 text-center sm:text-left flex items-center justify-center gap-y-3 w-full">
              <select
                className="block p-2 px-3 text-sm text-gray-500 border border-gray-300 placeholder-gray-400 focus:outline-none rounded-lg w-full bg-gray-50 focus:ring-gray-500 focus:border-gray-500 box-border"
                value={options}
                onChange={(e) => {
                  //setOptions(e.target.value);
                  setOptions(JSON.parse(e.target.value));
                }}
              >
                <option value="" disabled selected>
                  Select Team
                </option>
                {/*<option value={{teamId: item.teamId, teamName: item.teamName}} key={index}>*/}
                {teams &&
                  teams.map((item, index) => (
                    <option
                      value={JSON.stringify({
                        teamId: item.teamId,
                        teamName: item.teamName,
                      })}
                      key={index}
                    >
                      {item.teamName}
                    </option>
                  ))}
              </select>

              <button
                className="block p-2 px-3 text-sm text-gray-500 border border-gray-300 placeholder-gray-400 focus:outline-none rounded-lg w-full bg-gray-50 focus:ring-gray-500 focus:border-gray-500 box-border"
                disabled={options === "" ? true : false}
                onClick={() => {
                  submitHandler();
                }}
              >
                Add to team
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

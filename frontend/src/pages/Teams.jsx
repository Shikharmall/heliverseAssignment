import React, { useState } from "react";
import Header from "../partials/Header";
import { useDispatch } from "react-redux";
//import { addToTeamActions } from "../redux/actions";
import { createTeamActions } from "../redux/actions";
import { useSelector } from "react-redux";

export default function () {
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.teams);
  console.log(teams);

  const [teamName, setTeamName] = useState("");
  const submitHandler = () => {
    try {
      dispatch(createTeamActions(teamName,6));
      setTeamName("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Header />

      <input
        type="text"
        value={teamName}
        onChange={(e) => {
          setTeamName(e.target.value);
        }}
        className="border border-gray-500"
      />
      <button
        onClick={() => {
          submitHandler();
        }}
      >
        Add Team
      </button>

      {teams.map((item, index) => (
        <p key={index}>{item.teamName}</p>
      ))}
    </>
  );
}

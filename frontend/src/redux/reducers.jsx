import { createTeam, addToTeam } from "./types";

const initialState = {
  teams: [],
  teamMembers: [],
};

//console.log(initialState);

const teamReducer = (state = initialState, action) => {
  //console.log(action);
  switch (action.type) {
    case createTeam:
      return {
        ...state,
        teams: [
          ...state.teams,
          { teamName: action.payload.teamName, teamId: state.teams.length + 1 },
        ],
      };
    case addToTeam:
      console.log();
      return {
        ...state,
        teamMembers: [...state.teamMembers, action.payload],
      };
    default:
      return state;
  }
};

export default teamReducer;

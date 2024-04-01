import { createTeam, addToTeam } from "./types";

const initialState = {
  teams: [],
  teamMembers: [],
};

const teamReducer = (state = initialState, action) => {
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
      return {
        ...state,
        teamMembers: [...state.teamMembers, action.payload],
      };
    default:
      return state;
  }
};

export default teamReducer;

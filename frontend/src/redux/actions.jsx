import { createTeam, addToTeam } from "./types";

export const createTeamActions = (teamName, teamId) => {
  return {
    type: createTeam,
    payload: {
      teamName: teamName,
      teamId: teamId,
      timestamp: new Date().toLocaleString(),
    },
  };
};
export const addToTeamActions = (team, userName) => {
  return {
    type: addToTeam,
    payload: {
      //teamName: teamName,
      team: team,
      userName: userName,
      timestamp: new Date().toLocaleString(),
    },
  };
};

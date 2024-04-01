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
export const addToTeamActions = (teamName, teamId, userName, userLogo) => {
  return {
    type: addToTeam,
    payload: {
      teamName: teamName,
      teamId: teamId,
      userName: userName,
      userLogo: userLogo,
      timestamp: new Date().toLocaleString(),
    },
  };
};

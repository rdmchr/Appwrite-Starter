import {appwrite} from './appwrite';
import {AppwriteTeam, AppwriteTeamsList, AppwriteMembership, AppwriteMembershipsList} from './teamsInterfaces';
import {AppwriteError, AppwriteOrderType} from './appwriteInterfaces';

const teams = appwrite.teams;

/**
 * Create a new team. The user who creates the team will automatically be assigned as the owner of the team. The team owner can invite new members, who will be able add new owners and update or delete the team from your project.
 * @param name Team name. Max length: 128 chars.
 * @param roles Array of strings. Use this param to set the roles in the team for the user who created it. The default role is owner. A role can be any string. Learn more about [roles and permissions](https://appwrite.io/docs/permissions). Max length for each role is 32 chars.
 * @returns [{@link AppwriteTeam}, {@link AppwriteError}]
 * @see https://appwrite.io/docs/client/teams#teamsCreate
 */
async function createTeam(name: string, roles: string[]): Promise<[AppwriteTeam | null, AppwriteError | null]> {
  return await teams.create(name, roles).then(
    (team: AppwriteTeam) => {
      return [team, null];
    },
    (err: AppwriteError) => {
      return [null, err];
    }
  );
}

/**
 * Get a list of all the current user teams. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of the project's teams. [Learn more about different API modes](https://appwrite.io/docs/admin).
 * @param search Search term to filter your list results. Max length: 256 chars.
 * @param limit Results limit value. By default will return maximum 25 results. Maximum of 100 results allowed per request.
 * @param offset Results offset. The default value is 0. Use this param to manage pagination.
 * @param orderType Order result by ASC or DESC order.
 * @returns [{@link AppwriteTeamsList}, {@link AppwriteError}]
 * @see https://appwrite.io/docs/client/teams#teamsList
 */
async function listTeam(
  search?: string,
  limit?: number,
  offset?: number,
  orderType?: AppwriteOrderType
): Promise<[AppwriteTeamsList | null, AppwriteError | null]> {
  return await teams.list(search, limit, offset, orderType).then(
    (teams: AppwriteTeamsList) => {
      return [teams, null];
    },
    (err: AppwriteError) => {
      return [null, err];
    }
  );
}

/**
 * Get a team by its unique ID. All team members have read access for this resource.
 * @param teamId Team unique ID.
 * @returns [{@link AppwriteTeam}, {@link AppwriteError}]
 * @see https://appwrite.io/docs/client/teams#teamsGet
 */
async function getTeam(teamId: string): Promise<[AppwriteTeam | null, AppwriteError | null]> {
  return await teams.get(teamId).then(
    (team: AppwriteTeam) => {
      return [team, null];
    },
    (err: AppwriteError) => {
      return [null, err];
    }
  );
}

/**
 * Update a team by its unique ID. Only team owners have write access for this resource.
 * @param teamId Team unique ID.
 * @param name Team name. Max length: 128 chars.
 * @returns [{@link AppwriteTeam}, {@link AppwriteError}]
 * @see https://appwrite.io/docs/client/teams#teamsUpdate
 */
async function updateTeam(teamId: string, name: string): Promise<[AppwriteTeam | null, AppwriteError | null]> {
  return await teams.update(teamId, name).then(
    (team: AppwriteTeam) => {
      return [team, null];
    },
    (err: AppwriteError) => {
      return [null, err];
    }
  );
}

/**
 * Delete a team by its unique ID. Only team owners have write access for this resource.
 * @param teamId Team unique ID.
 * @returns Can return {@link AppwriteError}
 * @see https://appwrite.io/docs/client/teams#teamsDelete
 */
async function deleteTeam(teamId: string): Promise<AppwriteError | null> {
  return await teams.delete(teamId).then(
    () => {
      return null;
    },
    (err: AppwriteError) => {
      return err;
    }
  );
}

/**
 * Use this endpoint to invite a new member to join your team. If initiated from Client SDK, an email with a link to join the team will be sent to the new member's email address if the member doesn't exist in the project it will be created automatically. If initiated from server side SDKs, new member will automatically be added to the team.

 Use the 'URL' parameter to redirect the user from the invitation email back to your app. When the user is redirected, use the Update Team Membership Status endpoint to allow the user to accept the invitation to the team. While calling from side SDKs the redirect url can be empty string.

 Please note that in order to avoid a [Redirect Attacks](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md) the only valid redirect URL's are the once from domains you have set when added your platforms in the console interface.
 * @param teamId Team unique ID.
 * @param email New team member email.
 * @param roles Array of strings. Use this param to set the user roles in the team. A role can be any string. Learn more about [roles and permissions](https://appwrite.io/docs/permissions). Max length for each role is 32 chars.
 * @param url URL to redirect the user back to your app from the invitation email. Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.
 * @param name New team member name. Max length: 128 chars.
 * @returns [{@link AppwriteMembership}, {@link AppwriteError}]
 * @see https://appwrite.io/docs/server/teams?sdk=nodejs-default#teamsCreateMembership
 */
async function createMembership(
  teamId: string,
  email: string,
  roles: string[],
  url: string,
  name?: string
): Promise<[AppwriteMembership | null, AppwriteError | null]> {
  return await teams.createMembership(teamId, email, roles, url, name).then(
    (membership: AppwriteMembership) => {
      return [membership, null];
    },
    (err: AppwriteError) => {
      return [null, err];
    }
  );
}

/**
 *
 * @param teamId Team unique ID.
 * @param membershipId Membership ID.
 * @param roles Array of strings. Use this param to set the user roles in the team. A role can be any string. Learn more about [roles and permissions](https://appwrite.io/docs/permissions). Max length for each role is 32 chars.
 * @returns [{@link AppwriteMembership}, {@link AppwriteError}]
 * @see https://appwrite.io/docs/server/teams#teamsUpdateMembershipRoles
 */
async function updateMembershipRoles(
  teamId: string,
  membershipId: string,
  roles: string[]
): Promise<[AppwriteMembership | null, AppwriteError | null]> {
  return await teams.updateMembershipRoles(teamId, membershipId, roles).then(
    (membership: AppwriteMembership) => {
      return [membership, null];
    },
    (err: AppwriteError) => {
      return [null, err];
    }
  );
}

/**
 * Get a team members by the team unique ID. All team members have read access for this list of resources.
 * @param teamId Team unique ID.
 * @param search Search term to filter your list results. Max length: 256 chars.
 * @param limit Results limit value. By default will return maximum 25 results. Maximum of 100 results allowed per request.
 * @param offset Results offset. The default value is 0. Use this param to manage pagination.
 * @param orderType Order result by ASC or DESC order.
 * @returns [{@link AppwriteMembershipsList}, {@link AppwriteError}]
 * @see https://appwrite.io/docs/server/teams#teamsGetMemberships
 */
async function getMemberships(
  teamId: string,
  search?: string,
  limit?: number,
  offset?: number,
  orderType?: AppwriteOrderType
): Promise<[AppwriteMembershipsList | null, AppwriteError | null]> {
  return await teams.getMemberships(teamId, search, limit, offset, orderType).then(
    (memberships: AppwriteMembershipsList) => {
      return [memberships, null];
    },
    (err: AppwriteError) => {
      return [null, err];
    }
  );
}

/**
 * Use this endpoint to allow a user to accept an invitation to join a team after being redirected back to your app from the invitation email recieved by the user.
 * @param teamId Team unique ID.
 * @param membershipId Membership ID.
 * @param userId User unique ID.
 * @param secret Secret key.
 * @returns [{@link AppwriteMembership}, {@link AppwriteError}]
 * @see https://appwrite.io/docs/server/teams#teamsUpdateMembershipStatus
 */
async function updateMembershipStatus(
  teamId: string,
  membershipId: string,
  userId: string,
  secret: string
): Promise<[AppwriteMembership | null, AppwriteError | null]> {
  return await teams.updateMembershipStatus(teamId, membershipId, userId, secret).then(
    (membership: AppwriteMembership) => {
      return [membership, null];
    },
    (err: AppwriteError) => {
      return [null, err];
    }
  );
}

/**
 * This endpoint allows a user to leave a team or for a team owner to delete the membership of any other team member. You can also use this endpoint to delete a user membership even if it is not accepted.
 * @param teamId Team unique ID.
 * @param membershipId Membership ID.
 * @returns Can return {@link AppwriteError}
 * @see https://appwrite.io/docs/server/teams#teamsDeleteMembership
 */
async function deleteMembership(teamId: string, membershipId: string): Promise<AppwriteError | null> {
  return await teams.deleteMembership(teamId, membershipId).then(
    () => {
      return null;
    },
    (err: AppwriteError) => {
      return err;
    }
  );
}

export {
  createTeam,
  listTeam,
  getTeam,
  updateTeam,
  deleteTeam,
  createMembership,
  updateMembershipRoles,
  getMemberships,
  updateMembershipStatus,
  deleteMembership,
};

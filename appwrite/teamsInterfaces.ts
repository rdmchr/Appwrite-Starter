/**
 * @see https://appwrite.io/docs/models/team
 */
interface AppwriteTeam {
  $id: string;
  name: string;
  dateCreated: number;
  sum: number;
}

/**
 * @see https://appwrite.io/docs/models/teamList
 */
interface AppwriteTeamsList {
  sum: number;
  teams: AppwriteTeam[];
}

/**
 * @see https://appwrite.io/docs/models/membership
 */
interface AppwriteMembership {
  $id: string;
  userId: string;
  teamId: string;
  name: string;
  email: string;
  invited: number;
  joined: number;
  confirm: boolean;
  roles: string[];
}

/**
 * @see https://appwrite.io/docs/models/membershipList
 */
interface AppwriteMembershipsList {
  sum: number;
  memberships: AppwriteMembership[];
}

export {AppwriteTeam, AppwriteTeamsList, AppwriteMembership, AppwriteMembershipsList};

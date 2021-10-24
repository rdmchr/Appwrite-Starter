/**
 * @see https://appwrite.io/docs/models/user
 */
interface AppwriteUser {
  $id: string;
  name: string;
  registration: number;
  status: number;
  passwordUpdate: number;
  email: string;
  emailVerification: boolean;
  prefs: any;
}

/**
 * @see https://appwrite.io/docs/models/session
 */
interface AppwriteSession {
  $id: string;
  userId: string;
  expire: number;
  provider: number;
  providerUid: string;
  providerToken: string;
  ip: string;
  osCode: string;
  osName: string;
  osVersion: string;
  clientType: string;
  clientCode: string;
  clientName: string;
  clientVersion: string;
  clientEngine: string;
  clientEngineVersion: string;
  deviceName: string;
  deviceBrand: string;
  deviceModel: string;
  countryCode: string;
  countryName: string;
  current: boolean;
}

/**
 * @see https://appwrite.io/docs/models/sessionList
 */
interface AppwriteSessionList {
  sum: number;
  sessions: AppwriteSession[];
}

/**
 * @see https://appwrite.io/docs/models/token
 */
interface AppwriteToken {
  $id: string;
  userId: string;
  secret: string;
  expire: string;
}

/**
 * @see https://appwrite.io/docs/models/log
 */
interface AppwriteLog {
  event: string;
  ip: string;
  time: number;
  osCode: string;
  osName: string;
  osVersion: string;
  clientType: string;
  clientCode: string;
  clientName: string;
  clientVersion: string;
  clientEngine: string;
  clientEngineVersion: string;
  deviceName: string;
  deviceBrand: string;
  deviceModel: string;
  countryCode: string;
  countryName: string;
}

/**
 * @see https://appwrite.io/docs/models/logList
 */
interface AppwriteLogsList {
  logs: AppwriteLog[];
}

/**
 * @see https://appwrite.io/docs/models/jwt
 */
interface AppwriteJWT {
  jwt: string;
}

type OAuth2Provider =
  | 'amazon'
  | 'apple'
  | 'bitbucket'
  | 'bitly'
  | 'box'
  | 'discord'
  | 'dropbox'
  | 'facebook'
  | 'github'
  | 'gitlab'
  | 'google'
  | 'linkedin'
  | 'microsoft'
  | 'paypal'
  | 'paypalSandbox'
  | 'salesforce'
  | 'slack'
  | 'spotify'
  | 'tradeshift'
  | 'tradeshiftBox'
  | 'twitch'
  | 'vk'
  | 'yahoo'
  | 'yandex'
  | 'wordpress';

export {
  AppwriteUser,
  AppwriteSession,
  AppwriteSessionList,
  AppwriteToken,
  AppwriteLog,
  AppwriteLogsList,
  AppwriteJWT,
  OAuth2Provider,
};

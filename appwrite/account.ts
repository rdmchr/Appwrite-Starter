import { appwrite } from './appwrite';
import { AppwriteUser, AppwriteSession, AppwriteSessionList, AppwriteToken, AppwriteLogsList, AppwriteJWT, OAuth2Provider } from './accountInterfaces';
import { AppwriteError } from './appwriteInterfaces';

const auth = appwrite.account;

/**
 * Use this endpoint to allow a new user to register a new account in your project. After the user registration completes successfully, you can use the {@link createEmailVerification /account/verfication} route to start verifying the user email address. To allow the new user to login to their new account, you need to create a new {@link createSession account session}.
 * @param email User email.
 * @param password User password. Must be between 6 to 32 chars.
 * @param name User name. Max length: 128 chars.
 * @returns [{@link AppwriteUser}, {@link AppwriteError}]
 * @see https://appwrite.io/docs/client/account?sdk=web-default#accountCreate
 */
async function createAccount(email:string, password: string, name?: string): Promise<[AppwriteUser, AppwriteError]> {
    return await auth.create(email, password, name).then((user: AppwriteUser) => {
        return [user, null];
    }, (err: AppwriteError) => {
        return [null, err];
    });
}

/**
 * Allow the user to login into their account by providing a valid email and password combination. This route will create a new session for the user.
 * @param email User email.
 * @param password User password. Must be between 6 to 32 chars.
 * @returns [{@link AppwriteSession}, {@link AppwriteError}]
 * @see https://appwrite.io/docs/client/account?sdk=web-default#accountCreateSession
 */
async function createSession(email:string, password:string): Promise<[AppwriteSession, AppwriteError]> {
    return await auth.createSession(email, password).then((session: AppwriteSession) => {
        return [session, null];
    }, (err: AppwriteError) => {
        return [null, err];
    });
}

/**
 * Allow the user to login to their account using the OAuth2 provider of their choice. Each OAuth2 provider should be enabled from the Appwrite console first. Use the success and failure arguments to provide a redirect URL's back to your app when login is completed.

If there is already an active session, the new session will be attached to the logged-in account. If there are no active sessions, the server will attempt to look for a user with the same email address as the email received from the OAuth2 provider and attach the new session to the existing user. If no matching user is found - the server will create a new user.
 * @param provider OAuth2 Provider. Currently, supported providers are: amazon, apple, bitbucket, bitly, box, discord, dropbox, facebook, github, gitlab, google, linkedin, microsoft, paypal, paypalSandbox, salesforce, slack, spotify, tradeshift, tradeshiftBox, twitch, vk, yahoo, yandex, wordpress.
 * @param success URL to redirect back to your app after a successful login attempt. Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.
 * @param failure URL to redirect back to your app after a successful login attempt. Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.
 * @param scopes A list of custom OAuth2 scopes. Check each provider internal docs for a list of supported scopes.
 * @returns Can return {@link AppwriteError}
 * @see https://appwrite.io/docs/client/account?sdk=web-default#accountCreateOAuth2Session
 */
async function createOAuthSession(provider: OAuth2Provider, success?: string, failure?: string, scopes?: string[]): Promise<AppwriteError> {
    return await auth.createOAuth2Session(provider, success, failure, scopes).catch((err: AppwriteError) => {return err});
}

/**
 * Sends the user an email with a secret key for creating a session. When the user clicks the link in the email, the user is redirected back to the URL you provided with the secret key and userId values attached to the URL query string. Use the query string parameters to submit a request to the {@link updateMagicURLSession PUT /account/sessions/magic-url} endpoint to complete the login process. The link sent to the user's email address is valid for 1 hour. If you are on a mobile device you can leave the URL parameter empty, so that the login completion will be handled by your Appwrite instance by default.
 * @param email User email.
 * @param url URL to redirect back to your app after a successful login attempt. Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.
 * @returns [{@link AppwriteToken}, {@link AppwriteError}]
 * @see https://appwrite.io/docs/client/account#accountCreateMagicURLSession
 */
async function createMagicURLSession(email: string, url?: string): Promise<[AppwriteToken, AppwriteError]> {
    return await auth.createMagicURLSession(email, url).then((token: AppwriteToken) => {
        return [token, null];
    }, (err: AppwriteError) => {
        return [null, err];
    });
}

/**
 * Use this endpoint to complete creating the session with the Magic URL. Both the userId and secret arguments will be passed as query parameters to the redirect URL you have provided when sending your request to the {@link createMagicURLSession POST /account/sessions/magic-url} endpoint.

Please note that in order to avoid a [Redirect Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md) the only valid redirect URLs are the ones from domains you have set when adding your platforms in the console interface.
 * @param userId User unique ID.
 * @param secret Valid verification token.
 * @returns [{@link AppwriteSession}, {@link AppwriteError}]
 * @see https://appwrite.io/docs/client/account#accountUpdateMagicURLSession
 */
async function updateMagicURLSession(userId: string, secret: string): Promise<[AppwriteSession, AppwriteError]> {
    return await auth.updateMagicURLSession(userId, secret).then((session: AppwriteSession) => {
        return [session, null];
    }, (err: AppwriteError) => {
        return [null, err];
    });
}

/**
 * Use this endpoint to allow a new user to register an anonymous account in your project. This route will also create a new session for the user. To allow the new user to convert an anonymous account to a normal account, you need to update its email and password or create an {@link createOAuthSession OAuth2 session}.
 * @returns [{@link AppwriteSession}, {@link AppwriteError}]
 * @see https://appwrite.io/docs/client/account#accountCreateAnonymousSession
 */
async function createAnonymousSession(): Promise<[AppwriteSession, AppwriteError]> {
    return await auth.createAnonymousSession().then((session: AppwriteSession) => {
        return [session, null];
    }, (err: AppwriteError) => {
        return [null, err];
    })
}

/**
 * Use this endpoint to create a JSON Web Token. You can use the resulting JWT to authenticate on behalf of the current user when working with the Appwrite server-side API and SDKs. The JWT secret is valid for 15 minutes from its creation and will be invalid if the user will logout in that time frame.
 * @returns [{@link AppwriteJWT}, {@link AppwriteError}]
 * @see https://appwrite.io/docs/client/account#accountCreateJWT
 */
async function createJWT(): Promise<[AppwriteJWT, AppwriteError]> {
    return await auth.createJWT().then((jwt: AppwriteJWT) => {
        return [jwt, null];
    }, (err: AppwriteError) => {
        return [null, err];
    })
}

/**
 * Get the currently logged in users data
 * @returns [{@link AppwriteUser}, {@link AppwriteError}]
 * @see https://appwrite.io/docs/client/account?sdk=web-default#accountGet
 */
async function getAccount(): Promise<[AppwriteUser, AppwriteError]> {
    return await auth.get().then((user: AppwriteUser) => {
        return [user, null];
    }, (err: AppwriteError) => {
        return [null, err];
    });
}

/**
 * Get currently logged in user preferences as a key-value object.
 * @returns [any, {@link AppwriteError}]
 * @see https://appwrite.io/docs/client/account#accountGetPrefs
 */
async function getPrefs(): Promise<[any, AppwriteError]> {
    return await auth.getPrefs().then((prefs: any) => {
        return [prefs, null];
    }, (err: AppwriteError) => {
        return [null, err];
    }); 
}

/**
 * Get currently logged in user list of active sessions across different devices.
 * @returns [{@link AppwriteSessionList}, {@link AppwriteError}]
 * @see https://appwrite.io/docs/client/account#accountGetSessions
 */
async function getSessions(): Promise<[AppwriteSessionList, AppwriteError]> {
    return await auth.getSessions().then((sessions: AppwriteSession) => {
        return [sessions, null];
    }, (err: AppwriteError) => {
        return [null, err];
    });
}

/**
 * Get currently logged in user list of latest security activity logs. Each log returns user IP address, location and date and time of log.
 * @returns [{@link AppwriteLogsList}, {@link AppwriteError}]
 * @see https://appwrite.io/docs/client/account#accountGetLogs
 */
async function getLogs(): Promise<[AppwriteLogsList, AppwriteError]> {
    return await auth.getLogs().then((logs: AppwriteLogsList) => {
        return [logs, null];
    }, (err: AppwriteError) => {
        return [null, err];
    });
}

/**
 * Use this endpoint to get a logged in user's session using a Session ID. Inputting 'current' will return the current session being used.
 * @param sessionId Session unique ID. Use the string 'current' to get the current device session.
 * @returns [{@link AppwriteSession}, {@link AppwriteError}]
 * @see https://appwrite.io/docs/client/account#accountGetSession
 */
async function getSession(sessionId: string | 'current'): Promise<[AppwriteSession, AppwriteError]> {
    return await auth.getSession(sessionId).then((session: AppwriteSession) => {
        return [session, null];
    }, (err: AppwriteError) => {
        return [null, err];
    });
}

/**
 * Update currently logged in user account name.
 * @param name User name. Max length: 128 chars.
 * @returns [{@link AppwriteUser}, {@link AppwriteError}]
 * @see https://appwrite.io/docs/client/account#accountUpdateName
 */
async function updateName(name: string): Promise<[AppwriteUser, AppwriteError]> {
    return await auth.updateName(name).then((user: AppwriteUser) => {
        return [user, null];
    }, (err: AppwriteError) => {
        return [null, err];
    });
}

/**
 * Update currently logged in user password. For validation, user is required to pass in the new password, and the old password. For users created with OAuth and Team Invites, oldPassword is optional.
 * @param password New user password. Must be between 6 to 32 chars.
 * @param oldPassword Old user password. Must be between 6 to 32 chars.
 * @returns [{@link AppwriteUser}, {@link AppwriteError}]
 * @see https://appwrite.io/docs/client/account#accountUpdatePassword
 */
async function updatePassword(password: string, oldPassword?: string): Promise<[AppwriteUser, AppwriteError]> {
    return await auth.updatePassword(password, oldPassword).then((user: AppwriteUser) => {
        return [user, null];
    }, (err: AppwriteError) => {
        return [null, err];
    });
}

/**
 * Update currently logged in user account email address. After changing user address, user confirmation status is being reset and a new confirmation mail is sent. For security measures, user password is required to complete this request. This endpoint can also be used to convert an anonymous account to a normal one, by passing an email address and a new password.
 * @param email User email.
 * @param password User password. Must be between 6 to 32 chars.
 * @returns [{@link AppwriteUser}, {@link AppwriteError}]
 * @see https://appwrite.io/docs/client/account#accountUpdateEmail
 */
async function updateEmail(email: string, password: string): Promise<[AppwriteUser, AppwriteError]> {
    return await auth.updateEmail(email, password).then((user: AppwriteUser) => {
        return [user, null];
    }, (err: AppwriteError) => {
        return [null, err];
    });
}

/**
 * Update currently logged in user account preferences. You can pass only the specific settings you wish to update.
 * @param prefs Prefs key-value JSON object.
 * @returns [{@link AppwriteUser}, {@link AppwriteError}]
 * @see https://appwrite.io/docs/client/account#accountUpdatePrefs 
 */
async function updatePrefs(prefs: any): Promise<[AppwriteUser, AppwriteError]> {
    return await auth.updatePrefs(prefs).then((user: AppwriteUser) => {
        return [user, null];
    }, (err: AppwriteError) => {
        return [null, err];
    });
}

/**
 * Delete a currently logged in user account. Behind the scene, the user record is not deleted but permanently blocked from any access. This is done to avoid deleted accounts being overtaken by new users with the same email address. Any user-related resources like documents or storage files should be deleted separately.
 * @returns Can return {@link AppwriteError}
 * @see https://appwrite.io/docs/client/account#accountDelete
 */
async function deleteAccount(): Promise<AppwriteError> {
    return await auth.delete().catch((err: AppwriteError) => {
        return err;
    });
}

/**
 * Use this endpoint to log out the currently logged in user from all their account sessions across all of their different devices. When using the option id argument, only the session unique ID provider will be deleted.
 * @param sessionId Session unique ID. Use the string 'current' to delete the current device session.
 * @returns Can return {@link AppwriteError}
 * @see https://appwrite.io/docs/client/account#accountDeleteSession
 */
async function deleteSession(sessionId: string | 'current'): Promise<AppwriteError> {
    return await auth.deleteSession(sessionId).catch((err: AppwriteError) => {
        return err;
    });
}

/**
 * Delete all sessions from the user account and remove any sessions cookies from the end client.
 * @returns Can return {@link AppwriteError}
 * @see https://appwrite.io/docs/client/account#accountDeleteSessions
 */
async function deleteSessions(): Promise<AppwriteError> {
    return await auth.deleteSessions().catch((err: AppwriteError) => {
        return err;
    })
}

/**
 * Sends the user an email with a temporary secret key for password reset. When the user clicks the confirmation link he is redirected back to your app password reset URL with the secret key and email address values attached to the URL query string. Use the query string params to submit a request to the {@link updateRecovery PUT /account/recovery} endpoint to complete the process. The verification link sent to the user's email address is valid for 1 hour.
 * @param email User email.
 * @param url URL to redirect the user back to your app from the recovery email. Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.
 * @returns [{@link AppwriteToken}, {@link AppwriteError}]
 * @see https://appwrite.io/docs/client/account#accountCreateRecovery
 */
async function createRecovery(email: string, url: string): Promise<[AppwriteToken, AppwriteError]> {
    return await auth.createRecovery(email, url).then((token: AppwriteToken) => {
        return [token, null];
    }, (err: AppwriteError) => {
        return [null, err];
    })
}

/**
 * Use this endpoint to complete the user account password reset. Both the userId and secret arguments will be passed as query parameters to the redirect URL you have provided when sending your request to the {@link createRecovery POST /account/recovery} endpoint.

Please note that in order to avoid a [Redirect Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md) the only valid redirect URLs are the ones from domains you have set when adding your platforms in the console interface.
 * @param userId User account UID address.
 * @param secret Valid reset token.
 * @param password New password. Must be between 6 to 32 chars.
 * @param passwordAgain New password again. Must be between 6 to 32 chars.
 * @returns [{@link AppwriteToken}, {@link AppwriteError}]
 * @see https://appwrite.io/docs/client/account#accountUpdateRecovery
 */
async function updateRecovery(userId: string, secret: string, password: string, passwordAgain: string): Promise<[AppwriteToken, AppwriteError]> {
    return await auth.updateRecovery(userId, secret, password, passwordAgain).then((token: AppwriteToken) => {
        return [token, null];
    }, (err: AppwriteError) => {
        return [null, err];
    });
}

/**
 * Use this endpoint to send a verification message to your user email address to confirm they are the valid owners of that address. Both the userId and secret arguments will be passed as query parameters to the URL you have provided to be attached to the verification email. The provided URL should redirect the user back to your app and allow you to complete the verification process by verifying both the userId and secret parameters. Learn more about how to {@link updateEmailVerification complete the verification process}. The verification link sent to the user's email address is valid for 7 days.

Please note that in order to avoid a [Redirect Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md), the only valid redirect URLs are the ones from domains you have set when adding your platforms in the console interface.
 * @param url URL to redirect the user back to your app from the verification email. Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.
 * @returns [{@link AppwriteToken}, {@link AppwriteError}]
 * @see https://appwrite.io/docs/client/account#accountCreateVerification
 */
async function createEmailVerification(url: string): Promise<[AppwriteToken, AppwriteError]> {
    return await auth.createVerification(url).then((token: AppwriteToken) => {
        return [token, null];
    }, (err: AppwriteError) => {
        return [null, err];
    });
}

/**
 * Use this endpoint to complete the user email verification process. Use both the userId and secret parameters that were attached to your app URL to verify the user email ownership. If confirmed this route will return a 200 status code.
 * @param userId User unique ID.
 * @param secret Valid verification token.
 * @returns [{@link AppwriteToken}, {@link AppwriteError}]
 * @see https://appwrite.io/docs/client/account?sdk=web-default#accountUpdateVerification
 */
async function updateEmailVerification(userId:string, secret: string): Promise<[AppwriteToken, AppwriteError]> {
    return await auth.updateVerification(userId, secret).then((token: AppwriteToken) => {
        return [token, null];
    }, (err: AppwriteError) => {
        return [null, err];
    });
}


export {
    createAccount,
    createSession,
    createOAuthSession,
    createMagicURLSession,
    updateMagicURLSession,
    createAnonymousSession,
    createJWT,
    getAccount,
    getPrefs,
    getSessions,
    getLogs,
    getSession,
    updateName,
    updatePassword,
    updateEmail,
    updatePrefs,
    deleteAccount,
    deleteSession,
    deleteSessions,
    createRecovery,
    updateRecovery,
    createEmailVerification,
    updateEmailVerification
}
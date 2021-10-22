/**
 * @see https://appwrite.io/docs/error-codes#errorMessages
 */
interface AppwriteError {
  message: string;
  code: number;
}

/**
 * @see https://appwrite.io/docs/models/permissions
 */
interface AppwritePermissions {
  write?: string[];
  read?: string[];
}

export {AppwriteError, AppwritePermissions};

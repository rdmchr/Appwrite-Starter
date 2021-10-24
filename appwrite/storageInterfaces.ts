import {AppwritePermissions} from './appwriteInterfaces';

/**
 * @see https://appwrite.io/docs/models/file
 */
interface AppwriteFile {
  $id: string;
  $permissions: AppwritePermissions;
  name: string;
  dateCreated: number;
  signature: string;
  mimeType: string;
  sizeOriginal: string;
}

/**
 * @see https://appwrite.io/docs/models/fileList
 */
interface AppwriteFilesList {
  sum: number;
  files: AppwriteFile[];
}

type AppwriteGravity =
  | 'center'
  | 'top-left'
  | 'top'
  | 'top-right'
  | 'left'
  | 'right'
  | 'bottom-left'
  | 'bottom'
  | 'bottom-right';

type AppwriteOutput = 'jpeg' | 'jpg' | 'png' | 'gif' | 'webp';

export {AppwriteFile, AppwriteFilesList, AppwriteGravity, AppwriteOutput};

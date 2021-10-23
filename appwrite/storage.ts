import {appwrite} from './appwrite';
import {AppwriteError, AppwriteOrderType} from './appwriteInterfaces';
import {AppwriteFile, AppwriteFilesList, AppwriteGravity, AppwriteOutput} from './storageInterfaces';

const storage = appwrite.storage;

/**
 * Create a new file. The user who creates the file will automatically be assigned to read and write access unless he has passed custom values for read and write arguments.
 * @param file Binary file.
 * @param read An array of strings with read permissions. By default only the current user is granted with read permissions. [Learn more about permissions](https://appwrite.io/docs/permissions) and get a full list of available permissions.
 * @param write An array of strings with write permissions. By default only the current user is granted with write permissions. [Learn more about permissions](https://appwrite.io/docs/permissions) and get a full list of available permissions.
 * @returns [{@link AppwriteFile}, {@link AppwriteError}]
 * @see https://appwrite.io/docs/client/storage#storageCreateFile
 */
async function createFile(
  file: File,
  read: string[],
  write: string[]
): Promise<[AppwriteFile | null, AppwriteError | null]> {
  return await storage.createFile(file, read, write).then(
    (file: AppwriteFile) => {
      return [file, null];
    },
    (err: AppwriteError) => {
      return [null, err];
    }
  );
}

/**
 * Get a list of all the user files. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of the project's files. [Learn more about different API modes](https://appwrite.io/docs/admin).
 * @param search Search term to filter your list results. Max length: 256 chars.
 * @param limit Results limit value. By default will return maximum 25 results. Maximum of 100 results allowed per request.
 * @param offset Results offset. The default value is 0. Use this param to manage pagination.
 * @param orderType Order result by ASC or DESC order.
 * @returns [{@link AppwriteFilesList}, {@link AppwriteError}]
 * @see https://appwrite.io/docs/client/storage#storageListFiles
 */
async function listFiles(
  search: string,
  limit: number,
  offset: number,
  orderType: AppwriteOrderType
): Promise<[AppwriteFilesList | null, AppwriteError | null]> {
  return await storage.listFiles(search, limit, offset, orderType).then(
    (files: AppwriteFilesList) => {
      return [files, null];
    },
    (err: AppwriteError) => {
      return [null, err];
    }
  );
}

/**
 * Get a file by its unique ID. This endpoint response returns a JSON object with the file metadata.
 * @param fileId File unique ID.
 * @returns [{@link AppwriteFile}, {@link AppwriteError}]
 * @see https://appwrite.io/docs/client/storage#storageGetFile
 */
async function getFile(fileId: string): Promise<[AppwriteFile | null, AppwriteError | null]> {
  return await storage.getFile(fileId).then(
    (file: AppwriteFile) => {
      return [file, null];
    },
    (err: AppwriteError) => {
      return [null, err];
    }
  );
}

/**
 * Get a file preview image. Currently, this method supports preview for image files (jpg, png, and gif), other supported formats, like pdf, docs, slides, and spreadsheets, will return the file icon image. You can also pass query string arguments for cutting and resizing your preview image.
 * @param fileId File unique ID
 * @param width Resize preview image width, Pass an integer between 0 to 4000.
 * @param height Resize preview image height, Pass an integer between 0 to 4000.
 * @param gravity Image crop gravity. Can be one of center,top-left,top,top-right,left,right,bottom-left,bottom,bottom-right
 * @param quality Preview image quality. Pass an integer between 0 to 100. Defaults to 100.
 * @param borderWith Preview image border in pixels. Pass an integer between 0 to 100. Defaults to 0.
 * @param borderColor Preview image border color. Use a valid HEX color, no # is needed for prefix.
 * @param borderRadius Preview image border radius in pixels. Pass an integer between 0 to 4000.
 * @param opacity Preview image opacity. Only works with images having an alpha channel (like png). Pass a number between 0 to 1.
 * @param rotation Preview image rotation in degrees. Pass an integer between 0 and 360.
 * @param background Preview image background color. Only works with transparent images (png). Use a valid HEX color, no # is needed for prefix.
 * @param output Output format type (jpeg, jpg, png, gif and webp).
 * @returns A {@link URL} to the preview
 * @see https://appwrite.io/docs/client/storage#storageGetFilePreview
 */
async function getFilePreview(
  fileId: string,
  width?: number,
  height?: number,
  gravity?: AppwriteGravity,
  quality?: number,
  borderWith?: number,
  borderColor?: string,
  borderRadius?: number,
  opacity?: number,
  rotation?: number,
  background?: string,
  output?: AppwriteOutput
): Promise<URL> {
  return storage.getFilePreview(
    fileId,
    width,
    height,
    gravity,
    quality,
    borderWith,
    borderColor,
    borderRadius,
    opacity,
    rotation,
    background,
    output
  );
}

/**
 * Get a file content by its unique ID. The endpoint response return with a 'Content-Disposition: attachment' header that tells the browser to start downloading the file to user downloads directory.
 * @param fileId File unique ID.
 * @returns A {@link URL} to the file
 * @see https://appwrite.io/docs/client/storage#storageGetFileDownload
 */
async function getFileDownload(fileId: string): Promise<URL> {
  return storage.getFileDownload(fileId);
}

/**
 * Get a file content by its unique ID. This endpoint is similar to the download method but returns with no 'Content-Disposition: attachment' header.
 * @param fileId File unique ID.
 * @returns A {@link URL} to the file
 * @see https://appwrite.io/docs/client/storage#storageGetFileView
 */
async function getFileView(fileId: string): Promise<URL> {
  return storage.getFileView(fileId);
}

/**
 * Update a file by its unique ID. Only users with write permissions have access to update this resource.
 * @param fileId File unique ID.
 * @param read An array of strings with read permissions. By default no user is granted with any read permissions. [Learn more about permissions](https://appwrite.io/docs/permissions) and get a full list of available permissions.
 * @param write An array of strings with write permissions. By default no user is granted with any write permissions. [Learn more about permissions](https://appwrite.io/docs/permissions) and get a full list of available permissions.
 * @returns [{@link AppwriteFile}, {@link AppwriteError}]
 * @see https://appwrite.io/docs/client/storage#storageUpdateFile
 */
async function updateFile(
  fileId: string,
  read: string[],
  write: string[]
): Promise<[AppwriteFile | null, AppwriteError | null]> {
  return await storage.updateFile(fileId, read, write).then(
    (file: AppwriteFile) => {
      return [file, null];
    },
    (err: AppwriteError) => {
      return [null, err];
    }
  );
}

/**
 * Delete a file by its unique ID. Only users with write permissions have access to delete this resource.
 * @param fileId File unique ID.
 * @returns Can return {@link AppwriteError}
 * @see https://appwrite.io/docs/client/storage#storageDeleteFile
 */
async function deleteFile(fileId: string): Promise<AppwriteError | null> {
  return await storage.deleteFile(fileId).then(
    () => {
      return null;
    },
    (err: AppwriteError) => {
      return err;
    }
  );
}

export {createFile, listFiles, getFile, getFilePreview, getFileDownload, getFileView, updateFile, deleteFile};

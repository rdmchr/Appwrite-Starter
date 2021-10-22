import {appwrite} from './appwrite';
import {AppwriteDocument, AppwriteDocumentList} from './databaseInterfaces';
import {AppwriteError} from './appwriteInterfaces';

const db = appwrite.database;

/**
 * Create a new Document. Before using this route, you should create a new collection resource using either a [server integration](https://appwrite.io/docs/server/database#databaseCreateCollection) API or directly from your database console.
 * @param collectionId Collection unique ID. You can create a new collection with validation rules using the Database service server integration.
 * @param data Document data as JSON object.
 * @param read An array of strings with read permissions. By default only the current user is granted with read permissions. [Learn more about permissions](https://appwrite.io/docs/permissions) and get a full list of available permissions.
 * @param write An array of strings with write permissions. By default only the current user is granted with write permissions. [Learn more about permissions](https://appwrite.io/docs/permissions) and get a full list of available permissions.
 * @param parentDocument Parent document unique ID. Use when you want your new document to be a child of a parent document.
 * @param parentProperty Parent document property name. Use when you want your new document to be a child of a parent document.
 * @param parentPropertyType Parent document property connection type. You can set this value to assign, append or prepend, default value is assign. Use when you want your new document to be a child of a parent document.
 * @returns [{@link AppwriteDocument}, {@link AppwriteError}]
 * @see https://appwrite.io/docs/client/database?sdk=web-default#databaseCreateDocument
 */
async function createDocument(
  collectionId: string,
  data: any,
  read?: string[],
  write?: string[],
  parentDocument?: string,
  parentProperty?: string,
  parentPropertyType?: string
): Promise<[AppwriteDocument, AppwriteError]> {
  return await db
    .createDocument(
      collectionId,
      data,
      read,
      write,
      parentDocument,
      parentProperty,
      parentPropertyType
    )
    .then(
      (doc: AppwriteDocument) => {
        return [doc, null];
      },
      (err: AppwriteError) => {
        return [null, err];
      }
    );
}

/**
 * Get a list of all the user documents. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of the project's documents. [Learn more about different API modes](https://appwrite.io/docs/admin).
 * @param collectionId Collection unique ID. You can create a new collection with validation rules using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection).
 * @param filters Array of filter strings. Each filter is constructed from a key name, comparison operator (=, !=, >, <, <=, >=) and a value. You can also use a dot (.) separator in attribute names to filter by child document attributes. Examples: 'name=John Doe' or 'category.$id>=5bed2d152c362'.
 * @param limit Maximum number of documents to return in response. Use this value to manage pagination. By default will return maximum 25 results. Maximum of 100 results allowed per request.
 * @param offset Offset value. The default value is 0. Use this param to manage pagination.
 * @param orderField Document field that results will be sorted by.
 * @param orderType Order direction. Possible values are DESC for descending order, or ASC for ascending order.
 * @param orderCast Order field type casting. Possible values are int, string, date, time or datetime. The database will attempt to cast the order field to the value you pass here. The default value is a string.
 * @param search Search query. Enter any free text search. The database will try to find a match against all document attributes and children. Max length: 256 chars.
 * @returns [{@link AppwriteDocumentList}, {@link AppwriteError}]
 * @see https://appwrite.io/docs/client/database#databaseListDocuments
 */
async function listDocuments(
  collectionId: string,
  filters?: string[],
  limit?: number,
  offset?: number,
  orderField?: string,
  orderType?: string,
  orderCast?: string,
  search?: string
): Promise<[AppwriteDocumentList, AppwriteError]> {
  return await db
    .listDocuments(
      collectionId,
      filters,
      limit,
      offset,
      orderField,
      orderType,
      orderCast,
      search
    )
    .then(
      (docs: AppwriteDocumentList) => {
        return [docs, null];
      },
      (err: AppwriteError) => {
        return [null, err];
      }
    );
}

/**
 * Get a document by its unique ID. This endpoint response returns a JSON object with the document data.
 * @param collectionId Collection unique ID. You can create a new collection with validation rules using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection).
 * @param documentId Document unique ID.
 * @returns [{@link AppwriteDocument}, {@link AppwriteError}]
 * @see https://appwrite.io/docs/client/database#databaseGetDocument
 */
async function getDocument(
  collectionId: string,
  documentId: string
): Promise<[AppwriteDocument, AppwriteError]> {
  return await db.getDocument(collectionId, documentId).then(
    (doc: AppwriteDocument) => {
      return [doc, null];
    },
    (err: AppwriteError) => {
      return [null, err];
    }
  );
}

/**
 * Update a document by its unique ID. Using the patch method you can pass only specific fields that will get updated.
 * @param collectionId Collection unique ID. You can create a new collection with validation rules using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection).
 * @param documentId Document unique ID.
 * @param data Document data as JSON object.
 * @param read An array of strings with read permissions. By default inherits the existing read permissions. [Learn more about permissions](https://appwrite.io/docs/permissions) and get a full list of available permissions.
 * @param write An array of strings with write permissions. By default inherits the existing write permissions. [Learn more about permissions](https://appwrite.io/docs/permissions) and get a full list of available permissions.
 * @returns [{@link AppwriteDocument}, {@link AppwriteError}]
 * @see https://appwrite.io/docs/client/database#databaseUpdateDocument
 */
async function updateDocument(
  collectionId: string,
  documentId: string,
  data: string,
  read?: string[],
  write?: string[]
): Promise<[AppwriteDocument, AppwriteError]> {
  return await db
    .updateDocument(collectionId, documentId, data, read, write)
    .then(
      (doc: AppwriteDocument) => {
        return [doc, null];
      },
      (err: AppwriteError) => {
        return [null, err];
      }
    );
}

/**
 * Delete a document by its unique ID. This endpoint deletes only the parent documents, its attributes and relations to other documents. Child documents will not be deleted.
 * @param collectionId Collection unique ID. You can create a new collection with validation rules using the Database service [server integration](https://appwrite.io/docs/server/database#createCollection).
 * @param documentId Document unique ID.
 * @returns Can return {@link AppwriteError}
 * @see https://appwrite.io/docs/client/database#databaseUpdateDocument
 */
async function deleteDocument(
  collectionId: string,
  documentId: string
): Promise<AppwriteError> {
  return await db
    .deleteDocument(collectionId, documentId)
    .catch((err: AppwriteError) => {
      return err;
    });
}

export {
  createDocument,
  listDocuments,
  getDocument,
  updateDocument,
  deleteDocument,
};

/**
 * @see https://appwrite.io/docs/models/document
 */
interface AppwriteDocument {
    $id: string;
    $collection: string;
    $permissions: string[];
}

interface AppwriteDocumentList {
    sum: number;
    documents: AppwriteDocument[];
}

export {
    AppwriteDocument,
    AppwriteDocumentList
}
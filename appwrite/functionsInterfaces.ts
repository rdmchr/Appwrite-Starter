import { AppwritePermissions } from './appwriteInterfaces';

/**
 * @see https://appwrite.io/docs/models/execution
 */
interface AppwriteExecution {
    $id: string;
    $permissions: AppwritePermissions;
    functionId: string;
    dateCreated: number;
    trigger: string;
    status: string;
    exitCode: number;
    stdout: string;
    stderr: string;
    time: number;
}

/**
 * @see https://appwrite.io/docs/models/executionList
 */
interface AppwriteExecutionList {
    sum: number;
    executions: AppwriteExecution[];
}

export {
    AppwriteExecution,
    AppwriteExecutionList
}
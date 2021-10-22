import {appwrite} from './appwrite';
import {AppwriteError} from './appwriteInterfaces';
import {AppwriteExecution, AppwriteExecutionList} from './functionsInterfaces';

const func = appwrite.functions;

/**
 * Trigger a function execution. The returned object will return you the current execution status. You can ping the Get Execution endpoint to get updates on the current execution status. Once this endpoint is called, your function execution process will start asynchronously.
 * @param functionId Function unique ID.
 * @param data String of custom data to send to function.
 * @returns [{@link AppwriteExecution}, {@link AppwriteError}]
 * @see https://appwrite.io/docs/client/functions#functionsCreateExecution
 */
async function createExecution(
  functionId: string,
  data?: string
): Promise<[AppwriteExecution, AppwriteError]> {
  return await func.createExecution(functionId, data).then(
    (exec: AppwriteExecution) => {
      return [exec, null];
    },
    (err: AppwriteError) => {
      return [null, err];
    }
  );
}

/**
 * Get a list of all the current user function execution logs. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of the project's executions. [Learn more about different API modes](https://appwrite.io/docs/admin).
 * @param functionId Function unique ID.
 * @param search Search term to filter your list results. Max length: 256 chars.
 * @param limit Results limit value. By default will return maximum 25 results. Maximum of 100 results allowed per request.
 * @param offset Results offset. The default value is 0. Use this param to manage pagination.
 * @param orderType Order result by ASC or DESC order.
 * @returns [{@link AppwriteExecutionList}, {@link AppwriteError}]
 * @see https://appwrite.io/docs/client/functions#functionsListExecutions
 */
async function listExecutions(
  functionId: string,
  search?: string,
  limit?: number,
  offset?: number,
  orderType?: 'ASC' | 'DESC'
): Promise<[AppwriteExecutionList, AppwriteError]> {
  return await func
    .listExecutions(functionId, search, limit, offset, orderType)
    .then(
      (execs: AppwriteExecutionList) => {
        return [execs, null];
      },
      (err: AppwriteError) => {
        return [null, err];
      }
    );
}

/**
 * Get a function execution log by its unique ID.
 * @param functionId Function unique ID.
 * @param executionId Execution unique ID.
 * @returns [{@link AppwriteExecution}, {@link AppwriteError}]
 * @see https://appwrite.io/docs/client/functions#functionsGetExecution
 */
async function getExecution(
  functionId: string,
  executionId: string
): Promise<[AppwriteExecution, AppwriteError]> {
  return await func.getExecution(functionId, executionId).then(
    (exec: AppwriteExecution) => {
      return [exec, null];
    },
    (err: AppwriteError) => {
      return [null, err];
    }
  );
}

export {createExecution, listExecutions, getExecution};

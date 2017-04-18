import { Observable } from 'rxjs/Observable';
import { RequestQueryParams } from './RequestQueryParams';
import { Repository } from './interface';

/**
 * Define service methods for handling the repository related things.
 * Loose couple with project module.
 * 
 * @export
 * @abstract
 * @class RepositoryService
 */
export abstract class RepositoryService {
    /**
     * List all the repositories in the specified project.
     * Specify the 'repositoryName' to only return the repositories which match the name pattern.
     * If pagination needed, set the following parameters in queryParams:
     *   'page': current page,
     *   'page_size': page size.
     * 
     * @abstract
     * @param {(number | string)} projectId
     * @param {string} repositoryName
     * @param {RequestQueryParams} [queryParams]
     * @returns {(Observable<Repository[]> | Repository[])}
     * 
     * @memberOf RepositoryService
     */
    abstract getRepositories(projectId: number | string, repositoryName?: string, queryParams?: RequestQueryParams):Observable<Repository[]> | Repository[];

    /**
     * DELETE the specified repository.
     * 
     * @abstract
     * @param {string} repositoryName
     * @returns {(Observable<any> | any)}
     * 
     * @memberOf RepositoryService
     */
    abstract deleteRepository(repositoryName:string): Observable<any> | any;
}
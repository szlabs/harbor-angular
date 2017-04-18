import { Observable } from 'rxjs/Observable';
import { RequestQueryParams } from './RequestQueryParams';
import { AccessLog } from './interface';

/**
 * Define service methods to handle the access log related things.
 * 
 * @export
 * @abstract
 * @class AccessLogService
 */
export abstract class AccessLogService {
    /**
     * Get the audit logs for the specified project.
     * Set query parameters through 'queryParams', support:
     *  - page
     *  - pageSize
     * 
     * @abstract
     * @param {(number | string)} projectId
     * @param {RequestQueryParams} [queryParams]
     * @returns {(Observable<AccessLog[]> | AccessLog[])}
     * 
     * @memberOf AccessLogService
     */
    abstract getAuditLogs(projectId: number | string, queryParams?: RequestQueryParams): Observable<AccessLog[]> | AccessLog[];

    /**
     * Get the recent logs.
     * 
     * @abstract
     * @param {number} lines : Specify how many lines should be returned.
     * @returns {(Observable<AccessLog[]> | AccessLog[])}
     * 
     * @memberOf AccessLogService
     */
    abstract getRecentLogs(lines: number): Observable<AccessLog[]> | AccessLog[];
}
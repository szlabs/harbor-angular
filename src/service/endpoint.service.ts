import { Observable } from 'rxjs/Observable';
import { RequestQueryParams } from './RequestQueryParams';
import { Endpoint } from './interface';

/**
 * Define the service methods to handle the endpoint related things.
 * 
 * @export
 * @abstract
 * @class EndpointService
 */
export abstract class EndpointService {
    /**
     * Get all the endpoints.
     * Set the argument 'endpointName' to return only the endpoints match the name pattern.
     * 
     * @abstract
     * @param {string} [endpointName]
     * @param {RequestQueryParams} [queryParams]
     * @returns {(Observable<Endpoint[]> | Endpoint[])}
     * 
     * @memberOf EndpointService
     */
    abstract getEndpoints(endpointName?: string, queryParams?: RequestQueryParams): Observable<Endpoint[]> | Endpoint[];
    
    /**
     * Get the specified endpoint.
     * 
     * @abstract
     * @param {(number | string)} endpointId
     * @returns {(Observable<Endpoint> | Endpoint)}
     * 
     * @memberOf EndpointService
     */
    abstract getEndpoint(endpointId: number | string): Observable<Endpoint> | Endpoint;
    
    /**
     * Create new endpoint.
     * 
     * @abstract
     * @param {Endpoint} endpoint
     * @returns {(Observable<any> | any)}
     * 
     * @memberOf EndpointService
     */
    abstract createEndpoint(endpoint: Endpoint): Observable<any> | any;
    
    /**
     * Update the specified endpoint.
     * 
     * @abstract
     * @param {(number | string)} endpointId
     * @param {Endpoint} endpoint
     * @returns {(Observable<any> | any)}
     * 
     * @memberOf EndpointService
     */
    abstract updateEndpoint(endpointId: number | string, endpoint: Endpoint): Observable<any> | any;
    
    /**
     * Delete the specified endpoint.
     * 
     * @abstract
     * @param {(number | string)} endpointId
     * @returns {(Observable<any> | any)}
     * 
     * @memberOf EndpointService
     */
    abstract deleteEndpoint(endpointId: number | string): Observable<any> | any;
    
    /**
     * Ping the specified endpoint.
     * 
     * @abstract
     * @param {Endpoint} endpoint
     * @returns {(Observable<any> | any)}
     * 
     * @memberOf EndpointService
     */
    abstract pingEndpoint(endpoint: Endpoint): Observable<any> | any;
}
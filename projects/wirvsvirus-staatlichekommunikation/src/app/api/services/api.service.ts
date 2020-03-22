/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class ApiService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiLocalesGet
   */
  static readonly ApiLocalesGetPath = '/api/locales';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLocalesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLocalesGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.ApiLocalesGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiLocalesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLocalesGet(params?: {

  }): Observable<void> {

    return this.apiLocalesGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiLocalesIdGet
   */
  static readonly ApiLocalesIdGetPath = '/api/locales/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLocalesIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLocalesIdGet$Response(params: {
    id: any;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.ApiLocalesIdGetPath, 'get');
    if (params) {

      rb.path('id', params.id);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiLocalesIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLocalesIdGet(params: {
    id: any;

  }): Observable<void> {

    return this.apiLocalesIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiCountriesGet
   */
  static readonly ApiCountriesGetPath = '/api/countries';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCountriesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCountriesGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.ApiCountriesGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCountriesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCountriesGet(params?: {

  }): Observable<void> {

    return this.apiCountriesGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiCountriesIdGet
   */
  static readonly ApiCountriesIdGetPath = '/api/countries/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCountriesIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCountriesIdGet$Response(params: {
    id: any;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.ApiCountriesIdGetPath, 'get');
    if (params) {

      rb.path('id', params.id);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCountriesIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCountriesIdGet(params: {
    id: any;

  }): Observable<void> {

    return this.apiCountriesIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiStatesGet
   */
  static readonly ApiStatesGetPath = '/api/states';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStatesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStatesGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.ApiStatesGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiStatesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStatesGet(params?: {

  }): Observable<void> {

    return this.apiStatesGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiStatesIdGet
   */
  static readonly ApiStatesIdGetPath = '/api/states/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStatesIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStatesIdGet$Response(params: {
    id: any;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.ApiStatesIdGetPath, 'get');
    if (params) {

      rb.path('id', params.id);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiStatesIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStatesIdGet(params: {
    id: any;

  }): Observable<void> {

    return this.apiStatesIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiCountiesGet
   */
  static readonly ApiCountiesGetPath = '/api/counties';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCountiesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCountiesGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.ApiCountiesGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCountiesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCountiesGet(params?: {

  }): Observable<void> {

    return this.apiCountiesGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiCountiesIdGet
   */
  static readonly ApiCountiesIdGetPath = '/api/counties/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCountiesIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCountiesIdGet$Response(params: {
    id: any;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.ApiCountiesIdGetPath, 'get');
    if (params) {

      rb.path('id', params.id);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCountiesIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCountiesIdGet(params: {
    id: any;

  }): Observable<void> {

    return this.apiCountiesIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiCitiesGet
   */
  static readonly ApiCitiesGetPath = '/api/cities';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCitiesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCitiesGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.ApiCitiesGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCitiesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCitiesGet(params?: {

  }): Observable<void> {

    return this.apiCitiesGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiCitiesByZipZipGet
   */
  static readonly ApiCitiesByZipZipGetPath = '/api/cities/by_zip/{zip}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCitiesByZipZipGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCitiesByZipZipGet$Response(params: {
    zip: any;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.ApiCitiesByZipZipGetPath, 'get');
    if (params) {

      rb.path('zip', params.zip);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCitiesByZipZipGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCitiesByZipZipGet(params: {
    zip: any;

  }): Observable<void> {

    return this.apiCitiesByZipZipGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiCitiesIdGet
   */
  static readonly ApiCitiesIdGetPath = '/api/cities/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCitiesIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCitiesIdGet$Response(params: {
    id: any;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.ApiCitiesIdGetPath, 'get');
    if (params) {

      rb.path('id', params.id);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCitiesIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCitiesIdGet(params: {
    id: any;

  }): Observable<void> {

    return this.apiCitiesIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiMessagesZipGet
   */
  static readonly ApiMessagesZipGetPath = '/api/messages/{zip}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMessagesZipGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMessagesZipGet$Response(params: {
    zip: any;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.ApiMessagesZipGetPath, 'get');
    if (params) {

      rb.path('zip', params.zip);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiMessagesZipGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMessagesZipGet(params: {
    zip: any;

  }): Observable<void> {

    return this.apiMessagesZipGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}

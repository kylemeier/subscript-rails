declare module "redux-api-middleware";

// export type FluxStandardAction = {
//   type: string | symbol;
//   payload?: any;
//   meta?: any;
//   /**
//    * Only a value of `true` is seen to be error-y
//    */
//   error?: any;
// };

// export type TypeDescriptor = {
//   type: string | symbol;
//   payload?: any;
//   meta?: any;
// };

// export type ReduxStandardApiAction<T> = {
//   /**
//    * Endpoint to hit, or a function to call that results in an endpoint to hit.
//    */
//   endpoint: string | ((state: T) => string);
//   method: "GET" | "HEAD" | "POST" | "PUT" | "PATCH" | "DELETE" | "OPTIONS";
//   headers?: object | ((state: T) => object);
//   body?: object | string | ((state: T) => object | string);
//   credentials?: "omit" | "same-origin" | "include";
//   /**
//    * object or function producing an object of options to pass to the Fetch API.
//    * See: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
//    * for the list of available options.
//    */
//   options?: object | ((state: T) => object);
//   /**
//    * Function/bool for whether or not to bail on a REST request.
//    * True = do not perform network request.
//    */
//   bailout?: boolean | ((state: T) => boolean);
//   /**
//    * Length 3 array of types to assign to the API request's resulting Flux Standard Action's type property for various
//    * circumstances:
//    * index 0: REQUEST - Request has been made (yes, two FSAs result from your request action)
//    * index 1: RECEIVE - Response has been received
//    * index 2: FAILURE - Response was a failure
//    * TypeDescriptor objects will have their meta/payload properties merged into the resulting Flux Standard Actions
//    */
//   types: [
//     string | symbol | TypeDescriptor,
//     string | symbol | TypeDescriptor,
//     string | symbol | TypeDescriptor
//   ];
//   fetch?: (input: Request | string, init?: object) => Promise<Response>;
// };

import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_1ge86eq } from './accounts';
import type { Methods as Methods_5jsziq } from './accounts/_account_id/rooms';
import type { Methods as Methods_1yqawkq } from './accounts/_account_id@string';
import type { Methods as Methods_15w5wo5 } from './accounts/_account_id@string/rate';
import type { Methods as Methods_wgvowr } from './accounts/_from_account_id@string/follow';
import type { Methods as Methods_9xq573 } from './frameworks';
import type { Methods as Methods_1fgm2mw } from './hackathons';
import type { Methods as Methods_43qnrm } from './hackathons/_hackathon_id@string';
import type { Methods as Methods_n783p1 } from './locates';
import type { Methods as Methods_rxl2dw } from './pastworks';
import type { Methods as Methods_uyui7q } from './pastworks/_opus@string';
import type { Methods as Methods_bibtgo } from './rate';
import type { Methods as Methods_1rzs2n2 } from './rooms';
import type { Methods as Methods_ajaf36 } from './rooms/_room_id@string';
import type { Methods as Methods_1hwgv8c } from './rooms/_room_id@string/addchat';
import type { Methods as Methods_1ufrf0y } from './rooms/_room_id@string/members';
import type { Methods as Methods_cw4ito } from './status_tags';
import type { Methods as Methods_19uv47y } from './tech_tags';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '//https://seaffood.com/api/v1' : baseURL).replace(/\/$/, '');
  const PATH0 = '/accounts';
  const PATH1 = '/rooms';
  const PATH2 = '/rate';
  const PATH3 = '/follow';
  const PATH4 = '/frameworks';
  const PATH5 = '/hackathons';
  const PATH6 = '/locates';
  const PATH7 = '/pastworks';
  const PATH8 = '/addchat';
  const PATH9 = '/members';
  const PATH10 = '/status_tags';
  const PATH11 = '/tech_tags';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';
  const DELETE = 'DELETE';

  return {
    accounts: {
      _account_id: (val1: number | string) => {
        const prefix1 = `${PATH0}/${val1}`;

        return {
          rooms: {
            /**
             * Get Join Room
             * @returns success response
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_5jsziq['get']['resBody'], BasicHeaders, Methods_5jsziq['get']['status']>(prefix, `${prefix1}${PATH1}`, GET, option).json(),
            /**
             * Get Join Room
             * @returns success response
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_5jsziq['get']['resBody'], BasicHeaders, Methods_5jsziq['get']['status']>(prefix, `${prefix1}${PATH1}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH1}`,
          },
        };
      },
      _account_id_string: (val1: string) => {
        const prefix1 = `${PATH0}/${val1}`;

        return {
          rate: {
            /**
             * List Rate for User
             * @returns success response
             */
            get: (option?: { query?: Methods_15w5wo5['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_15w5wo5['get']['resBody'], BasicHeaders, Methods_15w5wo5['get']['status']>(prefix, `${prefix1}${PATH2}`, GET, option).json(),
            /**
             * List Rate for User
             * @returns success response
             */
            $get: (option?: { query?: Methods_15w5wo5['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_15w5wo5['get']['resBody'], BasicHeaders, Methods_15w5wo5['get']['status']>(prefix, `${prefix1}${PATH2}`, GET, option).json().then(r => r.body),
            /**
             * Create Rate for User
             * @param option.body - Create Rate Request Body
             * @returns success response
             */
            post: (option: { body: Methods_15w5wo5['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_15w5wo5['post']['resBody'], BasicHeaders, Methods_15w5wo5['post']['status']>(prefix, `${prefix1}${PATH2}`, POST, option).json(),
            /**
             * Create Rate for User
             * @param option.body - Create Rate Request Body
             * @returns success response
             */
            $post: (option: { body: Methods_15w5wo5['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_15w5wo5['post']['resBody'], BasicHeaders, Methods_15w5wo5['post']['status']>(prefix, `${prefix1}${PATH2}`, POST, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_15w5wo5['get']['query'] } | undefined) =>
              `${prefix}${prefix1}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          },
          /**
           * Return a account from the id specified in the path
           * @returns Get success response
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1yqawkq['get']['resBody'], BasicHeaders, Methods_1yqawkq['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Return a account from the id specified in the path
           * @returns Get success response
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1yqawkq['get']['resBody'], BasicHeaders, Methods_1yqawkq['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * Update account info from requested body
           * @param option.body - Update Account Request Body
           * @returns Update success response
           */
          put: (option: { body: Methods_1yqawkq['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1yqawkq['put']['resBody'], BasicHeaders, Methods_1yqawkq['put']['status']>(prefix, prefix1, PUT, option).json(),
          /**
           * Update account info from requested body
           * @param option.body - Update Account Request Body
           * @returns Update success response
           */
          $put: (option: { body: Methods_1yqawkq['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1yqawkq['put']['resBody'], BasicHeaders, Methods_1yqawkq['put']['status']>(prefix, prefix1, PUT, option).json().then(r => r.body),
          /**
           * Only you can delete your account (logical delete)
           * @returns delete success response
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1yqawkq['delete']['resBody'], BasicHeaders, Methods_1yqawkq['delete']['status']>(prefix, prefix1, DELETE, option).json(),
          /**
           * Only you can delete your account (logical delete)
           * @returns delete success response
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1yqawkq['delete']['resBody'], BasicHeaders, Methods_1yqawkq['delete']['status']>(prefix, prefix1, DELETE, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      _from_account_id: (val1: string) => {
        const prefix1 = `${PATH0}/${val1}`;

        return {
          follow: {
            /**
             * Get follow account
             * @returns success response
             */
            get: (option?: { query?: Methods_wgvowr['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_wgvowr['get']['resBody'], BasicHeaders, Methods_wgvowr['get']['status']>(prefix, `${prefix1}${PATH3}`, GET, option).json(),
            /**
             * Get follow account
             * @returns success response
             */
            $get: (option?: { query?: Methods_wgvowr['get']['query'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_wgvowr['get']['resBody'], BasicHeaders, Methods_wgvowr['get']['status']>(prefix, `${prefix1}${PATH3}`, GET, option).json().then(r => r.body),
            /**
             * Follow!!!!!!!!
             * @param option.body - create Follow Request Body
             * @returns success response
             */
            post: (option: { body: Methods_wgvowr['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_wgvowr['post']['resBody'], BasicHeaders, Methods_wgvowr['post']['status']>(prefix, `${prefix1}${PATH3}`, POST, option).json(),
            /**
             * Follow!!!!!!!!
             * @param option.body - create Follow Request Body
             * @returns success response
             */
            $post: (option: { body: Methods_wgvowr['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_wgvowr['post']['resBody'], BasicHeaders, Methods_wgvowr['post']['status']>(prefix, `${prefix1}${PATH3}`, POST, option).json().then(r => r.body),
            /**
             * Remove follow account
             * @returns success response
             */
            delete: (option: { query: Methods_wgvowr['delete']['query'], config?: T | undefined }) =>
              fetch<Methods_wgvowr['delete']['resBody'], BasicHeaders, Methods_wgvowr['delete']['status']>(prefix, `${prefix1}${PATH3}`, DELETE, option).json(),
            /**
             * Remove follow account
             * @returns success response
             */
            $delete: (option: { query: Methods_wgvowr['delete']['query'], config?: T | undefined }) =>
              fetch<Methods_wgvowr['delete']['resBody'], BasicHeaders, Methods_wgvowr['delete']['status']>(prefix, `${prefix1}${PATH3}`, DELETE, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods_wgvowr['get']['query'] } | { method: 'delete'; query: Methods_wgvowr['delete']['query'] } | undefined) =>
              `${prefix}${prefix1}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
          },
        };
      },
      /**
       * Create an account from the requested body
       * @param option.body - Create Account Request
       * @returns create success response
       */
      post: (option: { body: Methods_1ge86eq['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1ge86eq['post']['resBody'], BasicHeaders, Methods_1ge86eq['post']['status']>(prefix, PATH0, POST, option, 'FormData').json(),
      /**
       * Create an account from the requested body
       * @param option.body - Create Account Request
       * @returns create success response
       */
      $post: (option: { body: Methods_1ge86eq['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1ge86eq['post']['resBody'], BasicHeaders, Methods_1ge86eq['post']['status']>(prefix, PATH0, POST, option, 'FormData').json().then(r => r.body),
      $path: () => `${prefix}${PATH0}`,
    },
    frameworks: {
      /**
       * Get Frameworks
       * @returns success response
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_9xq573['get']['resBody'], BasicHeaders, Methods_9xq573['get']['status']>(prefix, PATH4, GET, option).json(),
      /**
       * Get Frameworks
       * @returns success response
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_9xq573['get']['resBody'], BasicHeaders, Methods_9xq573['get']['status']>(prefix, PATH4, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH4}`,
    },
    hackathons: {
      _hackathon_id: (val1: string) => {
        const prefix1 = `${PATH5}/${val1}`;

        return {
          /**
           * Get Hackathon
           * @returns success response
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_43qnrm['get']['resBody'], BasicHeaders, Methods_43qnrm['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Get Hackathon
           * @returns success response
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_43qnrm['get']['resBody'], BasicHeaders, Methods_43qnrm['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      /**
       * List Hackathon
       * @returns success response
       */
      get: (option?: { query?: Methods_1fgm2mw['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1fgm2mw['get']['resBody'], BasicHeaders, Methods_1fgm2mw['get']['status']>(prefix, PATH5, GET, option).json(),
      /**
       * List Hackathon
       * @returns success response
       */
      $get: (option?: { query?: Methods_1fgm2mw['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1fgm2mw['get']['resBody'], BasicHeaders, Methods_1fgm2mw['get']['status']>(prefix, PATH5, GET, option).json().then(r => r.body),
      /**
       * Register a hackathon from given parameters
       * @param option.body - create hackathon Request Body
       * @returns success response
       */
      post: (option: { body: Methods_1fgm2mw['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1fgm2mw['post']['resBody'], BasicHeaders, Methods_1fgm2mw['post']['status']>(prefix, PATH5, POST, option).json(),
      /**
       * Register a hackathon from given parameters
       * @param option.body - create hackathon Request Body
       * @returns success response
       */
      $post: (option: { body: Methods_1fgm2mw['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1fgm2mw['post']['resBody'], BasicHeaders, Methods_1fgm2mw['post']['status']>(prefix, PATH5, POST, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1fgm2mw['get']['query'] } | undefined) =>
        `${prefix}${PATH5}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    locates: {
      /**
       * Get Frameworks
       * @returns success response
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_n783p1['get']['resBody'], BasicHeaders, Methods_n783p1['get']['status']>(prefix, PATH6, GET, option).json(),
      /**
       * Get Frameworks
       * @returns success response
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_n783p1['get']['resBody'], BasicHeaders, Methods_n783p1['get']['status']>(prefix, PATH6, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH6}`,
    },
    pastworks: {
      _opus: (val1: string) => {
        const prefix1 = `${PATH7}/${val1}`;

        return {
          /**
           * Get PastWork
           * @returns OK
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_uyui7q['get']['resBody'], BasicHeaders, Methods_uyui7q['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Get PastWork
           * @returns OK
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_uyui7q['get']['resBody'], BasicHeaders, Methods_uyui7q['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * Update PastWork
           * @param option.body - Update PastWork Request
           * @returns OK
           */
          put: (option: { body: Methods_uyui7q['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_uyui7q['put']['resBody'], BasicHeaders, Methods_uyui7q['put']['status']>(prefix, prefix1, PUT, option).json(),
          /**
           * Update PastWork
           * @param option.body - Update PastWork Request
           * @returns OK
           */
          $put: (option: { body: Methods_uyui7q['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_uyui7q['put']['resBody'], BasicHeaders, Methods_uyui7q['put']['status']>(prefix, prefix1, PUT, option).json().then(r => r.body),
          /**
           * Delete PastWork
           * @returns OK
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_uyui7q['delete']['resBody'], BasicHeaders, Methods_uyui7q['delete']['status']>(prefix, prefix1, DELETE, option).json(),
          /**
           * Delete PastWork
           * @returns OK
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_uyui7q['delete']['resBody'], BasicHeaders, Methods_uyui7q['delete']['status']>(prefix, prefix1, DELETE, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      /**
       * List PastWork
       * @returns OK
       */
      get: (option?: { query?: Methods_rxl2dw['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_rxl2dw['get']['resBody'], BasicHeaders, Methods_rxl2dw['get']['status']>(prefix, PATH7, GET, option).json(),
      /**
       * List PastWork
       * @returns OK
       */
      $get: (option?: { query?: Methods_rxl2dw['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_rxl2dw['get']['resBody'], BasicHeaders, Methods_rxl2dw['get']['status']>(prefix, PATH7, GET, option).json().then(r => r.body),
      /**
       * Create a past work from the requested body
       * @param option.body - Create PastWork Request
       * @returns create success response
       */
      post: (option: { body: Methods_rxl2dw['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_rxl2dw['post']['resBody'], BasicHeaders, Methods_rxl2dw['post']['status']>(prefix, PATH7, POST, option).json(),
      /**
       * Create a past work from the requested body
       * @param option.body - Create PastWork Request
       * @returns create success response
       */
      $post: (option: { body: Methods_rxl2dw['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_rxl2dw['post']['resBody'], BasicHeaders, Methods_rxl2dw['post']['status']>(prefix, PATH7, POST, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_rxl2dw['get']['query'] } | undefined) =>
        `${prefix}${PATH7}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    rate: {
      /**
       * List Account Rate
       * @returns success response
       */
      get: (option?: { query?: Methods_bibtgo['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_bibtgo['get']['resBody'], BasicHeaders, Methods_bibtgo['get']['status']>(prefix, PATH2, GET, option).json(),
      /**
       * List Account Rate
       * @returns success response
       */
      $get: (option?: { query?: Methods_bibtgo['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_bibtgo['get']['resBody'], BasicHeaders, Methods_bibtgo['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_bibtgo['get']['query'] } | undefined) =>
        `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    rooms: {
      _room_id: (val1: string) => {
        const prefix1 = `${PATH1}/${val1}`;

        return {
          addchat: {
            /**
             * Add Chat Room
             * @param option.body - add chat Room Request body
             * @returns success response
             */
            post: (option: { body: Methods_1hwgv8c['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_1hwgv8c['post']['resBody'], BasicHeaders, Methods_1hwgv8c['post']['status']>(prefix, `${prefix1}${PATH8}`, POST, option).json(),
            /**
             * Add Chat Room
             * @param option.body - add chat Room Request body
             * @returns success response
             */
            $post: (option: { body: Methods_1hwgv8c['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_1hwgv8c['post']['resBody'], BasicHeaders, Methods_1hwgv8c['post']['status']>(prefix, `${prefix1}${PATH8}`, POST, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH8}`,
          },
          members: {
            /**
             * Add Account In Rooms
             * @param option.body - add account in room Request body
             * @returns success response
             */
            post: (option: { body: Methods_1ufrf0y['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_1ufrf0y['post']['resBody'], BasicHeaders, Methods_1ufrf0y['post']['status']>(prefix, `${prefix1}${PATH9}`, POST, option).json(),
            /**
             * Add Account In Rooms
             * @param option.body - add account in room Request body
             * @returns success response
             */
            $post: (option: { body: Methods_1ufrf0y['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_1ufrf0y['post']['resBody'], BasicHeaders, Methods_1ufrf0y['post']['status']>(prefix, `${prefix1}${PATH9}`, POST, option).json().then(r => r.body),
            /**
             * Remove Account In Rooms
             * @returns success response
             */
            delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_1ufrf0y['delete']['resBody'], BasicHeaders, Methods_1ufrf0y['delete']['status']>(prefix, `${prefix1}${PATH9}`, DELETE, option).json(),
            /**
             * Remove Account In Rooms
             * @returns success response
             */
            $delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_1ufrf0y['delete']['resBody'], BasicHeaders, Methods_1ufrf0y['delete']['status']>(prefix, `${prefix1}${PATH9}`, DELETE, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH9}`,
          },
          /**
           * Get Room
           * @returns success response
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_ajaf36['get']['resBody'], BasicHeaders, Methods_ajaf36['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * Get Room
           * @returns success response
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_ajaf36['get']['resBody'], BasicHeaders, Methods_ajaf36['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * update Room
           * @param option.body - update Room Request body
           * @returns success response
           */
          put: (option: { body: Methods_ajaf36['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_ajaf36['put']['resBody'], BasicHeaders, Methods_ajaf36['put']['status']>(prefix, prefix1, PUT, option).json(),
          /**
           * update Room
           * @param option.body - update Room Request body
           * @returns success response
           */
          $put: (option: { body: Methods_ajaf36['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_ajaf36['put']['resBody'], BasicHeaders, Methods_ajaf36['put']['status']>(prefix, prefix1, PUT, option).json().then(r => r.body),
          /**
           * delete Room
           * @returns success response
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_ajaf36['delete']['resBody'], BasicHeaders, Methods_ajaf36['delete']['status']>(prefix, prefix1, DELETE, option).json(),
          /**
           * delete Room
           * @returns success response
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_ajaf36['delete']['resBody'], BasicHeaders, Methods_ajaf36['delete']['status']>(prefix, prefix1, DELETE, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      /**
       * List Account
       * @returns success response
       */
      get: (option?: { query?: Methods_1rzs2n2['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1rzs2n2['get']['resBody'], BasicHeaders, Methods_1rzs2n2['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * List Account
       * @returns success response
       */
      $get: (option?: { query?: Methods_1rzs2n2['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_1rzs2n2['get']['resBody'], BasicHeaders, Methods_1rzs2n2['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      /**
       * Create Rooms
       * @param option.body - create Room Request Body
       * @returns success response
       */
      post: (option: { body: Methods_1rzs2n2['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1rzs2n2['post']['resBody'], BasicHeaders, Methods_1rzs2n2['post']['status']>(prefix, PATH1, POST, option).json(),
      /**
       * Create Rooms
       * @param option.body - create Room Request Body
       * @returns success response
       */
      $post: (option: { body: Methods_1rzs2n2['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_1rzs2n2['post']['resBody'], BasicHeaders, Methods_1rzs2n2['post']['status']>(prefix, PATH1, POST, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_1rzs2n2['get']['query'] } | undefined) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    status_tags: {
      /**
       * Get Frameworks
       * @returns success response
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_cw4ito['get']['resBody'], BasicHeaders, Methods_cw4ito['get']['status']>(prefix, PATH10, GET, option).json(),
      /**
       * Get Frameworks
       * @returns success response
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_cw4ito['get']['resBody'], BasicHeaders, Methods_cw4ito['get']['status']>(prefix, PATH10, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH10}`,
    },
    tech_tags: {
      /**
       * Get Frameworks
       * @returns success response
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_19uv47y['get']['resBody'], BasicHeaders, Methods_19uv47y['get']['status']>(prefix, PATH11, GET, option).json(),
      /**
       * Get Frameworks
       * @returns success response
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_19uv47y['get']['resBody'], BasicHeaders, Methods_19uv47y['get']['status']>(prefix, PATH11, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH11}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;

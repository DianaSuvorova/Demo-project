/* globals
jest
*/

import { apiMiddleware, ApiError } from 'redux-api-middleware';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import { getRoomDeatails } from './actions';
import { mockResponse } from '../../helpers';

const mockStore = configureMockStore([
  thunkMiddleware,
  apiMiddleware,
]);

const fetch = window.fetch;

describe('getRoomDeatails', () => {
  afterEach(() => {
    window.fetch = fetch;
  });

  it('dispatches ROOM_DETAILS_SUCCESS on succesful request', () => {
    const data = { name: 'Tea Chats', id: 0, users: ['Ryan', 'Nick'] };
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve(mockResponse(200, null, JSON.stringify(data)))
    );

    const initialState = {};
    const store = mockStore(initialState);

    const expectedPayload = [{
      meta: undefined,
      type: 'REQUEST',
      payload: undefined,
    }, {
      meta: undefined,
      type: 'ROOM_DETAILS_SUCCESS',
      payload: data,
    }];


    store.dispatch(getRoomDeatails(0)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedPayload);
    });
  });

  it('dispatches FAILURE action on failed reques', () => {
    const error = { message: 'there was an error' };
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve(mockResponse(500, error, JSON.stringify({})))
    );

    const initialState = {};
    const store = mockStore(initialState);

    const expectedPayload = [{
      meta: undefined,
      type: 'REQUEST',
      payload: undefined,
    }, {
      error: true,
      meta: undefined,
      type: 'FAILURE',
      payload: new ApiError(500, error),
    }];

    store.dispatch(getRoomDeatails(0)).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedPayload);
    });
  });
});

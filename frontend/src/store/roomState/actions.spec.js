/* globals
jest
*/

import { apiMiddleware } from 'redux-api-middleware';
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

  it('dispatches ROOM_DETAILS_SUCCESS action on suceessfuls request', () => {
    const data = { name: 'Tea Chats', id: 0, users: ['Ryan', 'Nick'] };
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve(mockResponse(200, null, JSON.stringify(data)))
    );


    const initialState = {};
    const store = mockStore(initialState);

    store.dispatch(getRoomDeatails(0)).then(() => {
      const actions = store.getActions();
      const expectedPayload = { meta: undefined, type: 'ROOM_DETAILS_SUCCESS', payload: data };
      expect(actions[1]).toEqual(expectedPayload);
    });
  });
});

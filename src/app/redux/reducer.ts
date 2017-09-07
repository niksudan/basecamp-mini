import {
  THROW_ERROR,
  REQUEST_ACCESS_TOKEN, RECEIVE_ACCESS_TOKEN,
  REQUEST_AUTH, RECEIVE_AUTH,
  SET_ACCOUNT,
  REQUEST_TODOS, RECEIVE_TODOS, RESET_TODOS,
  RECEIVE_TOTAL_TODOS,
  UPDATE_TIMESTAMP,
  SET_REFRESH,
} from './constants';

const initialState = {
  isFetchingToken: false,
  isAuthenticating: false,
  isFetchingTodos: false,
  didInvalidate: false,
  error: '',
  accessToken: {},
  auth: {},
  account: {},
  items: [],
  total: 0,
  lastUpdated: false,
  refresh: () => {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case THROW_ERROR:
      return Object.assign({}, state, {
        didInvalidate: true,
        error: action.data,
      });
    case REQUEST_ACCESS_TOKEN:
      return Object.assign({}, state, {
        isFetchingToken: true,
      });
    case RECEIVE_ACCESS_TOKEN:
      return Object.assign({}, state, {
        isFetchingToken: false,
        accessToken: action.data,
      });
    case REQUEST_AUTH:
      return Object.assign({}, state, {
        isAuthenticating: true,
      });
    case RECEIVE_AUTH:
      return Object.assign({}, state, {
        isAuthenticating: false,
        auth: action.data,
      });
    case SET_ACCOUNT:
      return Object.assign({}, state, {
        account: action.data,
      });
    case REQUEST_TODOS:
      return Object.assign({}, state, {
        isFetchingTodos: true,
      });
    case RECEIVE_TODOS:
      return Object.assign({}, state, {
        isFetchingTodos: false,
        items: action.data,
      });
    case RESET_TODOS:
      return Object.assign({}, state, {
        items: [],
      });
    case RECEIVE_TOTAL_TODOS:
      return Object.assign({}, state, {
        total: action.total,
      });
    case UPDATE_TIMESTAMP:
      return Object.assign({}, state, {
        lastUpdated: action.data,
      });
    case SET_REFRESH:
      return Object.assign({}, state, {
        refresh: action.data,
      });
    default:
      return state;
  }
};

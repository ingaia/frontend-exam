import { action } from 'typesafe-actions';
import { AuthTypes } from './types';
import { merge, get } from 'lodash';

const defaultactions = (name: string, constant: string) => (
  {
    [`${name}Request`]: (data?: any) => (
      action(get(AuthTypes, `${constant}_REQUEST`), { data })
    ),
    [`${name}Success`]: (data?: any) => (
      action(get(AuthTypes, `${constant}_SUCCESS`), { data })
    )
  }
)

const actions = {};

export default merge(
  actions,
  defaultactions('login', 'LOGIN'),
  defaultactions('logout', 'LOGOUT'),
);

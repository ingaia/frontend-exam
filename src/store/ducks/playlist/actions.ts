import { action } from 'typesafe-actions';
import { PlaylistTypes } from './types';
import { merge, get } from 'lodash';

const defaultactions = (name: string, constant: string) => (
  {
    [`${name}Request`]: (nextPageToken?: string) => (
      action(get(PlaylistTypes, `${constant}_REQUEST`), { nextPageToken })
    ),
    [`${name}Success`]: (data?: any) => (
      action(get(PlaylistTypes, `${constant}_SUCCESS`), { data })
    ),
    [`${name}Failure`]: (error?: string) => (
      action(get(PlaylistTypes, `${constant}_FAILURE`), { error })
    )
  }
)

const actions = {};

export default merge(
  actions,
  defaultactions('playlist', 'PLAYLIST')
);

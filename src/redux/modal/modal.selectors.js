import { createSelector } from 'reselect';

const selectModal = (state) => state.modal;

export const selectModalVisibility = createSelector([selectModal],
  (modal) => modal.visible);

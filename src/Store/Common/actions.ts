import { createAction } from 'typesafe-actions';

export const COMMON_CODES = 'common/COMMON_CODES';

export const COMMON_TAGS = 'common/COMMON_TAGS';
export const COMMON_TAGS_SUCCESS = 'common/COMMON_TAGS_SUCCESS';
export const COMMON_TAGS_FAILURE = 'common/CHECK_LOGIN_FAILURE';

export const commonTags = createAction(COMMON_TAGS)();

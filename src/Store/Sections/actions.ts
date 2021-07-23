import { createAction } from 'typesafe-actions';
import { SectionGubunItem, SectionGubunCode } from 'CommonTypes';
// const { createStandardAction } = deprecated;

export const RESET_SECTIONS_POST = 'sections/RESET_SECTIONS_POST';
export const RESET_SECTIONS_HISTORYS = 'sections/RESET_SECTIONS_HISTORYS';

export const GET_SECTIONS_POST = 'sections/GET_SECTIONS_POST';
export const GET_SECTIONS_POST_SUCCESS = 'sections/GET_SECTIONS_POST_SUCCESS';
export const GET_SECTIONS_POST_FAILURE = 'sections/GET_SECTIONS_POST_FAILURE';

export const GET_SECTIONS_HISTORY = 'sections/GET_SECTIONS_HISTORY';
export const GET_SECTIONS_HISTORY_SUCCESS = 'sections/GET_SECTIONS_HISTORY_SUCCESS';
export const GET_SECTIONS_HISTORY_FAILURE = 'sections/GET_SECTIONS_HISTORY_FAILURE';

export const GET_HISTORY_DETAIL = 'sections/GET_HISTORY_DETAIL';
export const GET_HISTORY_DETAIL_SUCCESS = 'sections/GET_HISTORY_DETAIL_SUCCESS';
export const GET_HISTORY_DETAIL_FAILURE = 'sections/GET_HISTORY_DETAIL_FAILURE';

export const getSectionsPost = createAction(GET_SECTIONS_POST, (section: SectionGubunItem) => ({
    section,
}))();

export const getSectionsHistoryAction = createAction(GET_SECTIONS_HISTORY, (section: SectionGubunCode) => ({
    section,
}))();

export const getHistoryDetailAction = createAction(
    GET_HISTORY_DETAIL,
    ({ section, post_uuid }: { section: SectionGubunCode; post_uuid: string }) => ({
        section,
        post_uuid,
    })
)();

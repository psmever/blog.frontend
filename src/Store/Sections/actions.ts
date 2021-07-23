import { createAction } from 'typesafe-actions';
import { SectionGubunItem } from 'CommonTypes';
// const { createStandardAction } = deprecated;

export const GET_SECTIONS_POST = 'sections/GET_SECTIONS_POST';

export const getSectionsPost = createAction(GET_SECTIONS_POST, (gubun: SectionGubunItem) => ({
    gubun,
}))();

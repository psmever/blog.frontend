import { DefaultStatus, WeatherItem, CovidItem } from 'CommonTypes';

import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type SpecialtyAction = ActionType<typeof actions>;

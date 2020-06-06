import { Reducer } from "redux";
import * as commonTypes from "./commonTypes";

export default function createReducer<S>( initialState: S, handlers: any ): Reducer<S> {
	const r = (state: S = initialState, action: commonTypes.Action<S>): S => {
		if (handlers.hasOwnProperty(action.type)) {
			return handlers[action.type](state, action);
		} else {
			return state;
		}
	};

	return r as Reducer<S>;
}


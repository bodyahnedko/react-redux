import { showAlert } from './actions';
import { POST_CREATE } from './types';

const forbidden = ['fuck', 'php'];

export function forbiddenWordsMiddleware({ dispatch }) {
	return function (next) {
		return function (action) {
			if (action.type === POST_CREATE) {
				const found = forbidden.filter((w) =>
					action.payload.title.includes(w)
				);
				if (found.length) {
					return dispatch(
						showAlert('You are spammer! Fuck outa here!!!')
					);
				}
			}
			return next(action);
		};
	};
}

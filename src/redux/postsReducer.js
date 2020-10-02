import { FETCH_POSTS, POST_CREATE } from './types';

const initialState = {
	posts: [],
	fetchedPosts: [],
};

export const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case POST_CREATE:
			return {
				...state,
				posts: state.posts.concat(action.payload),
			};
		case FETCH_POSTS:
			return {
				...state,
				fetchedPosts: action.payload,
			};
		default:
			return state;
	}
};

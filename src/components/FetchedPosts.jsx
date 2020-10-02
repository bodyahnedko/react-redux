import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions';
import Loader from './Loader';
import Post from './Post';

function FetchedPosts() {
	const dispatch = useDispatch();
	const posts = useSelector((state) => state.posts.fetchedPosts);
	const isLoading = useSelector((state) => state.app.loading);

	if (!posts.length && !isLoading) {
		return (
			<button
				className="btn btn-primary"
				onClick={() => {
					dispatch(fetchPosts());
				}}
			>
				Load Posts
			</button>
		);
	}
	return isLoading ? (
		<Loader />
	) : (
		posts.map((post) => <Post title={post.title} key={post.id} />)
	);
}

export default FetchedPosts;

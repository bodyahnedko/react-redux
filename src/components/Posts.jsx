import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';

function Posts({ myPosts }) {
	console.log(myPosts)
	if (!myPosts.length) {
		return <p>No myPosts!!!</p>;
	}
	return myPosts.map((post) => <Post title={post.title} key={post.id} />);
}

const mapStateToProps = state => {
	return {
		myPosts: state.posts.posts
	}
}

export default connect(mapStateToProps, null)(Posts);

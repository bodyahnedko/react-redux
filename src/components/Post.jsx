import React from 'react';

function Post({ title }) {
	return (
		<div className="card">
			<div className="card-body">
				<h5 className="card-title">Post: {title}</h5>
			</div>
		</div>
	);
}

export default Post;

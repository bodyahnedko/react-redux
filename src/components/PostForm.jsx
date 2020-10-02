import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost, showAlert } from '../redux/actions';
import Alert from './Alert';

class PostForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
		};
	}

	submitHandler = (event) => {
		event.preventDefault();
		const { title } = this.state;

		if (!title.trim()) {
			this.props.showAlert('Please fill the input');
			return;
		}

		const newPost = {
			title,
			id: Date.now().toString(),
		};
		console.log(newPost);
		this.props.createPost(newPost);
		this.setState({ title: '' });
	};

	changeInputHandler = (event) => {
		event.persist();
		this.setState((prev) => ({
			...prev,
			...{
				[event.target.name]: event.target.value,
			},
		}));
	};

	render() {
		return (
			<>
				{this.props.alert && <Alert text={this.props.alert} />}
				<form onSubmit={this.submitHandler}>
					<div className="form-group">
						<label htmlFor="title">Заголовок поста</label>
						<input
							type="text"
							name="title"
							id="tile"
							className="form-control"
							placeholder="Title"
							value={this.state.title}
							onChange={this.changeInputHandler}
						/>
					</div>
					<button className="btn btn-success" type="submit">
						Submit
					</button>
				</form>
			</>
		);
	}
}

const mapDispatchToProps = {
	createPost,
	showAlert,
};

const mapStateToProps = (state) => {
	return {
		alert: state.app.alert,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);

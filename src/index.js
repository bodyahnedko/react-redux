import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './redux/rootReducer';
import thunk from 'redux-thunk';
import { forbiddenWordsMiddleware } from './redux/middleware';

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk, forbiddenWordsMiddleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ &&
			window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

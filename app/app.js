import angular from 'angular';
import { combineReducers } from 'redux';
import createLogger from 'redux-logger';
import ngRedux from 'ng-redux';
import reducers from './reducers';
import page from './components/page/component';
import counter from './components/counter/component';

const logger = createLogger({
    level: 'info',
    collapsed: true
});

export default angular
	.module('app', [
        ngRedux,
        page,
		counter
    ])
    .config(($ngReduxProvider) => {
        let reducer = combineReducers(reducers);
        $ngReduxProvider.createStoreWith(reducer, [logger]);
    })
	.name;
import angular from 'angular';
import PageClass from './PageClass';

export default angular
    .module('app.page', [])
    .component('page', {
        template: `
			<h1>Home</h1>
			<h2>{{$ctrl.value}}</h2>
			<button ng-click="$ctrl.increment()">+</button>
			<button ng-click="$ctrl.decrement()">-</button>
			<button ng-click="$ctrl.reset()">Reset</button>
			
			<hr/>
			
			<counter></counter>
		`,
        controller: PageClass
    })
    .name;
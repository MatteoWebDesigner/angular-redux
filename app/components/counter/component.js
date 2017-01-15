import angular from 'angular';
import CounterClass from './CounterClass';

export default angular
    .module('app.counter', [])
    .component('counter', {
        template: `
			<h1>Counter</h1>
			<h2>{{$ctrl.value}}</h2>
			<button ng-click="$ctrl.increment()">+</button>
			<button ng-click="$ctrl.decrement()">-</button>
			<button ng-click="$ctrl.reset()">Reset</button>
		`,
        controller: CounterClass
    })
    .name;
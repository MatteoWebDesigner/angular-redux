import actions from 'actionCreators';

class Counter {
	constructor($ngRedux) {
		this.unsubscribe = $ngRedux.connect(this.mapStateToThis,actions)(this);
	}
	
	$onInit() {
		
	}
	
	$onDestroy() {
		this.unsubscribe();
	}
	
	mapStateToThis(state) {
		return {
			value: state.counter
		};
	}
}

export default Counter;
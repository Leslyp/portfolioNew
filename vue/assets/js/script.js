new Vue({
	el: '#exerciseEvents',
	data: {
		value: '',
		counter: 0
	},
	methods : {
		alertUser : function(event) {
			alert("You clicked the button!");
		},
		increase : function(event) {
			return this.counter++;
		},
		reset : function(event) {
			return this.counter = 0;
		}
	},
	computed : {
		result : function(event) {
			return this.counter < 5 ? "not there yet" : "done";
		}
	},
	watch : {
		result : function(event) {
			var vm = this;
			setTimeout( function() {
            	vm.counter = 0;
            }, 5000);
      	}
	}
});

new Vue({
	el: '#exerciseDisplayData',
	data: {
		name: 'Lesly',
		age: 18,
		multiplier: 3,
		product: 0
	},
	methods : {
		multiplyAge : function() {
			this.product = this.age * this.multiplier;
			return this.product;
		},
		generateRandomNum : function() {
			return Math.random();
		}
	}
});


new Vue({
	el: '#app',
	data: {
		title: 'Hello World!',
		link: 'http://google.com'
	},
	methods : {
		changeTitle : function(event) {
			this.title = event.target.value;
		}
	}
});
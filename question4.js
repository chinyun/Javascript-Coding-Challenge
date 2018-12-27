let calculator = {
	num1: 0,
	num2: 0,
	read (value1,value2){ 
        let obj = { 
			num1: +prompt('enter fisrt value', value1),
			num2: +prompt('enter scecond value', value2)
		};

		this.num1 = obj.num1;
		this.num2 = obj.num2;
	},
	total: 0,
	sum(){
		this.total = this.num1 + this.num2;
		return this.total;
	},
	mutiply(){
		return (this.total)*2 ;
	}

};
calculator.read();
alert( calculator.sum() );
alert( calculator.mutiply() );

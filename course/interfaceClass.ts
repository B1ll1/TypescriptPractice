interface ICountString{
	stringTxt:string;
	countTxt():number;
}

interface IPrintTxt{
	print(value:string):void;
}

class MyText implements ICountString, IPrintTxt {

	constructor(public stringTxt:string){};

	countTxt():number{
		return this.stringTxt.length;
	};

	print(value:string):void{
		console.log("Text: " + value);
	}
}

var t = new MyText("my text....");
console.log(t.countTxt());
t.print("Teste");


interface ICarString{
	name:string;
	getCar():string;
}

interface ICarColor{
	color:string;
	getColor():string;
}

interface ICar extends ICarString, ICarColor{
	power:number;
	getPower():number;
}

class Car implements ICar{
	constructor(public name:string, public color:string, public power:number){};

	getCar():string{
		return this.name;
	};

	getColor():string{
		return this.color;
	};

	getPower():number{
		return this.power;
	};
}


var Camaro = new Car("Camaro", "Vermelho", 45);
console.log(Camaro.getCar(), Camaro.getColor(), Camaro.getPower());
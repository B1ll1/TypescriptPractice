class Car{
	constructor(
		public name:string,
		public color:string,
		public power:number
	){};

	printCar():void{
		console.log(this.name, this.color, this.power);
	}	
}

var Camaro = new Car('Camaro', 'Amarelo', 500);

Camaro.printCar();

class Car2{
	private _name:string;
	private _color:string;
	private _power:number;
	public static list: Array<string> = [];
	constructor(newName:string, newColor:string, newPower:number){
		this._name = newName;
		this._color = newColor;
		this._power = newPower;
		Car2.list.push(newName);
	};

	get name():string {
		return this._name;
	}

	set name(value:string){
		this._name = value;
	}

}

var ferrari = new Car2('ferrari', 'vermelho', 50);

console.log(Car2.list);
console.log(ferrari);

var Camaro2 = new Car2("Camaro2", "Red", 56);

console.log(Car2.list);
ferrari.name = "ferrari2";
console.log(ferrari.name);



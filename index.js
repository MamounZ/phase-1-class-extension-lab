class Polygon{
	constructor(arr = []){
		this.arr = arr
	}

	get countSides(){
		return this.arr.length
	}

	get perimeter(){
		return this.arr.reduce((accum, element) => accum + element, 0)
	}
}

class Triangle extends Polygon{
	get isValid(){
		for(let y = 0; y < this.arr.length; y++)
		{
			let otherElements = []
			for(let i = 0; i < this.arr.length; i++)
			{
				if (i != y)
					otherElements.push(this.arr[i])
			}
			let sumOfTwoSides = otherElements.reduce((accum, element) => accum + element, 0)
			if (sumOfTwoSides <= this.arr[y])
				return false
		}
		return true
	}
}

class Square extends Polygon{
	get isValid(){
		let [a,b,c,d] = this.arr
		return (a == b && b == c && c == d)
	}
	get area(){
		return this.arr[0] ** 2
	}
}

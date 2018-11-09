/**
 * Created by qqwan on 2018/11/9.
 */
class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    toString () {
        return this.x + ',' + this.y
    }
    add () {
        console.log('--add----' + (this.x + this.y))
        return (this.x + this.y)
    }
}
class ColorPoint extends Point{
    constructor(x, y, color){
        super(x,y)
        this.color = color
    }
    toString () {
        return this.color + ',' + this.x + ',' + this.y
    }
}

export {ColorPoint}
class Ground{
    constructor(x,y,l,a){
        this.x=x;
        this.y=y;
        this.l=l;
        this.a=a;
    }
    display(){
        rect(this.x,this.y,this.l,this.a);
        

    }
}
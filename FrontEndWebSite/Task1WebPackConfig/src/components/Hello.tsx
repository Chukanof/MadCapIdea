import * as React from "react";
import * as ReactDOM from "react-dom";


export interface HelloProps { compiler: string; framework: string; }

export class Foo {

    private _num: number;

    constructor(num: number) {
        this._num = num;
    }

    getNum() {
        return this._num * 2;
    }

}


// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Hello extends React.Component<HelloProps, undefined> {
    render() {

        var foo = new Foo(12);
        var x = foo.getNum();
        console.log("Foo should be 24");
        console.log(x);

        var foo2 = new Foo(20);
        var x2 = foo2.getNum();
        console.log("Foo should be 40");
        console.log(x2);



        var foo3 = new Foo(40);
        var x3 = foo3.getNum();
        console.log("Foo should be 80");
        console.log(x3);

        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}
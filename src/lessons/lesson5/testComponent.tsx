import React from 'react';

type StateType = {
    count: number,
    //bindedFunc: Function,
}

export default class TestComponent extends React.Component<any, StateType> {
    constructor(props: any) {
        super(props);
        this.state = {
            count: 0,
            //bindedFunc: this.incrementCount.bind(this),
        }
    }

    // incrementCount() {
    //     let count = this.state.count + 1;
    //     this.setState({ count });
    // }

    incrementCount = () => {
        let count = this.state.count + 1;
        this.setState({ count });
    }

    getData = () => {
        let qc = document.querySelectorAll('.Test');
        //console.log('qc ', qc);
        //@ts-ignore
        window.qc = qc;
        let gc = document.getElementsByClassName('Test');
        //console.log('gc ', gc);
        //@ts-ignore
        window.gc = gc;
        //@ts-ignore
        //console.log([...gc].filter(el => +el.innerText > 1));
        console.log([].filter.call(gc, el => +el.innerText > 1));
    }

    addDiv = () => {
        let cont = document.getElementsByClassName('last')[0];
        let div = document.createElement('div');
        div.innerText = '4';
        div.className = 'Test';
        cont.appendChild(div);
    }


    render() {
        return (
            <div className="container">
                <h1>Test</h1>
                <h2>{this.state.count}</h2>
                <div className="Test">1</div>
                <div className="Test">2</div>
                <div className="Test last">3</div>
                {/*<button onClick={() => this.state.bindedFunc()}>ClicMe</button>*/}
                {/*<button onClick={this.incrementCount}>ClicMe</button>*/}
                <button onClick={this.getData}>ClicMe</button>
                <button onClick={this.addDiv}>AddDiv</button>
            </div>
        );
    }
}
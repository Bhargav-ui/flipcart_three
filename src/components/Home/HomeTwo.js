// import { Component } from "react";
import React, { Component } from "react";
import {render} from 'react-dom';
import Child from './Child';
import Nav from '../Nav/Nav';


class HomeTwo extends Component {
    constructor() {
        super();
        this.state = {
            name: "React",
            number: 55,
            students: [{
                nam: "student 1",
                id: 123
            },
            {
                nam: "student 2",
                id: 456
            },
            {
                nam: "stundent 3",
                id: 789
            }
            ]
        };
    }
    render () {
        const { a, b } = this.state;
        const { students } = this.state;
        console.log(this.state);
        return (
            <>
            {/* <Nav/> */}
                <h3>class components</h3>
                <h4>{this.state.name}</h4>
                <h4>{this.state.number}</h4>
                <h4>{a}</h4> 
                <h4>{b}</h4>
                {
                students.map((item,i) => {
                    return(

                    <h2 key={i}>name is {item.nam}</h2>
                    )
                })
            } 

            <Child students={this.state.students} />
            </>
        );
    }
}

export default HomeTwo;
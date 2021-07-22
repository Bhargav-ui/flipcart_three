import React, { Component } from 'react';
import { render } from 'react-dom';

import Nav from '../Nav/Nav';


class Child extends Component {

    render () {
        const { students } = this.props;
        return (
            <>
            {/* <Nav/> */}
                {
                    students.map((item,i) => {
                        return (

                            <h5 key={i}> {item.nam}</h5>
                        );
                    })
                }
            </>
        );
    }
}

export default Child;
import React, {createRef} from 'react';
import PropTypes from 'prop-types';
import {Button,} from 'antd';
//props默认值及校验，事件绑定及传参，prevState,setState,ref,
class Test extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            s1: 1,
            s2: 's2',
            s3: ['s31','s32'],
        };
        this.handleClick = this.handleClick.bind(this);

        this.inputRef = React.createRef();

        console.log(this.props);
    }

    // setState、prevState使用
    handleClick(type,e)
    {
        console.log(type);
        console.log(e);
        this.setState((prevState,props) => ({
            s1: type == 1 ? prevState.s1+1 : prevState.s1-1,
        }));
    }

    // ref使用
    refClick = () => {
        this.inputRef.current.focus();
        console.log("Input Value: ", this.inputRef.current.value)
    }

    render() {
        const element = React.createElement(
            'h1',
            {className: 'greeting'},
            'Hello, world!'
        );
        return (
            <div>
                {/*事件绑定&传参*/}
                <Button type={"primary"} onClick={(e) => this.handleClick(1,e)}>点击增加</Button>
                <Button type={"primary"} onClick={(e) => this.handleClick(2,e)}>点击减少</Button>
                <h1>技数器：{this.state.s1}</h1>

                {/*ref使用*/}
                <input type='text' ref = {this.inputRef} />
                <button onClick={this.refClick}>点击</button>
                {element}
            </div>

        )
    }
}
// props默认值及校验
Test.defaultProps = {
    p1: 1,
    p2: 'p2',
    p3: ['p31','p32'],
};
Test.propTypes = {
    p1: PropTypes.number,
    p2: PropTypes.string,
    p3: PropTypes.array,
};

export default Test;
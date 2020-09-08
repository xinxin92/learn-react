import React from 'react';
import PropTypes from 'prop-types';
import {Button,} from 'antd';
//props默认值及校验，事件绑定及传参，prevState,setState,
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

        console.log(this.props);
    }

    handleClick(type,e)
    {
        console.log(type);
        console.log(e);
        this.setState((prevState,props) => ({
            s1: type == 1 ? prevState.s1+1 : prevState.s1-1,
        }));
    }

    render() {
        return (
            <div>
                <Button type={"primary"} onClick={(e) => this.handleClick(1,e)}>点击增加</Button>
                <Button type={"primary"} onClick={(e) => this.handleClick(2,e)}>点击减少</Button>
                <h1>技数器：{this.state.s1}</h1>
            </div>

        )
    }
}

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
import React, { Component } from 'react'
import PropTypes from 'prop-types'

//redux-UI组件
class TestReduxUI extends Component {
    render() {
        const { value, onIncrement, onDecrement } = this.props
        return (
            <div>
                <h1>{value}</h1>
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
            </div>
        )
    }
}

TestReduxUI.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
}

export default TestReduxUI;
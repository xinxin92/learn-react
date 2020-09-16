import React, { Component } from 'react'
import PropTypes from 'prop-types'

//redux-UI组件
class TestReduxUI extends Component {
    render() {
        const { value, onIncreaseClick } = this.props
        return (
            <div>
                <span>{value}</span>
                <button onClick={onIncreaseClick}>Increase</button>
            </div>
        )
    }
}

TestReduxUI.propTypes = {
    value: PropTypes.number.isRequired,
    onIncreaseClick: PropTypes.func.isRequired
}

export default TestReduxUI;
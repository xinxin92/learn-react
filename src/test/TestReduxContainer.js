import {connect} from "react-redux";
import TestReduxUI from "./TestReduxUI";

//redux-容器组件
const ContainerCounter = connect(
    mapStateToProps,
    mapDispatchToProps
)(TestReduxUI);

// Map Redux state to component props
function mapStateToProps(state) {
    return {
        value: state.count
    }
};

// Action
const increaseAction = { type: 'increase' };

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(increaseAction)
    }
};

export default ContainerCounter;
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
        value: state.TestRedux.count
    }
};

// Action
const onIncrementAction = { type: 'increase' };
const onDecrementAction = { type: 'decrease' };

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        onIncrement: () => dispatch(onIncrementAction),
        onDecrement: () => dispatch(onDecrementAction)
    }
};

export default ContainerCounter;
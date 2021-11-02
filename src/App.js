import "./App.css";
import AddSubtract from "./containers/AddSubtract";
import DivideMultiply from "./containers/DivideMultiply";
import { connect } from "react-redux";
import {
  addSubVal,
  addSubCurrentVal,
  divideMulVal,
  divideMulCurrentVal,
} from "./actions";

const mapStateToProps = (state) => ({
  addSubVal: state.addSubVal,
  addSubCurrentVal: state.addSubCurrentVal,
  divideMulVal: state.divideMulVal,
  divideMulCurrentVal: state.divideMulCurrentVal,
});

const mapDispatchToProps = (dispatch) => ({
  // dispatching plain actions
  onAddSubVal: (num) => dispatch(addSubVal(num)),
  onAddSubCurrentVal: (num) => dispatch(addSubCurrentVal(num)),
  onDivideMulVal: (num) => dispatch(divideMulVal(num)),
  onDivideMulCurrentVal: (num) => dispatch(divideMulCurrentVal(num)),
});

function App(props) {
  return (
    <div className="App">
      <h1>Funny Calculator</h1>
      <p>A Calculator I built using redux</p>
      <AddSubtract {...props} />
      <DivideMultiply {...props} />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

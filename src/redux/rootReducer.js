import { combineReducers } from "redux";

import intakeReducer from "./Intake/intake.reducer";

const rootReducer = combineReducers({
  intake: intakeReducer,
});

export default rootReducer;

import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';
import EmployeeFromReducer from './EmployeeFromReducer';
import EmployeeReducer from './EmployeeReducer';

export default combineReducers({
  auth: AuthReducer,
  employeeForm: EmployeeFromReducer,
  employees: EmployeeReducer
});

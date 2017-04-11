import { combineReducers } from 'redux'
import {ADD_CAMPUS, ADD_STUDENT, RECEIVE_CAMPUSES, RECEIVE_STUDENTS, RECEIVE_CAMPUS_STUDENTS, DELETE_STUDENT, SELECT_CAMPUS} from './action-creators'

const initialState = {
  allCampuses: [],
  allStudents: [],
  allCampusStudents: [],
  selectedStudent: {},
  selectedCampus: {}
}

const rootReducer = function(state = initialState, action) {
  const newState = Object.assign({}, state)
  switch (action.type) {
    case ADD_CAMPUS:
      newState.allCampuses = [...newState.allCampuses, action.campus]
      break;
    case ADD_STUDENT:
      newState.allStudents = [...newState.allStudents, action.student]
      break;
    case DELETE_STUDENT:
      newState.allStudents.forEach((student, i) => {
        if (student.id === action.student.id){
          newState.allStudents.splice(i, 1)
        }
      })
      break;
    case RECEIVE_CAMPUSES:
      newState.allCampuses = action.campuses
      break;
    case RECEIVE_STUDENTS:
      newState.allStudents = action.students
      break;
    case RECEIVE_CAMPUS_STUDENTS:
      newState.allCampusStudents = action.campusStudents
      break;
    case SELECT_CAMPUS:
      newState.allCampuses.forEach(campus =>{
        if (campus.name === action.campusName){
          newState.selectedCampus = campus
        }
      })
      break;
    default:
      return state
  }
  return newState
};

export default rootReducer



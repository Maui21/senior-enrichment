import axios from 'axios'

export const ADD_CAMPUS = 'ADD_CAMPUS'
export const ADD_STUDENT = 'ADD_STUDENT'
export const DELETE_STUDENT = 'DELETE_STUDENT'
export const DELETE_CAMPUS = 'DELETE_CAMPUS'
export const SELECT_CAMPUS = 'SELECT_CAMPUS'
export const RECEIVE_CAMPUSES = 'RECEIVE_CAMPUSES'
export const RECEIVE_STUDENTS = 'RECEIVE_STUDENTS'
export const RECEIVE_CAMPUS_STUDENTS = 'RECEIVE_CAMPUS_STUDENTS'

export const receiveCampuses = (campuses) => {
  return {
    type: RECEIVE_CAMPUSES,
    campuses
  }
}
export const receiveStudents = (students) => {
  return {
    type: RECEIVE_STUDENTS,
    students
  }
}
export const receiveCampusStudents = (campusStudents) => {
  return {
    type: RECEIVE_CAMPUS_STUDENTS,
    campusStudents
  }
}
export const addCampus = (campus) => {
  return {
    type: ADD_CAMPUS,
    campus
  }
}

export const selectCampus = (campusName) => {
  return {
    type: SELECT_CAMPUS,
    campusName
  }
}

export const addStudent = (student) => {
  return {
    type: ADD_STUDENT,
    student
  }
}

export const expelStudent = (student) => {
  return {
    type: DELETE_STUDENT,
    student
  }
}

export const createCampus = (campus) => (dispatch) => {
  axios.post('/api/campuses', {name: campus})
  .then(newCampus => newCampus.data)
  .then(newCampus => {dispatch(addCampus(newCampus))})
}
export const createStudent = (student) => (dispatch) => {
  return axios.post('/api/students', student)
  .then(newStudent => newStudent.data)
  .then(newStudent => {
    dispatch(addStudent(newStudent))
  })
}

export const loadAllCampuses = () => (dispatch) => {
  axios('/api/campuses')
  .then(allCampuses => {
    dispatch(receiveCampuses(allCampuses.data))
  })
}

export const loadAllStudents = () => (dispatch) => {
  return axios.get('/api/students')
  .then(allStudents => {
    dispatch(receiveStudents(allStudents.data))
  })
}

export const loadCampusStudents = (CampusId) => (dispatch) => {
  return axios.get(`/api/students/${CampusId}`)
  .then(allCampusStudents => {
    dispatch(receiveCampusStudents(allCampusStudents.data))
  })
}

export const removeStudent = (studentId) => (dispatch) => {
  return axios.delete(`/api/students/${studentId}`)
  .then(deletedStudent => {
    console.log(deletedStudent.data)
    dispatch(expelStudent(deletedStudent.data))
    // dispatch(expelStudent(deletedStudent.data.fulfillmentValue))
  })
}

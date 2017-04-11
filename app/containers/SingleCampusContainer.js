import React, { Component } from 'react';
import {Link} from 'react-router'
import Navbar from '../components/Navbar'
import { connect } from 'react-redux'

const SingleCampus = (props) => {
  const allStudents = props.allCampusStudents.map(student => {
    return (
      <li key={student.id}><Link to={`/students/${student.id}`}> {student.name} </Link></li>
    )
  })
  console.log('SC props', props)
  return (
    <div>
      <Navbar />
      <hr />
      <h1>{props.selectedCampus.name}</h1>
      <ul>
        {allStudents}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    // allCampuses: state.allCampuses,
    allStudents: state.allStudents,
    selectedCampus: state.selectedCampus,
    allCampusStudents: state.allCampusStudents
    // selectedStudent: state.selectedStudent
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const SingleCampusContainer = connect(mapStateToProps, mapDispatchToProps)(SingleCampus)

export default SingleCampusContainer

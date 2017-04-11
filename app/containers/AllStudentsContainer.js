import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router'
import Navbar from '../components/Navbar'
import {removeStudent} from '../reducers/action-creators'
import store from '../store'

class AllStudents extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  deleteStudent(e){
    e.preventDefault()
    const studentId = e.target.attributes.value.nodeValue
    // console.dir(e.target.attributes.value.nodeValue)
    store.dispatch(removeStudent(studentId))
  }

  render(){
    // const deleteStudent = this.deleteStudent
    const addStudentButton = <button><Link to='/students/addStudent'>ADD STUDENT</Link></button>
    const allStudents = this.props.allStudents.map(student => {
      return (
        <tr key={student.id}>
          <td>{student.id}</td>
          <td>{student.name}</td>
          <td>{student.email}</td>
          <td>My Campus Name</td>
          <td><button><Link to={`/students/${student.id}`}>Student Info</Link></button></td>
          <td><button value={student.id} onClick={this.deleteStudent} type='delete'>DELETE</button></td>
        </tr>
      )
    })
    return (
      <div>
        <Navbar />
        <hr />
        <h1>All Students</h1>
        {addStudentButton}
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>E-mail</th>
          <th>Campus</th>
          <th>LINK</th>
          <th>REMOVE</th>
        </tr>
        {allStudents}
        <hr />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    allStudents: state.allStudents,
    allCampuses: state.allCampuses
  }
}

const mapDispatchToProps = dispatch => ({})

const AllStudentsConatiner = connect(mapStateToProps, mapDispatchToProps)(AllStudents)

export default AllStudentsConatiner


        // <li key={student.id}><Link to={`/students/${student.id}`}> {student.name} </Link></li>

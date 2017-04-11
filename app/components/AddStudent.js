import React, { Component } from 'react';
import {Link} from 'react-router'
import Navbar from './/Navbar'
import store from '../store'
import {createStudent} from '../reducers/action-creators'
import { connect } from 'react-redux'


class AddStudent extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      email: '',
      campusId: 1
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  onSubmit(e){
    e.preventDefault()
    store.dispatch(createStudent(this.state))
    console.log('Student Added!')
  }

  onSelect(e){
    e.preventDefault()
    console.dir(e.target)
    console.log('target', e.target.value, e.target.key)
    this.setState({campusId: e.target.value})
    console.log(this.state)
  }

  handleNameChange(e){
    this.setState({name: e.target.value})
  }

  handleEmailChange(e){
    this.setState({email: e.target.value})
  }

  render(){
    const onSubmit = this.onSubmit
    const onSelect = this.onSelect
    const handleNameChange = this.handleNameChange
    const handleEmailChange = this.handleEmailChange
    const allCampuses = this.props.allCampuses.map(campus => {
      return (
        <option value={campus.id} key={campus.id}>{campus.name}</option>
      )
    })
    return (
      <div>
        <Navbar />
        <hr />
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Name: </label>
          <input value={this.state.name} placeholder="Yoo-Nah" type ='text' name='student-name' onChange={handleNameChange}/>
          <label htmlFor="email">E-Mail: </label>
          <input value={this.state.email} placeholder="Best-Leader@Fullstack.com" type ='text' name='student-email' onChange={handleEmailChange}/>
          <label htmlFor="Campus">Campus: </label>
          <select onChange={(e)=>{
            onSelect(e)
          }}>
            {allCampuses}
          </select>
          <button type='submit'>Add Student</button>
        </form>
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

const mapDispatchToProps = dispatch => ({

})

const AddStudentConatiner = connect(mapStateToProps, mapDispatchToProps)(AddStudent)

export default AddStudentConatiner


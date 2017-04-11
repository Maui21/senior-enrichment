import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router'
import {createCampus, selectCampus} from '../reducers/action-creators'
import store from '../store'
import Navbar from '../components/Navbar'

class AllCampuses extends Component {
  constructor(props){
    super(props)
      this.state = {
        input: ''
      }
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e){
    e.preventDefault()
    store.dispatch(createCampus(this.state.input))
    console.log('2. submitted campus in C.Container', this.state.input)
  }

  handleChange(e){
    this.setState({input: e.target.value})
  }

  chooseCampus(e){
    const campusName = e.target.text
    store.dispatch(selectCampus(campusName))
  }
  render(){

    const onSubmit = this.onSubmit
    const chooseCampus = this.chooseCampus
    const handleChange = this.handleChange
    const campusList = this.props.allCampuses.map(campus => {
            return (
              <li onClick={chooseCampus} key={campus.id}><Link to={`/campuses/${campus.id}`}>{campus.name}</Link></li>
            )
          })

    return (
      <div>
        <Navbar />
        <hr />
        <h1>All the best campuses!!!</h1>
        <ol className='campus-list'>
          {campusList}
        </ol>
        <hr/>
        <form onSubmit={onSubmit}>
          <input value={this.state.input} type ='text' name='campus' onChange={handleChange}/>
          <button type='submit'>Add Campus</button>
        </form>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    allCampuses: state.allCampuses,
    // allStudents: state.allStudents,
    // selectedCampus: state.selectedCampus,
    // selectedStudent: state.selectedStudent
  }
}

const mapDispatchToProps = (dispatch) => ({})

const AllCampusesContainer = connect(mapStateToProps, mapDispatchToProps)(AllCampuses)

export default AllCampusesContainer;

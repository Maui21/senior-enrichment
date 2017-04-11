'use strict'

import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'
import store from './store'
import Home from './components/Home'
import AddStudent from './components/AddStudent'
import AllCampusesContainer from './containers/AllCampusContainer'
import AllStudentsContainer from './containers/AllStudentsContainer'
import SingleCampusContainer from './containers/SingleCampusContainer'
import {loadAllCampuses, loadAllStudents, loadCampusStudents} from './reducers/action-creators'

function onMainEnter(){
  store.dispatch(loadAllCampuses())
}

function onStudentsEnter(){
  store.dispatch(loadAllStudents())
}

function onSingleCampusEnter(nextRouterState){
  // console.log(nextRouterState.params.id)
  store.dispatch(loadCampusStudents(nextRouterState.params.id))
}

render (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path= "/" onEnter={onMainEnter}>
        <Route path= "/campuses" component={AllCampusesContainer} />
        <Route path= "/campuses/:id" component={SingleCampusContainer} onEnter={onSingleCampusEnter}/>
        <Route path="/students" component={AllStudentsContainer} onEnter={onStudentsEnter}/>
        <Route path="/students/addStudent" component={AddStudent}/>
        {/*<Route path= "/students/:id" component={SingleStudent} />*/}
        <IndexRoute component={AllCampusesContainer}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)


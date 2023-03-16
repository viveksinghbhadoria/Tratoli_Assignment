import {Route, Switch} from 'react-router-dom'
import React, {Suspense} from 'react'

import './App.css'

const NotFound = React.lazy(() => import('./components/NotFound'))
const About = React.lazy(() => import('./components/About'))
const PokemonList = React.lazy(() => import('./components/PokemonList'))

const App = () => (
  <>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={PokemonList} />
        <Route exact path="/about/:id" component={About} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </>
)

export default App

import React from 'react'
import { Switch, Route } from 'react-router-dom'
import GeneralSettings from '../GeneralSettings'

const Main: React.StatelessComponent<{}> = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={GeneralSettings} />
      </Switch>
    </main>
  )
}

export default Main

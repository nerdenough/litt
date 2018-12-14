import React from 'react'
import { Switch, Route } from 'react-router-dom'
import GeneralSettings from '../GeneralSettings'
import BitcoinSettings from '../BitcoinSettings'
import GithubSettings from '../GithubSettings'

const Main: React.StatelessComponent<{}> = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={GeneralSettings} />
        <Route path="/bitcoin" component={BitcoinSettings} />
        <Route path="/github" component={GithubSettings} />
      </Switch>
    </main>
  )
}

export default Main

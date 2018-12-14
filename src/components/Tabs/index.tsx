import React from 'react'
import { faTools } from '@fortawesome/free-solid-svg-icons'
import { faBitcoin, faGithub } from '@fortawesome/free-brands-svg-icons'
import Tab from '../Tab'
import './styles.css'

const Tabs: React.StatelessComponent<{}> = () => {
  return (
    <div className="tabs">
      <Tab icon={faTools} path="/" />
      <Tab icon={faBitcoin} path="/bitcoin" />
      <Tab icon={faGithub} path="/github" />
    </div>
  )
}

export default Tabs

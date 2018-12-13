import React from 'react'
import { faTools } from '@fortawesome/free-solid-svg-icons'
import { faBitcoin, faGithub } from '@fortawesome/free-brands-svg-icons'
import Tab from '../Tab'
import './styles.css'

const Tabs: React.StatelessComponent<{}> = () => {
  return (
    <div className="tabs">
      <Tab icon={faTools} />
      <Tab icon={faBitcoin} />
      <Tab icon={faGithub} />
    </div>
  )
}

export default Tabs

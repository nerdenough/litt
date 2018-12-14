import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

import './styles.css'

interface Props {
  icon: any
  path: string
}

const Tab: React.StatelessComponent<Props> = props => {
  return (
    <Link to={props.path}>
      <div className="tab">
        <FontAwesomeIcon icon={props.icon} />
      </div>
    </Link>
  )
}

export default Tab

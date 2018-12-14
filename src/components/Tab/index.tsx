import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

import './styles.css'

interface Props {
  icon: any
  path: string
}

const Tab: React.StatelessComponent<Props> = props => {
  return (
    <Link to={props.path}>
      <div
        className={classNames('tab', {
          active: props.path === window.location.pathname,
        })}
      >
        <FontAwesomeIcon icon={props.icon} />
      </div>
    </Link>
  )
}

export default Tab

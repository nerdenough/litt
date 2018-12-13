import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './styles.css'

interface Props {
  icon: any
}

const Tab: React.StatelessComponent<Props> = props => {
  return (
    <div className="tab">
      <FontAwesomeIcon icon={props.icon} />
    </div>
  )
}

export default Tab

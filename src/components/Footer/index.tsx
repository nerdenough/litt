import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './styles.css'

const Footer: React.StatelessComponent<{}> = () => {
  return (
    <footer className="footer">
      Made with&nbsp;
      <FontAwesomeIcon className="heart" icon={faHeart} />
      &nbsp;by Brendan Goodenough
    </footer>
  )
}

export default Footer

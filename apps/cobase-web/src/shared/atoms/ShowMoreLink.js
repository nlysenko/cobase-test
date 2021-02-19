/**
 *
 * ShowMoreLink
 *
 */

import React from 'react'
import { Link } from 'react-router-dom'
import { createUseStyles } from 'react-jss'

import { WhiteColor } from 'shared/styles/colors'

const useStyles = createUseStyles({
  showMore: {
    display: 'flex',
    alignItems: 'center',
    height: 10,
    marginTop: 9,
  },

  point: {
    display: 'block',
    width: 4,
    height: 4,
    backgroundColor: WhiteColor,
    marginRight: 5,
    borderRadius: '50%',
  },
})

const ShowMoreLink = () => {
  const showMore = (e) => {
    e.preventDefault()
  }

  const classes = useStyles()

  return (
    <Link className={classes.showMore} to="/#" onClick={showMore}>
      <i className={classes.point} />

      <i className={classes.point} />

      <i className={classes.point} />
    </Link>
  )
}

export default ShowMoreLink

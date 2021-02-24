/**
 *
 * Description
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import { ReactComponent as GroupIcon } from 'assets/svg/group.svg'

import { RhinoColor, FiordColor } from 'shared/styles/colors'

const useStyles = createUseStyles({
  description: {
    paddingTop: 25,
    order: '1',
  },

  header: {
    display: 'flex',
    alignItems: 'center',
  },

  title: {
    fontSize: 34,
    marginRight: 20,
    color: RhinoColor,
    lineHeight: '44px',
  },

  icon: {
    height: 38,

    '@media (max-width: 767px)': {
      display: 'none',
    },
  },

  about: {
    paddingTop: 8,
    fontSize: 17,
    color: FiordColor,
  },
})

const Description = (props) => {
  const { title, about } = props

  const classes = useStyles()

  return (
    <div className={classes.description}>
      <div className={classes.header}>
        <h1 className={classes.title}>{title}</h1>

        <i className={classes.icon}>
          <GroupIcon />
        </i>
      </div>

      <p className={classes.about}>{about}</p>
    </div>
  )
}

export default Description

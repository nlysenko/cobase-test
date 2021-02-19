/**
 *
 * Add
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import { ReactComponent as AddIcon } from 'assets/svg/add-icon.svg'

import { AtlantisColor, ForestGreenColor } from 'shared/styles/colors'

const useStyles = createUseStyles({
  icon: {
    height: 18,
    cursor: 'pointer',

    '&:hover path': {
      fill: AtlantisColor,
    },

    '&:active path': {
      fill: ForestGreenColor,
    },
  },
})

const Add = () => {
  const classes = useStyles()

  return (
    <i className={classes.icon}>
      <AddIcon />
    </i>
  )
}

export default Add

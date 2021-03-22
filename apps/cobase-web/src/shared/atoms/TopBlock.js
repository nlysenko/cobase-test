/**
 *
 * TopBlock
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import { BotticelliColor, NepalColor } from 'shared/styles/colors'

const useStyles = createUseStyles({
  top: {
    height: 53,
    borderBottom: [1, 'solid', BotticelliColor],
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 29,
  },

  title: {
    fontSize: 13,
    color: NepalColor,
  },
})

const TopBlock = (props) => {
  const { name } = props

  const classes = useStyles()

  return (
    <div className={classes.top}>
      <h3 className={classes.title}>{name}</h3>
    </div>
  )
}

export default TopBlock

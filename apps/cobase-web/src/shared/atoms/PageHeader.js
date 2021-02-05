/**
 *
 * PageHeader
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import { BotticelliColor, NepalColor } from 'shared/styles/colors'

const useStyles = createUseStyles({
  header: {
    height: 53,
    borderBottom: [1, 'solid', BotticelliColor],
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 10,
  },

  title: {
    fontSize: 13,
    color: NepalColor,
  },
})

const PageHeader = (props) => {
  const { name } = props

  const classes = useStyles()

  return (
    <header className={classes.header}>
      <h3 className={classes.title}>{name}</h3>
    </header>
  )
}

export default PageHeader

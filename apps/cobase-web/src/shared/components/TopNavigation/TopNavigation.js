/**
 *
 * TopNavigation
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

// import { LochmaraColor } from 'shared/styles/colors'

const useStyles = createUseStyles({
  navigation: {
    // backgroundColor: LochmaraColor,
  },
})

const TopNavigation = () => {
  const classes = useStyles()

  return <div className={classes.navigation}></div>
}

export default TopNavigation

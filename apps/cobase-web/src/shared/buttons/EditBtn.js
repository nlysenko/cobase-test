/**
 *
 * EditBtn
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import Edit from 'assets/img/edit.png'

const useStyles = createUseStyles({
  edit_btn: {
    display: 'block',
    width: 32,
    height: 30,
    border: 'none',
    background: 'none',
    cursor: 'pointer',

    '&:focus': {
      outline: 'none',
    },

    '@media (max-width: 767px)': {
      display: 'none',
    },
  },

  image: {
    display: 'block',
    width: '100%',
  },
})

const EditBtn = () => {
  const classes = useStyles()

  return (
    <button className={classes.edit_btn}>
      <img className={classes.image} src={Edit} alt="edit" />
    </button>
  )
}

export default EditBtn

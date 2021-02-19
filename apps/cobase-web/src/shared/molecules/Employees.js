/**
 *
 * Employess
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import {
  AppleColor,
  EmeraldColor,
  AtlantisColor,
  WhiteColor,
  ForestGreenColor,
} from 'shared/styles/colors'

const useStyles = createUseStyles({
  employees: {
    display: 'flex',
    padding: {
      top: 17,
      bottom: 20,
    },
    order: '2',
  },

  employeesList: {
    display: 'flex',
  },

  employee: {
    marginRight: 5,
  },

  avatar: {
    display: 'block',
    width: 28,
    height: 28,
    cursor: 'pointer',
  },

  icon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: AppleColor,
    borderRadius: 8,
    border: [1, 'solid', EmeraldColor],
    width: 28,
    height: 28,
    cursor: 'pointer',

    '&:hover': {
      background: AtlantisColor,
    },

    '&:active': {
      background: ForestGreenColor,
    },
  },

  plusOne: {
    fontSize: 13,
    fontStyle: 'normal',
    color: WhiteColor,
  },
})

const Employees = (props) => {
  const { employees } = props

  const classes = useStyles()
  return (
    <div className={classes.employees}>
      <ul className={classes.employeesList}>
        {employees.map((employee, i) => (
          <li className={classes.employee} key={i}>
            <img
              className={classes.avatar}
              src={process.env.PUBLIC_URL + employee}
              alt="avatar"
            />
          </li>
        ))}
      </ul>

      <i className={classes.icon}>
        <span className={classes.plusOne}>+1</span>
      </i>
    </div>
  )
}

export default Employees

/**
 *
 * Employess
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import NewEmployeeBtn from 'shared/buttons/NewEmployeeBtn'

const useStyles = createUseStyles({
  wrapper: {
    display: 'flex',
    padding: {
      top: 17,
      bottom: 20,
    },
    order: '2',
  },

  employees_list: {
    display: 'flex',
  },

  employee: {
    marginRight: 5,
  },

  employee_avatar: {
    display: 'block',
    width: 28,
    height: 28,
    cursor: 'pointer',
  },
})

const Employees = (props) => {
  const { employees } = props

  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <ul className={classes.employees_list}>
        {employees.map((employee, i) => (
          <li className={classes.employee} key={i}>
            <img
              className={classes.employee_avatar}
              src={employee}
              alt="avatar"
            />
          </li>
        ))}
      </ul>

      <NewEmployeeBtn />
    </div>
  )
}

export default Employees

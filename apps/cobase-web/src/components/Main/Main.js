/**
 *
 * Main
 *
 */

import React, { useState, useEffect } from 'react'
import { createUseStyles } from 'react-jss'
import { connect } from 'react-redux'

import ToolBar from 'components/ToolBar/ToolBar'
import SideBar from 'components/SideBar/SideBar'
import MainPage from 'components/MainPage/MainPage'

import playAudioMelody from 'shared/audio/playAudioMelody'
import toggleIssueAudio from 'assets/mp3/toggle-issue.mp3'
import toggleIssueFalseAudio from 'assets/mp3/toggle-issue-false.mp3'

const useStyles = createUseStyles({
  main: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    transition: '0.5s',
  },

  sidebar_open: {
    paddingLeft: 250,
    transition: '0.5s',
  },
})

const Main = (props) => {
  const { tasks } = props

  useEffect(() => {
    function handleResize() {
      setSideBarOpen(window.innerWidth >= 768)
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const [sideBarOpen, setSideBarOpen] = useState(window.innerWidth >= 768)
  const [taskIndex, setTaskIndex] = useState(0)

  const nextIssue = () => {
    if (taskIndex + 1 in tasks) {
      setTaskIndex(taskIndex + 1)

      playAudioMelody(toggleIssueAudio)
    } else {
      playAudioMelody(toggleIssueFalseAudio)
    }
  }

  const prevIssue = () => {
    if (taskIndex - 1 in tasks) {
      setTaskIndex(taskIndex - 1)

      playAudioMelody(toggleIssueAudio)
    } else {
      playAudioMelody(toggleIssueFalseAudio)
    }
  }

  const toggleSideBar = () => {
    setSideBarOpen(!sideBarOpen)
  }

  const classes = useStyles()

  return (
    <div
      className={`${classes.main} ${sideBarOpen ? classes.sidebar_open : ''}`}
    >
      <ToolBar sideBarIsOpen={sideBarOpen} toggleSideBar={toggleSideBar} />

      <SideBar sideBarIsOpen={sideBarOpen} taskIndex={taskIndex} />

      <MainPage
        sideBarIsOpen={sideBarOpen}
        taskIndex={taskIndex}
        nextIssue={nextIssue}
        prevIssue={prevIssue}
      />
    </div>
  )
}

const mapStateToProps = function(state) {
  return {
    tasks: state.tasks,
  }
}
export default connect(mapStateToProps)(Main)

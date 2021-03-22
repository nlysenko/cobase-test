/**
 *
 * App
 *
 */

import React, { useState, useEffect } from 'react'
import { createUseStyles } from 'react-jss'
import { connect } from 'react-redux'

import ToolBar from 'components/ToolBar/ToolBar'
import SideBar from 'components/SideBar/SideBar'
import Main from 'components/Main/Main'
import Footer from 'components/Footer/Footer'
import Overlay from 'shared/atoms/Overlay'

import playAudioMelody from 'shared/audio/playAudioMelody'
import toggleIssueAudio from 'assets/mp3/toggle-issue.mp3'
import toggleIssueFalseAudio from 'assets/mp3/toggle-issue-false.mp3'

import {
  WhiteColor,
  BlackColor,
  BgColor,
  BaliHaiColor,
} from 'shared/styles/colors'

const useStyles = createUseStyles({
  '@global': {
    '*': {
      margin: 0,
      padding: 0,
      boxSizing: 'inherit',
    },

    html: {
      boxSizing: 'border-box',
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
    },

    a: {
      color: WhiteColor,
      textDecoration: 'none',
    },

    body: {
      color: BlackColor,
      fontSize: 16,
      fontFamily: 'Heebo-Regular',
      background: BgColor,
    },

    ul: {
      listStyle: 'none',
    },

    main: {
      width: 780,
      minHeight: 828,
      paddingBottom: 110,
      backgroundColor: WhiteColor,
      border: [1, 'solid', BaliHaiColor],
      borderRadius: 4,

      '@media (max-width: 1080px)': {
        width: 'calc(100% - 14px)',
      },

      '@media (max-width: 769px)': {
        width: '100%',
        minHeight: 768,
        paddingBottom: 23,
      },
    },
  },
})

const App = (props) => {
  const { tasks } = props

  useEffect(() => {
    function handleResize() {
      setOverlayIsVisible(window.innerWidth < 769)
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const [sideBarOpen, setSideBarOpen] = useState(false)
  const [overlayIsVisible, setOverlayIsVisible] = useState(false)
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

  useEffect(() => {
    if (sideBarOpen && overlayIsVisible) {
      document.body.style.overflow = 'hidden'
    } else document.body.style.overflow = 'visible'
  }, [sideBarOpen, overlayIsVisible])

  useStyles()
  return (
    <div role="application">
      {sideBarOpen && overlayIsVisible ? (
        <Overlay toggleSideBar={toggleSideBar} />
      ) : (
        false
      )}

      <ToolBar sideBarIsOpen={sideBarOpen} toggleSideBar={toggleSideBar} />

      <SideBar
        sideBarIsOpen={sideBarOpen}
        toggleSideBar={toggleSideBar}
        taskIndex={taskIndex}
      />

      <Main
        sideBarIsOpen={sideBarOpen}
        taskIndex={taskIndex}
        nextIssue={nextIssue}
        prevIssue={prevIssue}
      />

      <Footer />
    </div>
  )
}

const mapStateToProps = function(state) {
  return {
    tasks: state.tasks,
  }
}
export default connect(mapStateToProps)(App)

/**
 *
 * Gallery
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import Add from 'shared/icons/Add'

import { BlackSqueezeColor, RhinoColor } from 'shared/styles/colors'

const useStyles = createUseStyles({
  gallery: {
    borderTop: [1, 'solid', BlackSqueezeColor],
    padding: {
      top: 18,
      bottom: 12,
    },
    order: '4',
  },

  inner: {
    display: 'flex',
    alignItems: 'center',
  },

  title: {
    fontSize: 17,
    fontWeight: 'normal',
    lineHeight: 1.29,
    paddingRight: 13,
    color: RhinoColor,
  },

  galleryList: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 16,
  },

  item: {
    width: 64,
    height: 64,
    margin: {
      right: 10,
      bottom: 10,
    },
  },

  image: {
    display: 'block',
    width: '100%',
    height: '100%',
  },
})

const Gallery = (props) => {
  const { arr } = props

  const classes = useStyles()
  return (
    <div className={classes.gallery}>
      <div className={classes.inner}>
        <h3 className={classes.title}>Gallery</h3>

        <Add />
      </div>

      <ul className={classes.galleryList}>
        {arr.map((img, i) => (
          <li className={classes.item} key={i}>
            <img
              className={classes.image}
              src={process.env.PUBLIC_URL + img}
              alt="gallery"
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Gallery

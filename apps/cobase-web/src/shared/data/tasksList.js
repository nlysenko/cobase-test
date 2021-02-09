/**
 *
 * tasksList
 *
 */

import User1 from 'assets/img/user-1.png'
import User2 from 'assets/img/user-2.png'
import User3 from 'assets/img/user-3.png'

import Gallery1 from 'assets/img/gallery-1.jpg'
import Gallery2 from 'assets/img/gallery-2.jpg'
import Gallery3 from 'assets/img/gallery-3.jpg'
import Gallery4 from 'assets/img/gallery-4.jpg'
import Gallery5 from 'assets/img/gallery-5.jpg'

const tasksList = [
  {
    name: 'Fix bathroom walls',

    description:
      'Bathroom walls needs some fixing. Descriptions can be longer than only one sentence. Descriptions can be longer than only one sentence. Descriptions can be longer than only one sentence.',

    employees: [User1, User2, User3],

    tags: ['Thirdfloor', 'bathroom', 'tilework'],

    gallery: [Gallery1, Gallery2, Gallery3, Gallery4, Gallery5],

    subtasks: ['Install water isolation', 'Prepare for tiling'],
  },

  {
    name: 'Fix bedroom floor',

    description:
      'Bedroom floor needs some fixing. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',

    employees: [User1, User2],

    tags: ['Firstfloor', 'bathroom', 'tilework', 'insulation', 'parquet'],

    gallery: [Gallery2, Gallery4, Gallery5],

    subtasks: ['Fix insulation', 'Lay parquet', 'Put a tile'],
  },
]

export default tasksList

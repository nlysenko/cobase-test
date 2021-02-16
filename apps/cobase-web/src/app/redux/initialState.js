/**
 *
 * initialState
 *
 */

export const initialState = {
  tasks: {
    0: {
      name: 'Fix bathroom walls',
      id: '9ec36070-b579-4227-a6e4-a65aaa42a0a3',
      progress: 'In process',
      lastUpdate: Date.now() - 1740000,
      description:
        'Bathroom walls needs some fixing. Descriptions can be longer than only one sentence. Descriptions can be longer than only one sentence. Descriptions can be longer than only one sentence.',
      employees: ['/img/user-1.png', '/img/user-2.png', '/img/user-3.png'],
      tags: ['Thirdfloor', 'bathroom', 'tilework'],
      gallery: [
        '/img/gallery-1.jpg',
        '/img/gallery-2.jpg',
        '/img/gallery-3.jpg',
        '/img/gallery-4.jpg',
        '/img/gallery-5.jpg',
      ],
      subtasks: [
        {
          name: 'Install water isolation',
          id: '8bfe3c83-9929-4d53-9603-ab123a25ce1b',
          completed: true,
        },
        {
          name: 'Prepare for tiling',
          id: '560f8709-2610-4296-ba39-3110aaad0bd0',
          completed: false,
        },
      ],
    },

    1: {
      name: 'Fix bedroom floor',
      id: 'df9543ec-e30e-46d7-b443-961785353b96',
      progress: 'Paused',
      lastUpdate: Date.now() - 900000,
      description:
        'Bedroom floor needs some fixing. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      employees: ['/img/user-1.png', '/img/user-2.png'],
      tags: ['Firstfloor', 'bathroom', 'tilework', 'insulation', 'parquet'],
      gallery: [
        '/img/gallery-2.jpg',
        '/img/gallery-4.jpg',
        '/img/gallery-5.jpg',
      ],
      subtasks: [
        {
          name: 'Fix insulation',
          id: '7b514caa-b0b1-4dba-816d-02f45cfaaace',
          completed: false,
        },
        {
          name: 'Lay parquet',
          id: 'ec12505d-2a4e-49c4-a76a-45a4176aa6f9',
          completed: false,
        },
        {
          name: 'Put a tile',
          id: 'e016ca58-ac49-4f61-8db3-1832eb6bd3ff',
          completed: true,
        },
      ],
    },
  },
}

export default initialState

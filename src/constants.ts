export const BASE_URL = 'https://api.potterdb.com/v1'

export const CHARACTERS_FILTERS = [
    {
      displayName: 'Gender',
      propertyName: 'gender',
      options: [
        {
          displayName:'Male',
          filter: 'eq',
          value: 'Male'
        },
        {
          displayName:'Female',
          filter: 'cont',
          value: 'Female'
        },
        {
          displayName:'Other',
          filter: 'null',
          value: '1'
        }
      ]
    },
    {
      displayName: 'House',
      propertyName: 'house',
      options: [
        {
          displayName:'Gryffindor',
          filter: 'eq',
          value: 'Gryffindor'
        },
        {
          displayName:'Slytherin',
          filter: 'eq',
          value: 'Slytherin'
        },
        {
          displayName:'Hufflepuff',
          filter: 'eq',
          value: 'Hufflepuff'
        },
        {
          displayName:'Ravenclaw',
          filter: 'eq',
          value: 'Ravenclaw'
        },
        {
          displayName:'None',
          filter: 'null',
          value: '1'
        }
      ]
    }
  ]

import {
  fullName,
  guardians,
  sortByFirstName,
  studentName,
} from '../peopleHelpers'

describe('#studentName', () => {
  test('should remove student from name', () => {
    expect(studentName('Alan Nilsson (elev)')).toEqual('Alan Nilsson')
  })

  test('should remove student without spacing from name', () => {
    expect(studentName('Alan Nilsson(elev)')).toEqual('Alan Nilsson')
  })

  test('handles undefined name', () => {
    expect(studentName(undefined)).toBeUndefined()
  })
})

describe('#fullName', () => {
  test('should', () => {
    expect(
      fullName({
        firstname: 'Margaery',
        lastname: 'Eriksson',
      })
    ).toEqual('Margaery Eriksson')
  })
})

describe('#sortByFirstName', () => {
  test('sort arrays by first name', () => {
    expect(
      sortByFirstName([
        {
          firstname: 'Margaery',
          lastname: 'Eriksson',
        },
        {
          firstname: 'Loras',
          lastname: 'Eriksson',
        },
      ])
    ).toEqual([
      {
        firstname: 'Loras',
        lastname: 'Eriksson',
      },
      {
        firstname: 'Margaery',
        lastname: 'Eriksson',
      },
    ])
  })
})

describe('#guardians', () => {
  test('should join a list of guardians sorted by firstname', () => {
    expect(
      guardians([
        {
          firstname: 'Margaery',
          lastname: 'Eriksson',
        },
        {
          firstname: 'Loras',
          lastname: 'Eriksson',
        },
      ])
    ).toEqual('Loras Eriksson, Margaery Eriksson')
  })
})

import React from 'react'
import { Table, Label, Input, Button } from 'reactstrap'
import { ITEM, SERVING, DAYS, REFINE, BY, TYPE, SEARCH, UID, NAME, WEEK_DAYS, ACTION, EDIT } from '../../../utils/Constants'
import './Serving.style.scss'

const Serving = () => {
  const headers = [UID, `${ITEM} ${TYPE}`, `${ITEM} ${NAME}`, ...WEEK_DAYS, ACTION]
  const foodMenu = [
    {
      'userID': '01',
      'itemType': 'Main Course',
      'itemName': 'Aloo Paratha with curd ',
      'selectedDays': [
        'Sun',
        'Tue',
        'Fri'
      ]
    },
    {
      'userID': '02',
      'itemType': 'Main Course',
      'itemName': 'Paneer Dosa',
      'selectedDays': [
        'Mon',
        'Tue'
      ]
    },
    {
      'userID': '03',
      'itemType': 'Main Course',
      'itemName': 'Paneer Dosa',
      'selectedDays': [
        'Sat',
        'Mon'
      ]
    }
  ]

  const tableHeaders = () => (
    headers.map(name => <th key={name}> {name} </th>)
  )

  const menuDays = (selectedDays) => (
    WEEK_DAYS.map(day => showCheckBox(selectedDays.find(sDay => sDay === day)))
  )

  const showCheckBox = (isChecked ) => (
    <td><Input className="m-0 p-0" type="checkbox" defaultChecked={isChecked} onClick={handleDaySelection}/></td>
  )

  const handleDaySelection = (event) => {}


  const showTabledata = () => (
    foodMenu.map(data =>
      <tr>
        <td>{data.userID}</td>
        <td>{data.itemType}</td>
        <td>{data.itemName}</td>
        {menuDays(data.selectedDays)}
        <td><Button outline color="primary">{EDIT}</Button></td>
      </tr>
    )
  )

  return (
    <div className="serving-container container">
      <p>{`${ITEM} ${SERVING} ${DAYS}`}</p>
      <div className='search-container'>
        <div className="filter-container">
        <Input className="refine" type="select" name="refineByDay" id="refineByDay" onChange={() => { }}>
          <option value="UP">{`${REFINE} ${BY} ${DAYS}`}</option>
        </Input>
        <Input className="refine" type="select" name="refineByItem" id="refineByItem" onChange={() => { }}>
          <option value="UP">{`${REFINE} ${BY} ${ITEM}`}</option>
        </Input>
        </div>
        
        <div className="search">
          <input placeholder={`${SEARCH}...`} type="text"/>
        </div>
      </div>
      <Table className="border text-center" hover>
        <thead>
          <tr className='bg-light'>
            {tableHeaders()}
          </tr>
        </thead>
        <tbody>
          {showTabledata()}
        </tbody>
      </Table>
    </div>
  )
}

export default Serving
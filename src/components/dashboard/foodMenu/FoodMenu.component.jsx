import React from 'react'
import { Table, Input, Button } from 'reactstrap'
import { ITEM, SERVING, DAYS, REFINE, BY, 
  TYPE, PRODUCTS, UID, NAME, WEEK_DAYS, IMAGE, 
  EDIT, ON, THE, MENU, STATUS, TOTAL, ACTIVE, INACTIVE } from '../../../utils/Constants'
import './FoodMenu.style.scss'

const FoodMenu = () => {
  const headers = [IMAGE, UID, `${ITEM} ${TYPE}`, `${ITEM} ${NAME}`, `${SERVING} ${DAYS}`, STATUS]
  const foodMenu = [
    {
      'userID': '01',
      'itemType': 'Main Course',
      'itemName': 'Aloo Paratha with curd ',
      'isActive': true
    },
    {
      'userID': '02',
      'itemType': 'Main Course',
      'itemName': 'Paneer Dosa',
      'isActive': false
    },
    {
      'userID': '03',
      'itemType': 'Main Course',
      'itemName': 'Paneer Dosa',
      'isActive': true
    }
  ]

  const tableHeaders = () => (
    headers.map(name => <th key={name}> {name} </th>)
  )

  const menuDays = (selectedDays) => (
    WEEK_DAYS.map(day => selectedDays.find(sDay => sDay === day) ? <td><Input className="m-0 p-0" type="checkbox" defaultChecked /></td> : <td><Input className="m-0 p-0" type="checkbox" /></td>)
  )


  const showTabledata = () => (
    foodMenu.map(data =>
      <tr>
        <td>{data.userID}</td>
        <td>{data.itemType}</td>
        <td>{data.itemName}</td>
        <td>{data.itemType}</td>
        <td>{data.itemName}</td>
        <td><p className={data.isActive ? "status-active" : "status-inactive"}>{data.isActive ? ACTIVE : INACTIVE}</p></td>
      </tr>
    )
  )

  return (
    <div className="serving-container container">
      <div className="titleContainer">
        <p>{`${ON} ${THE} ${MENU}`}</p>
        <div className="total">
          <p>{`${TOTAL} ${PRODUCTS} - `}</p>
          <p1>100</p1>
        </div>
        
      </div>
      
      <div className='search-container'>
        <div className="filter-container">
        <Input className="refine" type="select" name="refineByDay" id="refineByDay" onChange={() => { }}>
          <option value="UP">{`${REFINE} ${BY} ${DAYS}`}</option>
        </Input>
        <Input className="refine" type="select" name="refineByItem" id="refineByItem" onChange={() => { }}>
          <option value="UP">{`${REFINE} ${BY} ${ITEM}`}</option>
        </Input>
        </div>
      </div>
      <Table className="border" hover>
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

export default FoodMenu
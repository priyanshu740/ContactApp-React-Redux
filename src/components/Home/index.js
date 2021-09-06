import React from 'react'
import { useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

const index = () => {
  const contacts = useSelector(state=>state)
  return (
    <div className='home'>
      <Link to="/add" className="addcontact-btn ">
          Add Contact
        </Link>
      <table className='table'>
        <thead className='table-header'>
          <tr>
            <th>sr no</th>
            <th>name</th>
            <th>email</th>
            <th>phone</th>
            <th></th>
          </tr>
        </thead>
            <tbody>
              {
                contacts.map((contact, id) => (
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                    <td>
                      <Link
                        to={`/edit/${contact.id}`}
                        className="btn btn-sm btn-primary mr-1"
                      >
                        Edit
                      </Link>
                      <button
                        type="button"
                        className="btn btn-sm btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>

      </table>
    </div>
  )
}

export default index



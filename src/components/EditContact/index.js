import React, { useState ,useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router';


const index = () => {

  const [name,setName] = useState('')
  const [email,setemail] = useState('')
  const [phone,setphone] = useState('')

  useEffect(() => {
    if(currentContact){
      setName(currentContact.name)
      setemail(currentContact.email)
      setphone(currentContact.phone)
    }
  }, [currentContact])

  const {id} = useParams()

  const contacts = useSelector(state => state)
  const currentContact = contacts.find((contact) => contact.id === parseInt(id))

  const dispatch = useDispatch()
  const history = useHistory()

  const handleSubmir = (e) => {
    e.preventDefault()

    const chechEmail = contacts.find(contact => contact.email === email && email)
    const chechphone = contacts.find(contact => contact.phone === parseInt(phone))

   
    if(!email || !name || !phone){
      return toast.warning("please fill the form")
    }

    if(chechEmail){
     return toast.error("this email already exists")
    }
    if(chechphone){
     return toast.error("this phone already exists")
    }
    
    const data={
      id:contacts[contacts.length].id+1,
      name,
      email,
      phone
    }
    console.log(data);
    dispatch({type:"ADD_CONTACT",payload:data})
    toast.success('success')
    history.push("/")
  
  } 

  return (
    <div className='edit-data'>
    {currentContact?   
      <>
      <h1 >EDIT STUDENT {id}</h1>
      <div className='add-data'>
        <form className='add-form' onSubmit={handleSubmir}>

          <input value={name}   onChange={(e) => setName(e.target.value)} placeholder='enter ur name' type='text' className='input-data' />
          <input value={email}  onChange={(e) => setemail(e.target.value)} placeholder='email' type='email' className='input-data' />
          <input value={phone}  onChange={(e) => setphone(e.target.value)} placeholder='phone number' type='number' className='input-data' />

          <div className='edit-btns'>
            <button  className='update-btn'>update</button>
            <button  className='cancel-btn'>cancel</button>
          </div>
        </form>
      </div>
      </>
      :
      (<h1>no found</h1>)}
    </div>
    
  )
}

export default index

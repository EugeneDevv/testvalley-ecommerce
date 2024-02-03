import React from 'react'
import { Menubar } from 'primereact/menubar'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

const Topbar = () => {
  const start = (
    <div className='flex items-center'>
      <img alt='logo' src='logo-new.svg' className='mr-h-6' />
    </div>
  )

  const end = (
    <div className='flex items-center'>
      <span className='p-input-icon-left'>
        <i className='pi pi-search' />
        <InputText
          placeholder="Search if you're worried about it!"
          className='p-inputtext-sm'
        />
      </span>
      <Button
        icon='pi pi-percentage'
        className='p-button-rounded p-button-text mr-2'
        label='Login / Membership'
      />
    </div>
  )

  return (
    <div className='bg-white shadow p-2 '>
      <Menubar start={start} end={end} />
      <div className='flex justify-center p-2'></div>
    </div>
  )
}

export default Topbar

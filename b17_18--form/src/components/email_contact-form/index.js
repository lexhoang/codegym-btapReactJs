import React from 'react'
import EmailForm from './EmailForm'
import ContactForm from './ContactForm'

export default function EmailContactForm() {
  return (
    <div className="d-flex justify-content-around">
      <EmailForm />
      <ContactForm />
    </div>
  )
}

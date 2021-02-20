/* eslint-disable no-undef */
import React from 'react'
import Recaptcha from 'react-google-recaptcha'

const RECAPTCHA_KEY = '6LePqF8aAAAAAJuZH3UUGdBB8UmIILvRALvF8ytv'

const Form = () => {
  const [state, setState] = React.useState({})

  const recaptchaRef = React.createRef() // new Ref for reCaptcha

  // With this the button is disabled by default, but on Recaptcha change, the form can be submitted
  const [buttonDisabled, setButtonDisabled] = React.useState(true)

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    const recaptchaValue = recaptchaRef.current.getValue()

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        'g-recaptcha-response': recaptchaValue,
        ...state,
      }),
    })
      .then(() => form.getAttribute('action'))
      .catch(error => alert(error))
  }

  return (
    <form
      name='contact'
      method='POST'
      data-netlify='true'
      netlify-honeypot='bot-field'
      data-netlify-recaptcha='true'
      // action='POST'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        name='name'
        id='name-input'
        placeholder='Name'
        onChange={handleChange}
        required
      />
      <input
        type='text'
        name='email'
        id='email-input'
        placeholder='Email'
        onChange={handleChange}
        required
      />
      <input
        type='text'
        name='subject'
        id='subject-input'
        placeholder='Subject'
        onChange={handleChange}
        required
      />
      <textarea
        name='message'
        id='message-input'
        cols='30'
        rows='10'
        placeholder='Message'
        onChange={handleChange}
        required
      ></textarea>
      <input
        className='form__file'
        type='file'
        name='myfile'
        id='myfile-input'
        placeholder='Upload File'
        rows='7'
        style={{ border: 'none' }}
        // onChange={handleChange}
      />
      <div data-netlify-recaptcha='true'></div>
      {/* Recaptcha */}
      <Recaptcha
        ref={recaptchaRef}
        sitekey={RECAPTCHA_KEY}
        size='normal'
        id='recaptcha-google'
        onChange={() => setButtonDisabled(false)}
      />
      <div className='btn-form'>
        <button
          type='submit'
          className='btn btn-primary'
          disabled={buttonDisabled}
        >
          Send
        </button>
      </div>
    </form>
  )
}

export default Form

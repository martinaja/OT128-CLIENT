import { useState } from 'react'

export const Footer = () => {
  const isUserSubscribe = localStorage.getItem('isUserSubscribe')

  return <footer>{!isUserSubscribe && <SubscribeForm />}</footer>
}

const SubscribeForm = () => {
  const [inputEmail, setInputEmail] = useState('')
  const [inputError, setInputError] = useState('')

  const handleSubmit = (e) => {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(inputEmail)) {
      setInputError('* direccion de email incorrecta')
      return null // Later add alert message for user input error
    }

    e.preventDefault()

    localStorage.setItem('isUserSubscribe', true)

    return console.log('succes') // later add succes pop-up
  }

  return (
    <footer>
      <div className="subscribe__container">
        <form onSubmit={handleSubmit}>
          <label>
            e-mail
            <input
              type="email"
              name="subscribeEmail"
              value={inputEmail}
              onChange={(e) => setInputEmail(e.target.value)}
            />
          </label>
          <small>{inputError}</small>
          <input type="submit" value="Subscribe" />
        </form>
      </div>
    </footer>
  )
}

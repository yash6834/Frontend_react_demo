import { useState } from 'react'
import './App.css'

const subscriptionPlans = [
  {
    id: 'basic-reader',
    name: 'Basic Reader',
    price: '$9/month',
    duration: '1 month access',
    booksAllowed: '2 books at a time',
    support: 'Email reminders',
  },
  {
    id: 'family-plus',
    name: 'Family Plus',
    price: '$24/month',
    duration: '3 month access',
    booksAllowed: '6 books at a time',
    support: 'Family account support',
  },
  {
    id: 'scholar-premium',
    name: 'Scholar Premium',
    price: '$49/month',
    duration: '12 month access',
    booksAllowed: '12 books at a time',
    support: 'Priority reservations',
  },
]

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    membership: '',
    password: '',
  })
  const [submittedData, setSubmittedData] = useState([])
  const [errors, setErrors] = useState({})

  function validateForm(data) {
    const nextErrors = {}

    if (!data.firstName.trim()) {
      nextErrors.firstName = 'Required'
    }
    if (!data.lastName.trim()) {
      nextErrors.lastName = 'Required'
    }
    if (!data.email.trim()) {
      nextErrors.email = 'Required'
    }
    if (!data.phone.trim()) {
      nextErrors.phone = 'Required'
    }
    if (!data.membership) {
      nextErrors.membership = 'Required'
    }
    if (!data.password.trim()) {
      nextErrors.password = 'Required'
    } else if (data.password.length < 6) {
      nextErrors.password = 'Password must be at least 6 characters'
    }

    return nextErrors
  }

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
    setErrors((current) => ({
      ...current,
      [name]: '',
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validateForm(formData)

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      return
    }

    setSubmittedData((current) => [...current, formData])
    setErrors({})
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      membership: '',
      password: '',
    })
  }

  return (
    <main className="app">
      <section className="subscription-layout">
        <section className="form-card" aria-labelledby="registration-title">
          <form className="registration-form" onSubmit={handleSubmit} noValidate>
            <div className="form-heading">
              <h2 id="registration-title">Library Registration Form</h2>
              <p>Fill in the form and see the submitted details below.</p>
            </div>

            <div className="form-grid">
              <label>
                <span>First Name</span>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={errors.firstName ? 'input-error' : ''}
                />
                {errors.firstName ? <small className="error-text">{errors.firstName}</small> : null}
              </label>

              <label>
                <span>Last Name</span>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={errors.lastName ? 'input-error' : ''}
                />
                {errors.lastName ? <small className="error-text">{errors.lastName}</small> : null}
              </label>

              <label>
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'input-error' : ''}
                />
                {errors.email ? <small className="error-text">{errors.email}</small> : null}
              </label>

              <label>
                <span>Phone</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? 'input-error' : ''}
                />
                {errors.phone ? <small className="error-text">{errors.phone}</small> : null}
              </label>

              <label>
                <span>Membership Type</span>
                <select
                  name="membership"
                  value={formData.membership}
                  onChange={handleChange}
                  className={errors.membership ? 'input-error' : ''}
                >
                  <option value="" disabled>
                    Select a plan
                  </option>
                  {subscriptionPlans.map((plan) => (
                    <option key={plan.id} value={plan.name}>
                      {plan.name}
                    </option>
                  ))}
                </select>
                {errors.membership ? (
                  <small className="error-text">{errors.membership}</small>
                ) : null}
              </label>

              <label>
                <span>Password</span>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                  className={errors.password ? 'input-error' : ''}
                />
                {errors.password ? <small className="error-text">{errors.password}</small> : null}
              </label>
            </div>

            <button type="submit">Register</button>
          </form>

          {submittedData.length > 0 ? (
            <section className="details-section" aria-labelledby="submitted-details">
              <h3 id="submitted-details">Form Details</h3>
              <div className="table-wrapper">
                <table className="details-table">
                  <thead>
                    <tr>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Membership Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {submittedData.map((entry, index) => (
                      <tr key={`${entry.email}-${index}`}>
                        <td>{entry.firstName}</td>
                        <td>{entry.lastName}</td>
                        <td>{entry.email}</td>
                        <td>{entry.phone}</td>
                        <td>{entry.membership}</td>                        
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ) : null}
        </section>
      </section>
    </main>
  )
}

export default App

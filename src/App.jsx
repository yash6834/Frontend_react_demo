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

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    setSubmittedData((current) => [...current, formData])
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      membership: '',
    })
  }

  return (
    <main className="app">
      <section className="subscription-layout">
        <section className="form-card" aria-labelledby="registration-title">
          <form className="registration-form" onSubmit={handleSubmit}>
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
                />
              </label>

              <label>
                <span>Last Name</span>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter last name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </label>

              <label>
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>

              <label>
                <span>Phone</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </label>

              <label>
                <span>Membership Type</span>
                <select
                  name="membership"
                  value={formData.membership}
                  onChange={handleChange}
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
              </label>

              <label>
                <span>Password</span>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                />
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

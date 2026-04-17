import './App.css'

function App() {
  return (
    <main className="page-shell">
      <section className="info-panel">
        <p className="eyebrow">Create account</p>
        <h1>Registration Form</h1>
        <p className="lead">
          Join with your basic details and set up your profile in a minute.
        </p>

        <div className="benefits">
          <article>
            <h2>Quick setup</h2>
            <p>Fill in your personal info, contact details, and password.</p>
          </article>
          <article>
            <h2>Secure access</h2>
            <p>Choose a strong password to keep your new account protected.</p>
          </article>
        </div>
      </section>

      <section className="form-panel" aria-labelledby="registration-title">
        <form className="registration-form">
          <div className="form-heading">
            <h2 id="registration-title">Register Now</h2>
            <p>Please complete the form below.</p>
          </div>

          <div className="form-grid">
            <label>
              <span>First Name</span>
              <input type="text" name="firstName" placeholder="Enter first name" />
            </label>

            <label>
              <span>Last Name</span>
              <input type="text" name="lastName" placeholder="Enter last name" />
            </label>

            <label>
              <span>Email Address</span>
              <input type="email" name="email" placeholder="Enter email address" />
            </label>

            <label>
              <span>Phone Number</span>
              <input type="tel" name="phone" placeholder="Enter phone number" />
            </label>

            <label>
              <span>Password</span>
              <input type="password" name="password" placeholder="Create password" />
            </label>

            <label>
              <span>Confirm Password</span>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
              />
            </label>

            <label className="full-width">
              <span>Address</span>
              <input type="text" name="address" placeholder="Enter your address" />
            </label>

            <label>
              <span>Gender</span>
              <select name="gender" defaultValue="">
                <option value="" disabled>
                  Select gender
                </option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
            </label>

            <label>
              <span>Date of Birth</span>
              <input type="date" name="dob" />
            </label>
          </div>

          <label className="checkbox-row">
            <input type="checkbox" name="terms" />
            <span>I agree to the terms and conditions.</span>
          </label>

          <button type="submit">Create Account</button>
        </form>
      </section>
    </main>
  )
}

export default App

import './App.css'

function App() {
  return (
    <main className="app">
      <section className="form-card" aria-labelledby="registration-title">
        <form className="registration-form">
          <div className="form-heading">
            <h1 id="registration-title ">Registration Form</h1>
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
              <span>Email</span>
              <input type="email" name="email" placeholder="Enter email" />
            </label>

            <label>
              <span>Password</span>
              <input type="password" name="password" placeholder="Enter password" />
            </label>
          </div>

          <button type="submit">Register</button>
        </form>
      </section>
    </main>
  )
}

export default App

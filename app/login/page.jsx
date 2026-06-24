export const metadata = {
  title: 'Login'
}

export default async function LoginPage({ searchParams }) {
  const params = await searchParams
  const nextPath = params?.next || '/'
  const hasError = params?.error === '1'

  return (
    <main className="login-shell">
      <section className="login-panel" aria-labelledby="login-title">
        <p className="login-kicker">Agent Docs</p>
        <h1 id="login-title">Enter password</h1>
        <form className="login-form" action="/api/login" method="post">
          <input type="hidden" name="next" value={nextPath} />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            autoFocus
            required
          />
          {hasError ? (
            <p className="login-error" role="alert">
              Incorrect password.
            </p>
          ) : null}
          <button type="submit">Continue</button>
        </form>
      </section>
    </main>
  )
}

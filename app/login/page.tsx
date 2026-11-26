export const metadata = { title: "Logga in · AI Product Builder" };

export default async function Login({ searchParams }: { searchParams: Promise<{ fel?: string }> }) {
  const { fel } = await searchParams;
  return (
    <div className="login-page">
    <section className="wrap login">
      <form method="post" action="/api/login" className="card login-card">
        <p className="eyebrow">AI Product Builder · Berghs</p>
        <h1 className="display-sm">Välkommen, builder</h1>
        <p className="muted">Sidan är för kursdeltagare. Skriv lösenordet du fått på kursen.</p>
        <label className="field">
          <span>Lösenord</span>
          <input type="password" name="password" autoComplete="current-password" required autoFocus />
        </label>
        {fel && <p className="error">Fel lösenord. Försök igen.</p>}
        <button type="submit" className="btn">
          Logga in
        </button>
      </form>
    </section>
    </div>
  );
}

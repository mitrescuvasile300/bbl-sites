import { Link } from 'react-router-dom'

export default function Privacy() {
  return (
    <div style={{ backgroundColor: '#FAF9F5', paddingTop: '140px', paddingBottom: '80px' }}>
      <div className="content-max-width max-w-3xl mx-auto" style={{ padding: '0 clamp(24px, 5vw, 80px)' }}>
        <span className="text-micro mb-4 block" style={{ color: '#D35400' }}>Legal</span>
        <h1 className="text-display-1 mb-8" style={{ color: '#002D21' }}>Politica de Confidențialitate</h1>

        <div className="space-y-8 text-body" style={{ color: '#43474C' }}>
          <section>
            <h2 className="font-headline font-bold text-xl mb-3" style={{ color: '#002D21' }}>1. Cine suntem</h2>
            <p>BBL Sites este o micro-întreprindere românească specializată în web design și dezvoltare website-uri pentru IMM-uri. Sediul social este în București, România.</p>
          </section>

          <section>
            <h2 className="font-headline font-bold text-xl mb-3" style={{ color: '#002D21' }}>2. Ce date colectăm</h2>
            <p>Prin formularul de contact colectăm: nume, email, opțional numele companiei, tipul proiectului și mesajul tău. Aceste date sunt necesare pentru a putea răspunde solicitării tale.</p>
          </section>

          <section>
            <h2 className="font-headline font-bold text-xl mb-3" style={{ color: '#002D21' }}>3. Cum folosim datele</h2>
            <p>Datele sunt utilizate exclusiv pentru a te contacta în legătură cu solicitarea ta. Nu vindem, nu închiriem și nu transferăm datele către terți în alte scopuri.</p>
          </section>

          <section>
            <h2 className="font-headline font-bold text-xl mb-3" style={{ color: '#002D21' }}>4. Temeiul legal</h2>
            <p>Prelucrarea se face pe baza consimțământului tău explicit (art. 6 alin. 1 lit. a din GDPR), pe care îl exprimi prin bifarea checkbox-ului din formular.</p>
          </section>

          <section>
            <h2 className="font-headline font-bold text-xl mb-3" style={{ color: '#002D21' }}>5. Durata stocării</h2>
            <p>Păstrăm datele tale pentru maximum 12 luni de la ultima interacțiune, după care sunt șterse în mod securizat.</p>
          </section>

          <section>
            <h2 className="font-headline font-bold text-xl mb-3" style={{ color: '#002D21' }}>6. Drepturile tale</h2>
            <p>Ai dreptul de acces, rectificare, ștergere, restricționare a prelucrării, portabilitate a datelor și de a-ți retrage consimțământul în orice moment. Contact: <a href="mailto:office@bblsites.ro" style={{ color: '#D35400' }}>office@bblsites.ro</a>.</p>
          </section>

          <section>
            <h2 className="font-headline font-bold text-xl mb-3" style={{ color: '#002D21' }}>7. Cookie-uri</h2>
            <p>Site-ul utilizează doar cookie-uri tehnice necesare funcționării (ex: preferința de consimțământ GDPR). Nu utilizăm cookie-uri de tracking sau de profilare.</p>
          </section>
        </div>

        <div className="mt-12 pt-8" style={{ borderTop: '1px solid #E3E2DF' }}>
          <Link to="/" className="btn-primary" style={{ padding: '12px 24px' }}>Înapoi la prima pagină</Link>
        </div>
      </div>
    </div>
  )
}

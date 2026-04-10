export default function OSCSWebsite() {
  const sectionTitle = {
    color: '#ddb861',
    fontSize: '16px',
    letterSpacing: '3px',
    textTransform: 'uppercase',
    marginBottom: '14px',
    fontWeight: 700,
  };

  const card = {
    background: 'linear-gradient(135deg, rgba(32,42,59,0.96) 0%, rgba(24,34,49,0.96) 45%, rgba(15,23,36,0.98) 100%)',
    borderRadius: '28px',
    border: '1px solid rgba(255,255,255,0.06)',
    boxShadow: '0 24px 50px rgba(0,0,0,0.32)',
    position: 'relative',
    overflow: 'hidden',
  };

  const smallCard = {
    background: 'rgba(9,16,30,0.82)',
    borderRadius: '22px',
    border: '1px solid rgba(255,255,255,0.04)',
    boxShadow: '0 16px 34px rgba(0,0,0,0.25)',
  };

  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    borderRadius: '14px',
    border: '1px solid rgba(255,255,255,0.10)',
    background: 'rgba(255,255,255,0.04)',
    color: '#ffffff',
    fontSize: '16px',
    outline: 'none',
    boxSizing: 'border-box',
  };

  const darkPill = {
    position: 'absolute',
    borderRadius: '999px',
    background: 'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(0,0,0,0.12))',
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.03), 0 10px 30px rgba(0,0,0,0.22)',
    transform: 'rotate(-40deg)',
  };

  const goldPill = {
    position: 'absolute',
    borderRadius: '999px',
    background: 'linear-gradient(135deg, #c79d45 0%, #f0d287 100%)',
    boxShadow: '0 12px 30px rgba(0,0,0,0.28)',
    transform: 'rotate(-40deg)',
  };

  const serviceItems = [
    'Inventory Optimization Audit',
    'Replenishment Strategy',
    'Warehouse Efficiency',
    'KPI & Reporting',
  ];

  const whyItems = [
    '10+ years supply chain and inventory management experience',
    'Led multi-site inventory operations and process improvements',
    'Hands-on execution, not just consulting theory',
    'Focused on measurable improvement in accuracy, cost, and efficiency',
  ];

  const gainItems = [
    'Improved Inventory Accuracy',
    'Better Cash Flow',
    'Stronger Operational Control',
  ];

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'radial-gradient(circle at top, #2b3645 0%, #0c1421 42%, #08111d 100%)',
        color: '#ffffff',
        fontFamily: 'Arial, Helvetica, sans-serif',
        padding: '26px',
      }}
    >
      <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
        <header
          style={{
            ...card,
            padding: '30px 34px',
            marginBottom: '26px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <div style={{ color: '#ddb861', fontSize: '56px', fontWeight: 700, letterSpacing: '2px', lineHeight: 1 }}>OSCS</div>
            <div style={{ color: '#dde3ec', fontSize: '16px', letterSpacing: '5px', textTransform: 'uppercase', marginTop: '10px' }}>
              Oni Supply Chain Solutions
            </div>
          </div>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href="#consultation-form"
              style={{
                textDecoration: 'none',
                background: 'linear-gradient(135deg, #c79d45 0%, #f0d287 100%)',
                color: '#111826',
                padding: '15px 24px',
                borderRadius: '999px',
                fontWeight: 700,
              }}
            >
              Book Consultation
            </a>
            <a
              href="#services"
              style={{
                textDecoration: 'none',
                color: '#f4f7fb',
                border: '1px solid rgba(240,210,135,0.65)',
                padding: '15px 24px',
                borderRadius: '999px',
                fontWeight: 700,
              }}
            >
              View Services
            </a>
          </div>
        </header>

        <section
          style={{
            ...card,
            padding: '42px',
            marginBottom: '26px',
          }}
        >
          <div style={{ ...darkPill, width: '210px', height: '600px', top: '-180px', left: '60px' }} />
          <div style={{ ...darkPill, width: '150px', height: '420px', top: '-40px', left: '260px' }} />
          <div style={{ ...darkPill, width: '140px', height: '300px', top: '40px', right: '160px' }} />
          <div style={{ ...goldPill, width: '170px', height: '58px', top: '170px', left: '-38px', transform: 'none' }} />
          <div style={{ ...goldPill, width: '180px', height: '58px', top: '170px', right: '-42px', transform: 'none' }} />

          <div style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '28px', alignItems: 'center' }}>
            <div>
              <div style={sectionTitle}>Inventory Optimization & Supply Chain Efficiency</div>
              <h1 style={{ fontSize: '58px', lineHeight: 1.08, margin: '0 0 18px', maxWidth: '820px' }}>
                Recover Cash. Eliminate Stockouts. Take Control of Your Inventory.
              </h1>
              <p style={{ color: '#e0e5ed', fontSize: '21px', lineHeight: 1.7, maxWidth: '760px', margin: 0 }}>
                We help businesses strengthen inventory control, improve replenishment decisions,
                and eliminate operational inefficiencies through real-world supply chain execution.
              </p>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '28px' }}>
                <a
                  href="#consultation-form"
                  style={{
                    textDecoration: 'none',
                    background: 'linear-gradient(135deg, #c79d45 0%, #f0d287 100%)',
                    color: '#111826',
                    padding: '15px 24px',
                    borderRadius: '999px',
                    fontWeight: 700,
                  }}
                >
                  Start a Conversation
                </a>
                <a
                  href="tel:19016972335"
                  style={{
                    textDecoration: 'none',
                    color: '#f4f7fb',
                    border: '1px solid rgba(240,210,135,0.65)',
                    padding: '15px 24px',
                    borderRadius: '999px',
                    fontWeight: 700,
                  }}
                >
                  Call OSCS
                </a>
              </div>
            </div>

            <div style={{ ...smallCard, padding: '28px' }}>
              <div style={{ color: '#ddb861', fontSize: '18px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '16px', fontWeight: 700 }}>
                Quick Contact
              </div>
              <div style={{ fontSize: '42px', color: '#ddb861', fontWeight: 700, lineHeight: 1.05 }}>Ambrose Gbagi</div>
              <div style={{ color: '#ddb861', fontSize: '21px', marginTop: '10px' }}>Founder &amp; Supply Chain Consultant</div>
              <div style={{ color: '#edf1f7', lineHeight: 1.9, marginTop: '24px', fontSize: '18px' }}>
                <div>(901) 697-2335</div>
                <div>ambrose.gbagi@theoscs.com</div>
                <div>www.theoscs.com</div>
              </div>
              <div style={{ color: '#cfd5df', fontStyle: 'italic', marginTop: '18px' }}>Typically responding within 24 hours</div>
            </div>
          </div>
        </section>

        <section id="services" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '26px', marginBottom: '26px' }}>
          <div style={{ ...card, padding: '30px' }}>
            <div style={{ ...darkPill, width: '170px', height: '420px', top: '-130px', right: '100px' }} />
            <div style={{ ...darkPill, width: '120px', height: '250px', bottom: '-40px', right: '30px' }} />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={sectionTitle}>Core Services</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {serviceItems.map((item) => (
                  <div key={item} style={{ ...smallCard, padding: '24px', fontSize: '24px', lineHeight: 1.35, fontWeight: 600 }}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ ...card, padding: '30px' }}>
            <div style={{ ...goldPill, width: '150px', height: '86px', bottom: '20px', right: '-34px' }} />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={sectionTitle}>Why OSCS</div>
              <div style={{ display: 'grid', gap: '14px' }}>
                {whyItems.map((item) => (
                  <div key={item} style={{ ...smallCard, padding: '22px', fontSize: '19px', lineHeight: 1.6 }}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: '26px', marginBottom: '26px' }}>
          <div style={{ ...card, padding: '30px' }}>
            <div style={sectionTitle}>What You Gain</div>
            <div style={{ display: 'grid', gap: '14px' }}>
              {gainItems.map((item) => (
                <div key={item} style={{ ...smallCard, padding: '22px', fontSize: '22px', lineHeight: 1.5, fontWeight: 600 }}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div style={{ ...card, padding: '30px' }} id="consultation-form">
            <div style={{ ...darkPill, width: '170px', height: '460px', top: '-140px', left: '50px' }} />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={sectionTitle}>Request Consultation</div>
              <h2 style={{ fontSize: '42px', margin: '0 0 16px' }}>Start the conversation.</h2>
              <p style={{ color: '#e0e5ed', fontSize: '21px', lineHeight: 1.75, margin: '0 0 22px' }}>
                Tell OSCS what inventory or supply chain challenge you need help solving.
              </p>

              <form
                action="https://formspree.io/f/xqkrabcd"
                method="POST"
                style={{ display: 'grid', gap: '14px' }}
              >
                <input type="text" name="name" placeholder="Your Name" required style={inputStyle} />
                <input type="email" name="email" placeholder="Your Email" required style={inputStyle} />
                <input type="text" name="company" placeholder="Company" style={inputStyle} />
                <textarea
                  name="message"
                  placeholder="Tell us about your inventory or supply chain challenge"
                  required
                  rows={6}
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '160px' }}
                />
                <button
                  type="submit"
                  style={{
                    background: 'linear-gradient(135deg, #c79d45 0%, #f0d287 100%)',
                    color: '#111826',
                    padding: '15px 24px',
                    borderRadius: '999px',
                    fontWeight: 700,
                    border: 'none',
                    cursor: 'pointer',
                    width: 'fit-content',
                  }}
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </section>

        <footer style={{ ...card, padding: '24px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <div style={{ color: '#cfd5df' }}>© {new Date().getFullYear()} Oni Supply Chain Solutions. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap', color: '#f4f7fb' }}>
            <a href="mailto:ambrose.gbagi@theoscs.com" style={{ color: '#f4f7fb', textDecoration: 'none' }}>ambrose.gbagi@theoscs.com</a>
            <a href="tel:19016972335" style={{ color: '#f4f7fb', textDecoration: 'none' }}>(901) 697-2335</a>
          </div>
        </footer>
      </div>
    </div>
  );
}

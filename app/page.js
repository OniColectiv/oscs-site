export default function OSCSWebsite() {
  const cardStyle = {
    background: 'linear-gradient(135deg, #1a2232 0%, #253042 42%, #101826 100%)',
    borderRadius: '28px',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 22px 50px rgba(0,0,0,0.45)',
    border: '1px solid rgba(255,255,255,0.05)',
  };

  const pillBase = {
    position: 'absolute',
    borderRadius: '999px',
    background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(0,0,0,0.12))',
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04), 0 10px 30px rgba(0,0,0,0.22)',
  };

  const goldPill = {
    position: 'absolute',
    borderRadius: '999px',
    background: 'linear-gradient(135deg, #c79d45 0%, #f0d287 100%)',
    boxShadow: '0 12px 30px rgba(0,0,0,0.28)',
  };

  const panel = {
    background: 'rgba(12,18,32,0.88)',
    border: '1px solid rgba(255,255,255,0.05)',
    borderRadius: '24px',
    padding: '26px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'radial-gradient(circle at top, #2b3645 0%, #0c1421 42%, #08111d 100%)',
        color: '#ffffff',
        fontFamily: 'Arial, Helvetica, sans-serif',
        padding: '28px',
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px', marginBottom: '28px', flexWrap: 'wrap' }}>
          <div>
            <div style={{ color: '#d8b15b', fontSize: '52px', fontWeight: 700, letterSpacing: '2px' }}>OSCS</div>
            <div style={{ color: '#d4d9e2', fontSize: '16px', letterSpacing: '4px', textTransform: 'uppercase', marginTop: '6px' }}>
              Oni Supply Chain Solutions
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href="mailto:ambrose.gbagi@theoscs.com"
              style={{
                textDecoration: 'none',
                background: 'linear-gradient(135deg, #c79d45 0%, #f0d287 100%)',
                color: '#111826',
                padding: '14px 22px',
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
                color: '#e8edf6',
                padding: '14px 22px',
                borderRadius: '999px',
                border: '1px solid rgba(240,210,135,0.65)',
                fontWeight: 700,
              }}
            >
              View Services
            </a>
          </div>
        </div>

        <section
          style={{
            display: 'grid',
            gridTemplateColumns: '1.05fr 1fr',
            gap: '36px',
            alignItems: 'stretch',
          }}
        >
          <div style={{ ...cardStyle, minHeight: '620px' }}>
            <div style={{ ...pillBase, width: '210px', height: '720px', top: '-160px', left: '26px', transform: 'rotate(-40deg)' }} />
            <div style={{ ...pillBase, width: '150px', height: '520px', top: '-60px', left: '240px', transform: 'rotate(-40deg)' }} />
            <div style={{ ...pillBase, width: '120px', height: '340px', top: '92px', left: '356px', transform: 'rotate(-40deg)' }} />
            <div style={{ ...pillBase, width: '120px', height: '230px', top: '40px', left: '470px', transform: 'rotate(-40deg)' }} />
            <div style={{ ...goldPill, width: '180px', height: '56px', top: '230px', left: '-32px' }} />
            <div style={{ ...goldPill, width: '180px', height: '56px', top: '230px', right: '-32px' }} />

            <div
              style={{
                position: 'relative',
                zIndex: 2,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '70px',
                textAlign: 'center',
              }}
            >
              <div style={{ color: '#ddb861', fontSize: '64px', fontWeight: 700, letterSpacing: '2px' }}>OSCS</div>
              <div style={{ color: '#ffffff', fontSize: '22px', fontWeight: 700, marginTop: '16px' }}>
                Oni Supply Chain Solutions
              </div>
              <div style={{ color: '#c8cdd7', fontSize: '14px', letterSpacing: '4px', textTransform: 'uppercase', marginTop: '8px' }}>
                Inventory Optimization & Supply Chain Efficiency
              </div>
              <div style={{ width: '180px', height: '2px', background: 'linear-gradient(90deg, transparent 0%, #ddb861 50%, transparent 100%)', margin: '20px 0 24px' }} />
              <p style={{ maxWidth: '560px', fontSize: '20px', lineHeight: 1.6, margin: 0 }}>
                Recover Cash. Eliminate Stockouts. Take Control of Your Inventory.
              </p>
            </div>
          </div>

          <div style={{ ...cardStyle, minHeight: '620px' }}>
            <div style={{ ...pillBase, width: '160px', height: '470px', top: '-76px', right: '70px', transform: 'rotate(-40deg)' }} />
            <div style={{ ...pillBase, width: '120px', height: '330px', top: '96px', right: '220px', transform: 'rotate(-40deg)' }} />
            <div style={{ ...pillBase, width: '120px', height: '265px', top: '115px', right: '120px', transform: 'rotate(-40deg)' }} />
            <div style={{ ...goldPill, width: '150px', height: '88px', top: '36px', right: '-34px', transform: 'rotate(-40deg)' }} />
            <div style={{ ...goldPill, width: '210px', height: '110px', bottom: '54px', right: '-48px', transform: 'rotate(-40deg)' }} />

            <div
              style={{
                position: 'relative',
                zIndex: 2,
                height: '100%',
                padding: '70px 64px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ color: '#ddb861', fontSize: '62px', fontWeight: 700, lineHeight: 1.05 }}>Ambrose Gbagi</div>
                <div style={{ color: '#ddb861', fontSize: '22px', marginTop: '12px' }}>Founder &amp; Supply Chain Consultant</div>
                <div style={{ color: '#d8dde6', fontSize: '18px', marginTop: '26px', maxWidth: '560px', lineHeight: 1.7 }}>
                  We help businesses strengthen inventory control, improve replenishment decisions,
                  and eliminate operational inefficiencies through real-world supply chain execution.
                </div>
              </div>

              <div style={{ display: 'grid', gap: '18px' }}>
                <div style={panel} id="services">
                  <div style={{ color: '#ddb861', fontSize: '16px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '14px' }}>
                    Core Services
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 20px', color: '#edf1f7', lineHeight: 1.6 }}>
                    <div>Inventory Optimization Audit</div>
                    <div>Replenishment Strategy</div>
                    <div>Warehouse Efficiency</div>
                    <div>KPI &amp; Reporting</div>
                  </div>
                </div>

                <div style={{ ...panel, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px 24px' }}>
                  <div>
                    <div style={{ color: '#ddb861', fontSize: '16px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>
                      Why OSCS
                    </div>
                    <div style={{ color: '#edf1f7', lineHeight: 1.7 }}>
                      10+ years supply chain and inventory management experience with a focus on measurable improvement.
                    </div>
                  </div>
                  <div>
                    <div style={{ color: '#ddb861', fontSize: '16px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>
                      Contact
                    </div>
                    <div style={{ color: '#edf1f7', lineHeight: 1.8 }}>
                      <div>(901) 697-2335</div>
                      <div>ambrose.gbagi@theoscs.com</div>
                      <div>www.theoscs.com</div>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                  <a
                    href="mailto:ambrose.gbagi@theoscs.com"
                    style={{
                      textDecoration: 'none',
                      background: 'linear-gradient(135deg, #c79d45 0%, #f0d287 100%)',
                      color: '#111826',
                      padding: '14px 20px',
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
                      border: '1px solid rgba(240,210,135,0.65)',
                      color: '#f2f5fb',
                      padding: '14px 20px',
                      borderRadius: '999px',
                      fontWeight: 700,
                    }}
                  >
                    Call OSCS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default function Home() {
  const sectionStyle = { marginTop: "50px" };

  return (
    <div style={{
      background: "#0b1220",
      color: "white",
      minHeight: "100vh",
      padding: "40px",
      fontFamily: "Arial, sans-serif"
    }}>

      <h1 style={{ color: "#C9A34E", fontSize: "48px" }}>
        OSCS
      </h1>

      <h2>Oni Supply Chain Solutions</h2>

      {/* 🔥 HEADLINE FIX */}
      <h3 style={{ marginTop: "20px" }}>
        Recover Cash. Eliminate Stockouts. Take Control of Your Inventory.
      </h3>

      <p style={{ marginTop: "10px", maxWidth: "700px" }}>
        We help businesses recover cash trapped in inventory and prevent costly stockouts.
      </p>

      {/* 🔥 CTA FIX */}
      <div style={{ marginTop: "20px" }}>
        <a href="mailto:ambrose.gbagi@theoscs.com">
          <button style={{
            background: "#C9A34E",
            color: "#0b1220",
            padding: "10px 20px",
            border: "none",
            cursor: "pointer",
            marginRight: "10px"
          }}>
            Book Consultation
          </button>
        </a>

        <button style={{
          background: "transparent",
          border: "1px solid #C9A34E",
          color: "#C9A34E",
          padding: "10px 20px",
          cursor: "pointer"
        }}>
          View Services
        </button>
      </div>

      {/* SERVICES */}
      <div style={sectionStyle}>
        <h3 style={{ color: "#C9A34E" }}>Services</h3>
        <ul>
          <li>Inventory Optimization Audit</li>
          <li>Replenishment Strategy</li>
          <li>Warehouse Efficiency</li>
          <li>KPI & Reporting</li>
        </ul>
      </div>

      {/* 🔥 CREDIBILITY SECTION */}
      <div style={sectionStyle}>
        <h3 style={{ color: "#C9A34E" }}>Why OSCS</h3>
        <ul>
          <li>10+ years supply chain & inventory management experience</li>
          <li>Led multi-site inventory operations and process improvements</li>
          <li>Hands-on execution, not just consulting theory</li>
          <li>Focused on measurable results: accuracy, cost, and efficiency</li>
        </ul>
      </div>

      {/* RESULTS */}
      <div style={sectionStyle}>
        <h3 style={{ color: "#C9A34E" }}>What You Gain</h3>
        <ul>
          <li>Improved Inventory Accuracy</li>
          <li>Better Cash Flow</li>
          <li>Stronger Operational Control</li>
        </ul>
      </div>

      {/* CONTACT */}
      <div style={sectionStyle}>
        <h3 style={{ color: "#C9A34E" }}>Contact</h3>
        <p>(901) 697-2335</p>
        <p>ambrose.gbagi@theoscs.com</p>
        <p>www.theoscs.com</p>

        {/* 🔥 TRUST BOOST */}
        <p style={{ marginTop: "10px", fontStyle: "italic" }}>
          Typically responding within 24 hours
        </p>
      </div>

    </div>
  );
}

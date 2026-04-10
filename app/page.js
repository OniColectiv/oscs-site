export default function Home() {
  const sectionStyle = { marginBottom: "50px" };

  return (
    <div style={{
      background: "#0b1220",
      color: "white",
      minHeight: "100vh",
      padding: "40px",
      fontFamily: "Arial, sans-serif"
    }}>

      <h1 style={{ color: "#C9A34E", fontSize: "48px", marginBottom: "10px" }}>
        OSCS
      </h1>

      <h2 style={{ marginBottom: "20px" }}>
        Oni Supply Chain Solutions
      </h2>

      <p style={{ fontSize: "18px", maxWidth: "700px" }}>
        We help businesses recover cash trapped in inventory and prevent costly stockouts.
      </p>

      <div style={{ marginTop: "20px" }}>
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

      <div style={sectionStyle}>
        <h3 style={{ color: "#C9A34E" }}>Services</h3>
        <ul>
          <li>Inventory Optimization Audit</li>
          <li>Replenishment Strategy</li>
          <li>Warehouse Efficiency</li>
          <li>KPI & Reporting</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h3 style={{ color: "#C9A34E" }}>What You Gain</h3>
        <ul>
          <li>Improved Inventory Accuracy</li>
          <li>Better Cash Flow</li>
          <li>Stronger Operational Control</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h3 style={{ color: "#C9A34E" }}>Contact</h3>
        <p>(901) 697-2335</p>
        <p>ambrose.gbagi@theoscs.com</p>
        <p>www.theoscs.com</p>
      </div>

    </div>
  );
}

export default function ProductPreview() {
  return (
    <section id="product" className="product-preview">
      <div className="section-content">
        <div className="section-header">
          <h2>One dashboard. The signals that matter.</h2>
          <p className="section-description">
            Stop jumping between charts, social feeds, and news tabs. Neko Singa brings the most relevant market signals into one place.
          </p>
        </div>

        <div className="product-screenshot">
          <div className="browser-frame">
            <div className="browser-header">
              <div className="browser-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="browser-address">nekosinga.app</div>
            </div>
            <div className="screenshot-placeholder">
              <div className="dashboard-mockup">
                <div className="sidebar-mock"></div>
                <div className="content-mock">
                  <div className="header-mock"></div>
                  <div className="cards-mock">
                    <div className="card-mock"></div>
                    <div className="card-mock"></div>
                    <div className="card-mock"></div>
                  </div>
                  <div className="chart-mock"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

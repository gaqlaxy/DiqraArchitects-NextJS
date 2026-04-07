import Footer from "@/app/components/Footer";
import "@/app/styles/LegalPage.css";

function renderBody(block, index) {
  if (block.type === "list") {
    return (
      <ul className="legal-list" key={`${block.title}-${index}`}>
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  return (
    <div className="legal-paragraphs" key={`${block.title}-${index}`}>
      {block.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}

export default function LegalPage({
  eyebrow,
  title,
  intro,
  summary,
  updatedOn,
  sections,
}) {
  return (
    <>
      <main className="legal-shell">
        <section className="legal-hero">
          <div className="legal-hero-copy">
            <p className="legal-eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            <p className="legal-intro">{intro}</p>
          </div>

          <aside className="legal-summary-card">
            <p className="legal-summary-label">A human note</p>
            <p className="legal-summary-text">{summary}</p>
            <div className="legal-summary-meta">
              <span>Last updated</span>
              <strong>{updatedOn}</strong>
            </div>
            <div className="legal-summary-meta">
              <span>Reach us</span>
              <a href="mailto:info@diqraarchitects.com">
                info@diqraarchitects.com
              </a>
            </div>
          </aside>
        </section>

        <section className="legal-content-grid">
          <aside className="legal-index">
            <p className="legal-index-label">On this page</p>
            <ol>
              {sections.map((section, index) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span>{section.title}</span>
                  </a>
                </li>
              ))}
            </ol>
          </aside>

          <div className="legal-sections">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="legal-section-card"
              >
                <p className="legal-section-kicker">{section.kicker}</p>
                <h2>{section.title}</h2>
                {section.body.map(renderBody)}
              </section>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

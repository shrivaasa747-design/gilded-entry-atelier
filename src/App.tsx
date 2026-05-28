import logo from "@/assets/shrivaasa-logo.webp";
import heroTexture from "@/assets/hero-texture.webp";
import nameplate from "@/assets/nameplate.webp";

const WHATSAPP = "https://wa.me/919257682549";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <p className="section-label">{children}</p>
      <span className="section-label-rule" />
    </div>
  );
}

function StepIcon({ which }: { which: "camera" | "compass" | "tool" }) {
  const common = {
    width: 30,
    height: 30,
    viewBox: "0 0 30 30",
    fill: "none",
    stroke: "#C8A965",
    strokeWidth: 1,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    style: { opacity: 0.85 },
  };
  if (which === "camera") {
    return (
      <svg {...common} aria-hidden="true">
        <path d="M3 9 H10 L12 6 H18 L20 9 H27 V24 H3 Z" />
        <circle cx="15" cy="16" r="5" />
      </svg>
    );
  }
  if (which === "compass") {
    return (
      <svg {...common} aria-hidden="true">
        <circle cx="15" cy="15" r="10" />
        <line x1="15" y1="3" x2="15" y2="7" />
        <line x1="15" y1="23" x2="15" y2="27" />
        <line x1="3" y1="15" x2="7" y2="15" />
        <line x1="23" y1="15" x2="27" y2="15" />
        <circle cx="15" cy="15" r="1.4" fill="#C8A965" />
      </svg>
    );
  }
  return (
    <svg {...common} aria-hidden="true">
      <line x1="5" y1="25" x2="18" y2="12" />
      <path d="M18 12 L22 8 L26 12 L22 16 Z" />
      <circle cx="6" cy="24" r="1.2" />
    </svg>
  );
}

export default function App() {
  return (
    <main>
      {/* HERO */}
      <section
        className="relative flex min-h-screen flex-col items-center justify-center"
        style={{ backgroundColor: "#0A2E22", padding: "80px 48px" }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroTexture})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(10,46,34,0.25) 0%, rgba(10,46,34,0.65) 100%)",
          }}
        />
        <div className="relative z-10 flex w-full max-w-[860px] flex-col items-center text-center">
          <h1 className="m-0 w-full">
            <img
              src={logo}
              alt="Shrivaasa"
              className="mx-auto h-auto w-full"
              style={{ maxWidth: 560 }}
              width={1536}
              height={512}
              fetchPriority="high"
            />
          </h1>
          <span
            className="gold-rule"
            style={{ width: 72, opacity: 0.7, marginTop: 40, marginBottom: 32 }}
          />
          <p
            style={{
              fontSize: 13,
              letterSpacing: "0.1em",
              color: "rgba(245,245,245,0.60)",
              lineHeight: 1.9,
              maxWidth: 380,
              marginBottom: 48,
            }}
          >
            Bespoke Entrance Identities for Modern Luxury Homes
          </p>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="cta-button">
            Begin Consultation
          </a>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section style={{ backgroundColor: "#0E3B2A", padding: "120px 48px" }}>
        <div className="mx-auto w-full max-w-[600px] text-center">
          <SectionLabel>Philosophy</SectionLabel>
          <h2
            className="heading-serif"
            style={{ fontSize: "clamp(26px, 5vw, 46px)", marginTop: 48, marginBottom: 40 }}
          >
            An Atelier, Not a Vendor.
          </h2>
          <p className="body-copy" style={{ marginBottom: 28 }}>
            Shrivaasa is a bespoke entrance identity atelier. We work at the intersection of
            architectural aesthetics, Vastu, and numerology — crafting entrance systems that are as
            intentional as the homes they belong to.
          </p>
          <p className="body-copy">
            Each entrance identity is conceived exclusively for the home and its energy. We do not
            offer catalogue templates. We offer considered design.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ backgroundColor: "#0A2E22", padding: "120px 48px" }}>
        <div className="mx-auto w-full max-w-[800px] text-center">
          <SectionLabel>The Process</SectionLabel>
          <h2
            className="heading-serif"
            style={{ fontSize: "clamp(24px, 4.5vw, 42px)", marginTop: 48, marginBottom: 80 }}
          >
            Three Steps to Your Entrance Identity
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ rowGap: 64, columnGap: 48 }}>
            {[
              {
                icon: "camera" as const,
                numeral: "I",
                title: "Share Your Entrance",
                desc: "A photograph and brief of your home's entrance.",
              },
              {
                icon: "compass" as const,
                numeral: "II",
                title: "Custom Concept Direction",
                desc: "A bespoke design direction crafted for your space and energy.",
              },
              {
                icon: "tool" as const,
                numeral: "III",
                title: "Execution & Installation",
                desc: "Precision-crafted and installed by our atelier team.",
              },
            ].map((step) => (
              <div key={step.numeral} className="flex flex-col items-center text-center">
                <StepIcon which={step.icon} />
                <div
                  className="heading-serif"
                  style={{ fontSize: 36, color: "#C8A965", opacity: 0.45, marginTop: 20 }}
                >
                  {step.numeral}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 400,
                    fontSize: 11,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#F5F5F5",
                    marginTop: 20,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 300,
                    fontSize: 13,
                    color: "rgba(245,245,245,0.58)",
                    lineHeight: 1.85,
                    maxWidth: 220,
                    marginTop: 16,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MATERIALS */}
      <section style={{ backgroundColor: "#0C3325", paddingTop: 120 }}>
        <div
          className="mx-auto w-full text-center"
          style={{ maxWidth: 580, paddingLeft: 24, paddingRight: 24, paddingBottom: 80 }}
        >
          <SectionLabel>Materials</SectionLabel>
          <h2
            className="heading-serif"
            style={{
              fontSize: "clamp(24px, 4.5vw, 42px)",
              lineHeight: 1.25,
              marginTop: 48,
              marginBottom: 32,
            }}
          >
            Thoughtfully Curated Premium Materials
          </h2>
          <p
            className="body-copy"
            style={{ maxWidth: 500, marginLeft: "auto", marginRight: "auto" }}
          >
            Burnished metals, solid woods, natural stones, quartz, and architectural finishes —
            each material selected for its spatial compatibility, Vastu alignment, and
            numerological resonance with the home.
          </p>
        </div>
        <div className="flex w-full justify-center" style={{ padding: "0 24px" }}>
          <img
            src={nameplate}
            alt="A burnished brass nameplate on dark walnut, mounted against a textured stone wall."
            className="h-auto w-full"
            style={{ maxWidth: 860, opacity: 0.92 }}
            width={1728}
            height={1088}
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ backgroundColor: "#0A2E22", padding: "120px 48px" }}>
        <div
          className="mx-auto flex w-full max-w-[480px] flex-col items-center text-center"
          style={{ gap: 20 }}
        >
          <span className="gold-rule" style={{ width: 40, opacity: 0.5 }} />
          <h2
            className="heading-serif"
            style={{ fontSize: "clamp(26px, 5vw, 46px)", marginTop: 16 }}
          >
            Limited Consultations Available.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 300,
              fontSize: 14,
              color: "rgba(245,245,245,0.55)",
              letterSpacing: "0.06em",
            }}
          >
            By appointment only.
          </p>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 300,
              fontSize: 10,
              color: "rgba(200,169,101,0.65)",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
            }}
          >
            Bengaluru
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
            style={{ marginTop: 24 }}
          >
            Request Consultation
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          backgroundColor: "#0A2E22",
          borderTop: "1px solid rgba(200,169,101,0.12)",
          padding: "32px 24px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 300,
            fontSize: 10,
            color: "rgba(245,245,245,0.28)",
            letterSpacing: "0.15em",
          }}
        >
          © Shrivaasa 2026 | Bengaluru
        </p>
      </footer>
    </main>
  );
}

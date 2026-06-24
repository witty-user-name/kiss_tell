import React from "react";
import {
  ArrowDown,
  Camera,
  Check,
  Heart,
  Layers3,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Tag,
} from "lucide-react";

const shadeMatches = [
  {
    shade: "Velvet Fig",
    brand: "Luna Rouge",
    price: "$28",
    match: "96%",
    color: "#8f3853",
    alternatives: ["Berry Muse, $14", "Plum Static, $19"],
  },
  {
    shade: "Coral Signal",
    brand: "Gloss Circuit",
    price: "$22",
    match: "93%",
    color: "#d95d55",
    alternatives: ["Apricot Pulse, $12", "Peach Relay, $18"],
  },
  {
    shade: "Rose Cache",
    brand: "Maison Mica",
    price: "$34",
    match: "91%",
    color: "#b76578",
    alternatives: ["Petal Code, $16", "Soft Rouge, $21"],
  },
];

const testimonials = [
  {
    quote:
      "I saw the exact berry lip at dinner and had three close matches saved before dessert arrived.",
    name: "Maya R.",
    detail: "Beauty shopper",
  },
  {
    quote:
      "The alternatives are the real unlock. It feels like having a shade-savvy friend in my camera roll.",
    name: "Iris V.",
    detail: "Lip color collector",
  },
  {
    quote:
      "It turns a random compliment into a product shortlist with prices, finishes, and lookalikes.",
    name: "Noelle P.",
    detail: "Everyday glam maximalist",
  },
];

const features = [
  {
    icon: Camera,
    title: "Scan the shade",
    text: "Point your phone at a lip color in real life and Kiss & Tell reads tone, depth, and finish.",
  },
  {
    icon: Search,
    title: "Compare matches",
    text: "See the closest fictional catalog matches with confidence scores, prices, and finish notes.",
  },
  {
    icon: Tag,
    title: "Find alternatives",
    text: "Discover similar shades at different price points before you buy the first match.",
  },
  {
    icon: Heart,
    title: "Save the look",
    text: "Keep a private shade board for the colors you notice on friends, creators, and street style.",
  },
];

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function App() {
  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Kiss & Tell home">
          <span className="brand-mark">K&T</span>
          <span>Kiss & Tell</span>
        </a>
        <div className="nav-links">
          <a href="#how">How it works</a>
          <a href="#matches">Examples</a>
          <a href="#love">Testimonials</a>
        </div>
        <button className="nav-cta" onClick={() => scrollToId("waitlist")}>
          <Sparkles size={16} aria-hidden="true" />
          Coming soon
        </button>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">AI shade discovery for lipstick lovers</p>
          <h1>Kiss & Tell finds the lipstick shade you just spotted.</h1>
          <p className="hero-text">
            Point your phone at a lip color, get the closest shade match, compare
            prices, and discover alternatives before the moment fades.
          </p>
          <div className="hero-actions">
            <button className="primary-button" onClick={() => scrollToId("waitlist")}>
              <Sparkles size={18} aria-hidden="true" />
              Join the launch list
            </button>
            <button className="secondary-button" onClick={() => scrollToId("matches")}>
              <ArrowDown size={18} aria-hidden="true" />
              See shade examples
            </button>
          </div>
          <div className="trust-row" aria-label="Product highlights">
            <span>
              <Check size={16} aria-hidden="true" /> Price comparisons
            </span>
            <span>
              <Check size={16} aria-hidden="true" /> Fictional demo data
            </span>
            <span>
              <Check size={16} aria-hidden="true" /> No signup required
            </span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Kiss & Tell app concept preview">
          <img
            src="/kiss-tell-hero.png"
            alt="A phone showing a lipstick scan concept beside lipstick tubes and shade cards"
          />
          <div className="scan-card">
            <span className="scan-dot" />
            <p>Live shade read</p>
            <strong>Velvet Fig</strong>
            <small>96% close match</small>
          </div>
        </div>
      </section>

      <section className="ticker" aria-label="Shade discovery moments">
        <span>Dinner table lip color</span>
        <span>Creator tutorial shade</span>
        <span>Wedding guest gloss</span>
        <span>Drugstore dupe hunt</span>
      </section>

      <section className="section split" id="how">
        <div>
          <p className="eyebrow">How it works</p>
          <h2>From passing compliment to product shortlist.</h2>
        </div>
        <div className="steps">
          <article>
            <span>01</span>
            <h3>Frame the lips</h3>
            <p>Use the camera guide to isolate color without guessing from memory.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Read the finish</h3>
            <p>Kiss & Tell separates tone, saturation, depth, and gloss level.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Shop the match</h3>
            <p>Browse the closest shades and lower-priced alternatives in seconds.</p>
          </article>
        </div>
      </section>

      <section className="section" id="matches">
        <div className="section-heading">
          <p className="eyebrow">Example matches</p>
          <h2>Shade cards that feel ready for the beauty aisle.</h2>
          <p>
            These demo products are fictional, built to show how Kiss & Tell could
            compare tone, confidence, price, and alternatives.
          </p>
        </div>
        <div className="match-grid">
          {shadeMatches.map((item) => (
            <article className="match-card" key={item.shade}>
              <div className="swatch" style={{ backgroundColor: item.color }}>
                <span>{item.match}</span>
              </div>
              <div className="match-content">
                <div>
                  <p>{item.brand}</p>
                  <h3>{item.shade}</h3>
                </div>
                <strong>{item.price}</strong>
              </div>
              <div className="alt-list">
                {item.alternatives.map((alt) => (
                  <span key={alt}>{alt}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section feature-band">
        <div className="section-heading compact">
          <p className="eyebrow">Built for real-life discovery</p>
          <h2>Every pretty shade gets a second look.</h2>
        </div>
        <div className="feature-grid">
          {features.map(({ icon: Icon, title, text }) => (
            <article className="feature" key={title}>
              <Icon size={24} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section social-proof" id="love">
        <div className="section-heading">
          <p className="eyebrow">Early reactions</p>
          <h2>Made for the shade you cannot stop thinking about.</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article className="testimonial" key={item.name}>
              <div className="stars" aria-label="Five star testimonial">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={16} fill="currentColor" aria-hidden="true" />
                ))}
              </div>
              <p>“{item.quote}”</p>
              <strong>{item.name}</strong>
              <span>{item.detail}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section waitlist" id="waitlist">
        <div>
          <p className="eyebrow">Coming soon</p>
          <h2>Launch interest is open, data collection is not.</h2>
          <p>
            Kiss & Tell is in concept mode. This preview does not collect email
            addresses or send form data yet.
          </p>
        </div>
        <div className="waitlist-panel">
          <ShieldCheck size={30} aria-hidden="true" />
          <h3>No signup form in this version</h3>
          <p>
            The launch CTA is intentionally non-collecting until a real waitlist
            service or backend is selected.
          </p>
          <button className="primary-button" onClick={() => scrollToId("top")}>
            <Layers3 size={18} aria-hidden="true" />
            Back to preview
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;

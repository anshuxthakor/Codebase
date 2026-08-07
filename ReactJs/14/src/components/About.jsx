import React from "react";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto p-8">
      {/* Header */}
      <div className="text-center mb-12">
        <p
          className="uppercase tracking-[.3em] text-[11px] mb-3"
          style={{
            color: "#4C6F58",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Our Story
        </p>
        <h1
          className="text-4xl md:text-5xl"
          style={{
            fontFamily: "'Fraunces', serif",
            color: "#232520",
          }}
        >
          About This Marketplace
        </h1>
      </div>

      {/* Intro + image split */}
      <div className="text-center mb-8">
        <div
          className="border p-8 flex flex-col justify-center"
          style={{
            background: "#EFE6D0",
            borderColor: "#C9BB98",
          }}
        >
          <h2
            className="text-2xl mb-4"
            style={{
              fontFamily: "'Fraunces', serif",
              color: "#232520",
            }}
          >
            Built By Sellers, For Sellers
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{
              color: "#5c5544",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            We started with a simple idea: buying and selling should feel
            personal, not transactional. What began as a small corner of the
            internet has grown into a place where thousands of sellers list
            everything from vintage electronics to everyday essentials — and
            where every listing is treated like it matters, because it does.
          </p>
        </div>


          

      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
        {[
          { label: "Active Listings", value: "2.4M+" },
          { label: "Countries Served", value: "190+" },
          { label: "Years Trading", value: "25+" },
          { label: "Verified Sellers", value: "180K+" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="border p-6 text-center"
            style={{
              background: "#F8F4E9",
              borderColor: "#C9BB98",
            }}
          >
            <p
              className="text-3xl mb-2"
              style={{
                color: "#B5502A",
                fontFamily: "'IBM Plex Mono', monospace",
              }}
            >
              {stat.value}
            </p>
            <p
              className="uppercase tracking-[.15em] text-[11px]"
              style={{
                color: "#4C6F58",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Values section */}
      <div
        className="border p-8 mb-8"
        style={{
          background: "#EFE6D0",
          borderColor: "#C9BB98",
        }}
      >
        <h2
          className="text-2xl mb-6"
          style={{
            fontFamily: "'Fraunces', serif",
            color: "#232520",
          }}
        >
          What We Stand For
        </h2>

        <div
          className="border-t border-dashed mb-6"
          style={{ borderColor: "#C9BB98" }}
        />

        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              title: "Trust First",
              body: "Every seller is verified. Every listing is reviewed. Buying should never feel like a gamble.",
            },
            {
              title: "Fair Prices",
              body: "No hidden fees, no inflated shipping. What you see at checkout is what you pay.",
            },
            {
              title: "Real People",
              body: "Behind every listing is a person — a collector, a small business, a seller clearing out a garage.",
            },
          ].map((value) => (
            <div key={value.title}>
              <h3
                className="text-lg mb-2"
                style={{
                  fontFamily: "'Fraunces', serif",
                  color: "#B5502A",
                }}
              >
                {value.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: "#5c5544",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {value.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div
        className="border p-8 mb-8"
        style={{
          background: "#F8F4E9",
          borderColor: "#C9BB98",
        }}
      >
        <h2
          className="text-2xl mb-6"
          style={{
            fontFamily: "'Fraunces', serif",
            color: "#232520",
          }}
        >
          How We Got Here
        </h2>

        <div
          className="border-t border-dashed mb-6"
          style={{ borderColor: "#C9BB98" }}
        />

        <div className="grid sm:grid-cols-4 gap-6">
          {[
            { year: "1999", body: "First listing goes live from a garage in California." },
            { year: "2006", body: "Seller tools launch, opening the door to small businesses." },
            { year: "2015", body: "Mobile app crosses 10 million downloads." },
            { year: "2024", body: "Marketplace expands to 190+ countries worldwide." },
          ].map((item) => (
            <div key={item.year}>
              <p
                className="text-xl mb-2"
                style={{
                  color: "#B5502A",
                  fontFamily: "'IBM Plex Mono', monospace",
                }}
              >
                {item.year}
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: "#5c5544",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div
        className="border p-8 mb-8"
        style={{
          background: "#EFE6D0",
          borderColor: "#C9BB98",
        }}
      >
        <h2
          className="text-2xl mb-6"
          style={{
            fontFamily: "'Fraunces', serif",
            color: "#232520",
          }}
        >
          The People Behind It
        </h2>

        <div
          className="border-t border-dashed mb-6"
          style={{ borderColor: "#C9BB98" }}
        />

        <div className="grid sm:grid-cols-4 gap-6">
          {[
            { name: "Maya Chen", role: "Head of Trust & Safety" },
            { name: "Devon Reyes", role: "Lead, Seller Experience" },
            { name: "Priya Nair", role: "Head of Logistics" },
            { name: "Sam Okafor", role: "Community Lead" },
          ].map((person) => (
            <div key={person.name} className="text-center">
              <div
                className="w-20 h-20 rounded-full mx-auto mb-3 flex items-center justify-center"
                style={{ background: "#2F4A3C" }}
              >
                <span
                  className="text-lg"
                  style={{
                    color: "#EFE6D0",
                    fontFamily: "'Fraunces', serif",
                  }}
                >
                  {person.name.split(" ").map((n) => n[0]).join("")}
                </span>
              </div>
              <p
                className="text-sm font-semibold"
                style={{
                  color: "#232520",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {person.name}
              </p>
              <p
                className="text-xs mt-1"
                style={{
                  color: "#8A7C58",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {person.role}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div
        className="border p-8"
        style={{
          background: "#F8F4E9",
          borderColor: "#C9BB98",
        }}
      >
        <h2
          className="text-2xl mb-6"
          style={{
            fontFamily: "'Fraunces', serif",
            color: "#232520",
          }}
        >
          Common Questions
        </h2>

        <div
          className="border-t border-dashed mb-6"
          style={{ borderColor: "#C9BB98" }}
        />

        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
          {[
            {
              q: "How are sellers verified?",
              a: "Every seller completes an identity check and agrees to our listing standards before their first sale goes live.",
            },
            {
              q: "What happens if an item doesn't arrive?",
              a: "Buyers are covered by our purchase protection — reach out to support and we'll investigate within 48 hours.",
            },
            {
              q: "Can I sell internationally?",
              a: "Yes. Sellers can opt into international shipping from their dashboard, with rates calculated automatically at checkout.",
            },
            {
              q: "Are there fees for buyers?",
              a: "No. The price you see, plus any listed shipping, is exactly what you pay — no surprise checkout fees.",
            },
          ].map((item) => (
            <div key={item.q}>
              <h3
                className="text-base mb-2"
                style={{
                  color: "#B5502A",
                  fontFamily: "'Fraunces', serif",
                }}
              >
                {item.q}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: "#5c5544",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
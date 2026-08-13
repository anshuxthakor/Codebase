import React from "react";
import SpecSection from "../components/utils/SpecSection";
import SpecRow from "../components/utils/SpecRow";
import RulerDivider from "../components/utils/RulerDivider";

const Home = () => {
  return (
    <div>
      <h1 className="text-2xl font-black uppercase tracking-tight text-[#16324f] leading-none">
        Home
      </h1>
      <div className="flex items-center gap-2 mt-2 mb-8">
        <span className="h-0.75 w-8 bg-[#d7263d]" />
        <span className="font-mono text-[11px] text-[#5b7089]">
          about this build
        </span>
      </div>

      <p className="text-sm text-[#16324f] leading-relaxed mb-8 max-w-2xl">
        This interface borrows its language from architectural and
        engineering drawings — corner brackets like a title block, mono
        labels like a spec sheet, a thin red tick standing in for a
        revision mark. Every screen is treated as a numbered sheet in the
        same set, so the same handful of parts — headers, rows, dividers —
        repeat everywhere instead of each page inventing its own look.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SpecSection letter="A" title="Palette">
          <SpecRow label="Navy" value="#16324f" />
          <SpecRow label="Red accent" value="#d7263d" />
          <SpecRow label="Muted slate" value="#5b7089" />
          <SpecRow label="Background" value="#eef1f4" />
        </SpecSection>

        <SpecSection letter="B" title="Typography">
          <SpecRow label="Labels" value="Mono, uppercase, wide tracking" stacked />
          <SpecRow label="Headings" value="Sans, black weight, tight tracking" stacked />
          <SpecRow label="Body" value="Sans, regular weight" stacked />
        </SpecSection>

        <SpecSection letter="C" title="Motifs">
          <SpecRow label="Corners" value="Open bracket marks on every panel" stacked />
          <SpecRow label="Grid" value="Dotted 26px background, like graph paper" stacked />
          <SpecRow label="Dividers" value="Ruler tick with measurement label" stacked />
        </SpecSection>

        <SpecSection letter="D" title="Components">
          <SpecRow label="BlueprintFrame" value="page shell + corner brackets" stacked />
          <SpecRow label="SpecCard" value="bordered panel, no full-bleed bg" stacked />
          <SpecRow label="SpecRow / SpecSection" value="labeled data rows, grouped" stacked />
          <SpecRow label="FormField / PasswordField" value="RHF-bound inputs + errors" stacked />
          <SpecRow label="NavItem" value="active-state route link" stacked />
          <SpecRow label="StatusBadge" value="square-dot status pill" stacked />
        </SpecSection>

        <SpecSection letter="E" title="Stack">
          <SpecRow label="React" value="component layer" stacked />
          <SpecRow label="React Router" value="client-side routing" stacked />
          <SpecRow label="React Hook Form" value="form state + validation" stacked />
          <SpecRow label="Tailwind CSS" value="utility styling" stacked />
          <SpecRow label="Axios" value="data fetching" stacked />
          <SpecRow label="lucide-react" value="icon set" stacked />
        </SpecSection>

        <SpecSection letter="F" title="Routes on file">
          <SpecRow label="/main" value="Home" stacked />
          <SpecRow label="/main/products" value="Product catalog" stacked />
          <SpecRow label="/main/users" value="User directory" stacked />
          <SpecRow label="/login, /register" value="Auth screens" stacked />
        </SpecSection>
      </div>

      {/* Revision log */}
      <div className="mt-6">
        <h3 className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#5b7089] mb-2">
          <span className="flex items-center justify-center h-4 w-4 border border-[#16324f] text-[9px] text-[#16324f]">
            G
          </span>
          Revision log
        </h3>
        <div className="divide-y divide-[#16324f]/10 border border-[#16324f]/15">
          <SpecRow label="rev. a" value="Login + Register screens, RHF validation" />
          <SpecRow label="rev. b" value="Navbar, routed layout, lettered nav" />
          <SpecRow label="rev. c" value="User directory, spec-card record view" />
          <SpecRow label="rev. d" value="Product catalog, full-width rows" />
          <SpecRow label="rev. e" value="Home rebuilt as a design spec sheet" />
        </div>
      </div>

      <RulerDivider measurement="sheet 1/3" />
    </div>
  );
};

export default Home;
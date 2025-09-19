// src/app/components/FontSpecSheet.tsx
import React from "react";

// This component is not intended for rendering in production, only as a demo in storyblock

const specimens = [
  { name: "text-h1", className: "text-h1", sample: "The Quick Brown Fox" },
  { name: "text-h2", className: "text-h2", sample: "The Quick Brown Fox" },
  { name: "text-h3", className: "text-h3", sample: "The Quick Brown Fox" },
  {
    name: "text-body",
    className: "text-body",
    sample: "Sphinx of black quartz, judge my vow.",
  },
  {
    name: "text-body-bold",
    className: "text-body-bold",
    sample: "Sphinx of black quartz, judge my vow.",
  },
  {
    name: "text-caption",
    className: "text-caption",
    sample: "Pack my box with five dozen liquor jugs.",
  },
];

function Block({
  title,
  inverse = false,
}: {
  title: string;
  inverse?: boolean;
}) {
  return (
    <section
      className={[
        "rounded-2xl p-6 ring-1",
        inverse
          ? "bg-surface-ink text-paper-0 ring-paper-2"
          : "bg-paper-0 text-surface-ink ring-paper-2",
      ].join(" ")}
    >
      <header className="mb-4 flex items-center justify-between">
        <h2 className="font-breadBody font-[700] text-lg tracking-tight">
          {title}
        </h2>
        <span
          className={[
            "inline-block rounded-full px-2 py-1 text-xs",
            inverse ? "bg-blue-2 text-paper-0" : "bg-blue-0 text-blue-2",
          ].join(" ")}
        >
          {inverse ? "Light on Dark" : "Dark on Light"}
        </span>
      </header>

      <ul className="space-y-6">
        {specimens.map((s) => (
          <li key={s.name}>
            <div className="mb-1 flex items-center gap-2">
              <code
                className={[
                  "rounded-md px-2 py-1 text-xs",
                  inverse
                    ? "bg-surface-brown-1 text-paper-0"
                    : "bg-paper-2 text-surface-ink",
                ].join(" ")}
              >
                .{s.name}
              </code>
              <span className="text-caption opacity-70">({s.className})</span>
            </div>
            <div className={s.className}>{s.sample}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function FontSpecSheet() {
  return (
    // If NOT applied globally, uncomment the next line to ensure font vars exist here:
    // <div className={`${breadDisplay.variable} ${breadBody.variable}`}>
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 lg:grid-cols-2">
      {/* Usage / Docs */}
      <section className="lg:col-span-2 rounded-2xl bg-paper-main ring-1 ring-paper-2 p-6">
        <h3 className="font-breadBody font-[700] text-xl tracking-tight mb-3">
          How to use these fonts
        </h3>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Preconfigured class usage */}
          <div className="rounded-xl bg-paper-0 p-4 ring-1 ring-paper-2">
            <h4 className="font-breadBody font-[700] mb-2">
              A) Preconfigured classes
            </h4>
            <p className="text-body mb-3">
              Use the named utilities you defined in{" "}
              <code>@layer components</code>:
            </p>
            <pre className="overflow-x-auto rounded-md bg-surface-grey/10 p-3 text-caption">
              {`<h1 className="text-h1">Heading XL</h1>
<h2 className="text-h2">Heading L</h2>
<h3 className="text-h3">Heading M</h3>
<p className="text-body">Body text…</p>
<p className="text-body-bold">Emphasis…</p>
<span className="text-caption">Caption text…</span>`}
            </pre>
          </div>

          {/* Manual font-family access */}
          <div className="rounded-xl bg-paper-0 p-4 ring-1 ring-paper-2">
            <h4 className="font-breadBody font-[700] mb-2">
              B) Manual font-family (advanced)
            </h4>
            <p className="text-body mb-3">
              If you need to bypass the preconfigured classes, you can target
              the raw font variables from <code>next/font</code>. In Tailwind v4
              you already mapped them in <code>@theme</code>:
            </p>
            <ul className="text-caption mb-3 list-disc pl-5">
              <li>
                <code>font-breadDisplay</code> →{" "}
                <code>var(--font-breadDisplay)</code> stack
              </li>
              <li>
                <code>font-breadBody</code> → <code>var(--font-breadBody)</code>{" "}
                stack
              </li>
            </ul>
            <pre className="overflow-x-auto rounded-md bg-surface-grey/10 p-3 text-caption">
              {`// Using Tailwind tokens (preferred)
<h1 className="font-breadDisplay font-[900] tracking-[-2.5%] uppercase">BreadDisplay Black</h1>
<p className="font-breadBody">BreadBody Regular</p>
    <strong className="font-breadBody font-[700]">BreadBody Bold</strong>

// Or, inline style with the raw CSS variable
<div style={{ fontFamily: "var(--font-breadDisplay), ui-sans-serif, system-ui, sans-serif" }}>
  Raw BreadDisplay via CSS var
</div>`}
            </pre>
            <p className="text-caption mt-2 opacity-70">
              Tip: stick to the preconfigured classes for consistency; drop to
              manual only for edge cases.
            </p>
          </div>
        </div>
      </section>
      {/* LEFT: dark text on light background */}
      <Block title="Typography Specimens" inverse={false} />

      {/* RIGHT: light text on dark background */}
      <Block title="Typography Specimens" inverse />
    </div>
    // </div>
  );
}

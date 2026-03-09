export function TypographyH1({ ...props }) {
  return (
    <h1
      className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance"
      {...props}
    />
  );
}

export function TypographyH2({ ...props }) {
  return (
    <h2
      className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 font-heading"
      {...props}
    />
  );
}

export function TypographyH3({ ...props }) {
  return (
    <h3
      className="scroll-m-20 text-2xl font-semibold tracking-tight"
      {...props}
    />
  );
}

export function TypographyH4({ ...props }) {
  return (
    <h4
      className="scroll-m-20 text-xl font-semibold tracking-tight"
      {...props}
    />
  );
}

export function Paragraph({ ...props }) {
  return <p className="leading-7 not-first:mt-6" {...props} />;
}

export function Blockquote({ ...props }) {
  return <blockquote className="mt-6 border-l-2 pl-6 italic" {...props} />;
}

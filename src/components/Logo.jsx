// "D" for David, with a code prompt chevron inside the bowl.
export default function Logo({ size = 40 }) {
  return (
    <svg className="logo" width={size} height={size} viewBox="0 0 32 32" role="img" aria-label="David, home">
      <rect width="32" height="32" rx="9" fill="var(--ink)" />
      <path d="M10.5 8.5h5.5a7.5 7.5 0 0 1 0 15h-5.5z" fill="none" stroke="var(--bg)" strokeWidth="2.6" strokeLinejoin="round" />
      <path d="M14.5 13l3.3 3-3.3 3" fill="none" stroke="var(--accent)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

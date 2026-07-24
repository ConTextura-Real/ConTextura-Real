export default function Button({
  as: Component = "button",
  className = "",
  variant = "primary",
  ...props
}) {
  const variants = {
    primary:
      "bg-[#B99145] text-[#21170f] shadow-lg shadow-[#B99145]/25 hover:bg-[#D0AD5A]",
    secondary:
      "border border-white/35 bg-white/15 text-white backdrop-blur-md hover:bg-white/25",
    outline:
      "border border-[#B99145] bg-transparent text-[#21170f] hover:bg-[#FFF8EE]",
  };

  return (
    <Component
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${className}`}
      {...props}
    />
  );
}

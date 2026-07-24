export function TextInput({ className = "", ...props }) {
  return (
    <input
      className={`w-full rounded-2xl border border-[#D8C09A] bg-[#FFFDF8] px-4 py-3 text-sm text-[#292436] outline-none transition placeholder:text-[#7A7378]/50 focus:border-[#B8944D] focus:ring-4 focus:ring-[#D6B45F]/20 ${className}`}
      {...props}
    />
  );
}

export function TextArea({ className = "", ...props }) {
  return (
    <textarea
      className={`w-full resize-none rounded-2xl border border-[#D3B476] bg-[#FFFDF8] p-5 text-base leading-8 text-[#292436] outline-none transition placeholder:text-[#7A7378]/45 focus:border-[#B8944D] focus:ring-4 focus:ring-[#D6B45F]/25 ${className}`}
      {...props}
    />
  );
}

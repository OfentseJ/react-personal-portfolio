import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xjkepzlb");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-8">
      <label htmlFor="email">Email Address:</label>
      <input
        id="email"
        type="email"
        name="email"
        required
        className="bg-amber-50 text-slate-700 font-medium focus:outline-0 p-2 w-xs rounded-lg"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="email">Message:</label>
      <textarea
        id="message"
        name="message"
        required
        className="bg-amber-50 text-slate-700 font-medium focus:outline-0 p-2 rounded-lg h-[128px] resize-none"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        type="submit"
        disabled={state.submitting}
        className="border-2 rounded-lg mt-4 p-2 hover:.inverse"
      >
        Send Message <i class="ri-send-plane-fill"></i>
      </button>
    </form>
  );
}

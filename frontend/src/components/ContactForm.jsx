import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xjkepzlb");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        type="email"
        name="email"
        className="bg-amber-50 text-black focus:outline-0 p-1 w-xs rounded-lg"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="email">Message</label>
      <textarea
        id="message"
        name="message"
        className="bg-amber-50 text-black focus:outline-0 p-1 rounded-lg resize-none"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        type="submit"
        disabled={state.submitting}
        className="border-4 rounded-lg"
      >
        Submit
      </button>
    </form>
  );
}

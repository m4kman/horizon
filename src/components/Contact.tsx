import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORM_ENDPOINT);

  if (state.succeeded) {
    return (
      <div className="mb-72 mt-72 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mx-auto mb-8 h-32 w-32 text-[#B8D653]"
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
            clipRule="evenodd"
          />
        </svg>

        <h1 className="mb-8 text-6xl font-bold text-[#B8D653]">Thank You!</h1>
        <p className="mb-8 text-3xl font-semibold">
          Your response was submitted successfully.
        </p>
        <p className="text-[#9B9898]">We will reach out to you soon.</p>
      </div>
    );
  }

  return (
    <div
      id="contact"
      className="mt-[17.5rem] flex min-h-[839px] justify-between gap-12"
    >
      <div className="max-w-[45rem]">
        <p className="text-xl font-bold leading-8 text-[#8878B7]">
          we're here to listen!
        </p>
        <h1 className="mb-6 text-[2.5rem] font-semibold">Contact us</h1>
        <p className="mb-14 text-2xl">
          Reach out to us for personalized support and expert guidance on rubber
          strip customization. Your satisfaction is our utmost priority.
        </p>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <input
              className="mb-4 rounded-[1.25rem] bg-[#F6F6F6] px-[2.62rem] py-[1.3rem] text-xl font-medium text-[#BBA4FF] placeholder-[#BBA4FF]"
              type="text"
              placeholder="Full Name"
              name="name"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <input
              className="mb-4 rounded-[1.25rem] bg-[#F6F6F6] px-[2.62rem] py-[1.3rem] text-xl font-medium text-[#BBA4FF] placeholder-[#BBA4FF]"
              type="email"
              placeholder="Email"
              name="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <input
              className="rounded-[1.25rem] bg-[#F6F6F6] px-[2.62rem] pb-[11.56rem] pt-[1.3rem] text-xl font-medium text-[#BBA4FF] placeholder-[#BBA4FF]"
              type="text"
              placeholder="Tell us details of your order!"
              name="description"
            />
            <ValidationError
              prefix="Description"
              field="description"
              errors={state.errors}
            />
          </div>
          <button
            type="submit"
            className="mt-7 self-end rounded-[.625rem] bg-[#B8D653] px-[4rem] py-[1rem] font-main text-2xl font-semibold text-[#fff]"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="relative min-h-full min-w-[53rem] justify-self-end bg-contact-image bg-no-repeat">
        <div className="absolute left-[5.31rem] top-[32.38rem] text-[#fff]">
          <h1 className="mt-4 font-hero text-5xl font-bold">Info.</h1>
          <div className="text-xl">
            <div className="mt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="inline-block h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <p className="inline-block pl-5">Info@hgat.ae</p>
            </div>
            <div className="mt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="inline-block h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              <p className="inline-block pl-5">
                +971 506280879 / +971 509526111
              </p>
            </div>
            <div className="mt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="inline-block h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <p className="inline-block pl-5">
                4082, New Industrial Area, Ajman U.A.E.
              </p>
            </div>
            <div className="mt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="inline-block h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="inline-block pl-5">08:00 am - 08:00 pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

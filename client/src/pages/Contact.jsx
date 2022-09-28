import { ContactForm, Footernav, Title } from "../components";
function Contact({ children }) {
  return (
    <>
      <section
        id="about"
        className="about-me mt-20 px-8 tablet:px-10 laptop:px-48 laptop:-mt-20 min-w-[470px]"
      >
        <Title>Get in touch</Title>
        <div className="mt-7 laptop:mt-10">
          <p className=" text-body-1 about-description font-IBM">
            I’d love to hear about what you’re working on and how I could help.
            I’m currently looking for a new role and I am open to a wide range
            of opportunities. I’m a hard-working and positive person who will
            always approach each task with a sense of purpose and attention to
            detail. Please do feel free to check out my online profiles below
            and get in touch using the form.
          </p>
        </div>
      </section>
      <ContactForm />
      <Footernav />
    </>
  );
}

export default Contact;

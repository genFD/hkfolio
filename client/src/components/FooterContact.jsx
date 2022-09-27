import { Link } from "react-router-dom";

const FooterContact = () => {
  return (
    <div className="mt-36 flex flex-col items-center gap-10 px-8 tablet:flex-row tablet:justify-between tablet:px-10 laptop:px-48 w-full">
      <h3 className="text-heading-2 heading-footer font-IBM text-center tablet:text-start">
        Interested in working together?
      </h3>
      <Link to="/contact">
        <button className="w-40 h-12 border-FAFAFA border hover:border-00aecb hover:text-00aecb transition-colors  duration-300 font-IBM">
          Contact me
        </button>
      </Link>
    </div>
  );
};

export default FooterContact;

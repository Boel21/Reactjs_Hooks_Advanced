import Hero from "./Hero";

const About = () => {
  return (
    <div>
      <Hero text="About Us" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              MarkAny Document Safer Warning! : The Contents copied from
              encrypted document can not be pasted to non-encrypted one!MarkAny
              Document Safer Warning! : The Contents copied from encrypted
              document can not be pasted to non-encrypted one!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

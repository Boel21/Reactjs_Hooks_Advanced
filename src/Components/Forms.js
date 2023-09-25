import React from "react";
import Hero from "./Hero";
import { Formik, Form, Field } from "formik";
import { signupSchema } from "../Schemas";

const initialValues = {
  name: "",
  email: "",
  password: "",
  cpassword: "",
};

const Forms = () => {
  const onSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <>
      <Hero text="Forms FORMIK - YUP" />
      <div className="app">
        <div className="container">
          <div className="row">
            <div className="col col-lg-4 col-md-3 col-12">
              <Formik
                initialValues={initialValues}
                validationSchema={signupSchema}
                onSubmit={onSubmit}
              >
                {({ errors, touched }) => (
                  <Form className="signup_form">
                    <label htmlFor="name">Name</label>
                    <Field type="text" name="name" />
                    <div className="error_container">
                      {errors.name && touched.name && (
                        <p className="form_error">{errors.name}</p>
                      )}
                    </div>

                    <label htmlFor="email">Email</label>
                    <Field type="email" name="email" />
                    <div className="error_container">
                      {errors.email && touched.email && (
                        <p className="form_error">{errors.email}</p>
                      )}
                    </div>

                    <label htmlFor="password">Password</label>
                    <Field type="password" name="password" />
                    <div className="error_container">
                      {errors.password && touched.password && (
                        <p className="form_error">{errors.password}</p>
                      )}
                    </div>

                    <label htmlFor="cpassword">Confirm Password</label>
                    <Field type="password" name="cpassword" />
                    <div className="error_container">
                      {errors.cpassword && touched.cpassword && (
                        <p className="form_error">{errors.cpassword}</p>
                      )}
                    </div>

                    <button className="btn btn-primary btn-lg" type="submit">
                      Submit
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forms;

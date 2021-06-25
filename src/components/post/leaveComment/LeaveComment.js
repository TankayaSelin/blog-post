import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import axios from 'axios';

const LeaveComment = (props) => {
  const validate = Yup.object({
    fullName: Yup.string().max(15, "Required").required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    website: Yup.string()
      .min(6, "Website is required.")
      .required("Website is required."),
    comment: Yup.string()
      .min(6, "Comment is required.")
      .required("Comment is required."),
  });
  return (
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        website: "",
        comment: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
        axios
        .post(
          "https://jsonplaceholder.typicode.com/comments?postId=" +
            props.params.id,{
              fullName: values.fullName,
              email: values.email,
              website: values.website,
              comment: values.comment
            }
        )
      .then(function (response) {
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
      }}
    >
      {(formik) => (
        <div className="mt-5 mb-4" style={{ background: "#fff" }}>
          <div className="row py-3">
            <div className="col-12">
              <div className="category-title mb-1">
                <h6
                  className="text-uppercase m-0 pb-2"
                  style={{ fontSize: "14px" }}
                >
                  leave a comment
                </h6>
              </div>
              <div className='mt-3'>
                <Form>
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <TextField
                        placeholder="Full Name"
                        name="fullName"
                        type="text"
                      />
                      <TextField
                        placeholder="Email Address"
                        name="email"
                        type="email"
                      />
                      <TextField
                        placeholder="Website"
                        name="website"
                        type="text"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <TextField
                        name="comment"
                        type="text"
                        style={{ height: "80px" }}
                      />
                      <button className="btn btn-dark mt-1 w-100" type="submit">
                        Register
                      </button>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default LeaveComment;

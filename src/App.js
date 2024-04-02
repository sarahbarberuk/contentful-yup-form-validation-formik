import "./App.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
// Display
const errorMessage = (message) => (
  <p class="validation-error-message">{message}</p>
);

const SignupForm = () => {
  return (
    <Formik
      initialValues={{
        userName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        dateOfBirth: "",
        phoneNumber: "",
        acceptTerms: false,
      }}
      validationSchema={Yup.object({
        userName: Yup.string()
          .min(6, "Must be minimum 6 characters")
          .max(20, "Must be maximum 20 characters")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .min(8, "Must be at least 8 characters")
          .required("Required"),
        passwordConfirmation: Yup.string()
          .oneOf([Yup.ref("password"), null], "Passwords must match")
          .required("Required"),
        dateOfBirth: Yup.date().required("Required"),
        phoneNumber: Yup.number()
          .typeError("Phone number must be a number")
          .required("Required"),
        acceptTerms: Yup.boolean(),
      })}
    >
      <Form>
        <label htmlFor="userName">Username: </label>
        <Field name="userName" type="text" />
        <ErrorMessage name="userName" render={errorMessage} />
        <br />

        <label htmlFor="email">Email Address: </label>
        <Field name="email" />
        <ErrorMessage name="email" render={errorMessage} />
        <br />

        <label htmlFor="password">Password: </label>
        <Field name="password" type="text" />
        <ErrorMessage name="password" render={errorMessage} />
        <br />

        <label htmlFor="passwordConfirmation">Password Confirmation: </label>
        <Field name="passwordConfirmation" type="text" />
        <ErrorMessage name="passwordConfirmation" render={errorMessage} />
        <br />

        <label htmlFor="dateOfBirth">Date of Birth: </label>
        <Field name="dateOfBirth" type="date" />
        <ErrorMessage name="dateOfBirth" render={errorMessage} />
        <br />

        <label htmlFor="phoneNumber">Phone Number: </label>
        <Field name="phoneNumber" type="text" />
        <ErrorMessage name="phoneNumber" render={errorMessage} />
        <br />

        <label htmlFor="acceptTerms">Accept Terms and Conditions: </label>
        <Field name="acceptTerms" type="checkbox" />
        <ErrorMessage name="acceptTerms" render={errorMessage} />
        <br />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

function App() {
  return <SignupForm />;
}

export default App;

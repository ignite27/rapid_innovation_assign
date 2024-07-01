import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

const initialValues = {
  name: '',
  email: '',
  address: '',
  dateOfBirth: '',
  bio: '',
  profileImage: null,
  bannerImage: null,
};

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  address: Yup.string().required('Required'),
  dateOfBirth: Yup.date().required('Required'),
  bio: Yup.string().required('Required'),
  profileImage: Yup.mixed().required('Required'),
  bannerImage: Yup.mixed().required('Required'),
});

const ContactUsForm = () => {
  const [submittedData, setSubmittedData] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    setSubmittedData(values);
    setShowPopup(true);
    setSubmitting(false);
    resetForm();
  };

  const closePopup = () => {
    setShowPopup(false);
    setSubmittedData(null);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ setFieldValue }) => (
          <FormContainer>
            <Form>
              <div>
                <label htmlFor="name">Name</label>
                <Field type="text" id="name" name="name" />
                <ErrorMessage name="name" component="div" className="error" />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <Field type="email" id="email" name="email" />
                <ErrorMessage name="email" component="div" className="error" />
              </div>

              <div>
                <label htmlFor="address">Address</label>
                <Field type="text" id="address" name="address" />
                <ErrorMessage name="address" component="div" className="error" />
              </div>

              <div>
                <label htmlFor="dateOfBirth">Date of Birth</label>
                <Field type="date" id="dateOfBirth" name="dateOfBirth" />
                <ErrorMessage name="dateOfBirth" component="div" className="error" />
              </div>

              <div>
                <label htmlFor="bio">Bio</label>
                <Field as="textarea" id="bio" name="bio" />
                <ErrorMessage name="bio" component="div" className="error" />
              </div>

              <div>
                <label htmlFor="profileImage">Profile Image</label>
                <input
                  type="file"
                  id="profileImage"
                  name="profileImage"
                  onChange={(event) => {
                    setFieldValue("profileImage", event.currentTarget.files[0]);
                  }}
                />
                <ErrorMessage name="profileImage" component="div" className="error" />
              </div>

              <div>
                <label htmlFor="bannerImage">Banner Image</label>
                <input
                  type="file"
                  id="bannerImage"
                  name="bannerImage"
                  onChange={(event) => {
                    setFieldValue("bannerImage", event.currentTarget.files[0]);
                  }}
                />
                <ErrorMessage name="bannerImage" component="div" className="error" />
              </div>

              <button type="submit">Submit</button>
            </Form>
          </FormContainer>
        )}
      </Formik>

      {showPopup && (
        <PopupContainer>
          <Popup>
            <h2>Submitted Data</h2>
            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Address:</strong> {submittedData.address}</p>
            <p><strong>Date of Birth:</strong> {submittedData.dateOfBirth}</p>
            <p><strong>Bio:</strong> {submittedData.bio}</p>
            <div>
              <strong>Profile Image:</strong><br />
              <img src={URL.createObjectURL(submittedData.profileImage)} alt="Profile" style={{ maxWidth: '100%', maxHeight: '200px' }} />
            </div>
            <div>
              <strong>Banner Image:</strong><br />
              <img src={URL.createObjectURL(submittedData.bannerImage)} alt="Banner" style={{ maxWidth: '100%', maxHeight: '200px' }} />
            </div>
            <button onClick={closePopup}>Close</button>
          </Popup>
        </PopupContainer>
      )}
    </>
  );
  
};

export default ContactUsForm;

const FormContainer = styled.div`
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(100,140,214,1) 47%, rgba(0,212,255,1) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  form {
    font-size: 2rem;
    padding: 2rem;
    margin-top: 5.5rem;
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    div {
      display: flex;
      flex-direction: column;

      label {
        margin-bottom: 0.5rem;
      }

      input, textarea {
        padding: 0.5rem;
        font-size: 1rem;
      }

      .error {
        color: red;
        font-size: 0.875rem;
      }
    }

    button {
      padding: 0.75rem;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 0.25rem;
      cursor: pointer;

      &:hover {
        background-color: #0056b3;
      }
    }
  }
`;

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Popup = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  max-width: 80%;
  width: 100%;
  max-height: 80%;
  overflow-y: auto;

  h2 {
    margin-top: 0;
  }

  p {
    margin-bottom: 0.5rem;
  }

  img {
    margin-top: 0.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

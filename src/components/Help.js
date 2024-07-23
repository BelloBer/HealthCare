// src/components/Help.js
import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faUserPlus, faCalendarAlt, faHospital, faQuestionCircle, faUserMd, faCog } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  padding: 2rem;
  background-color: ${(props) => props.theme.bodyBackgroundColor};
  border-radius: 8px;
  margin-top: 2rem;
`;

const SectionTitle = styled.h3`
  color: ${(props) => props.theme.primaryColor};
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: left;
  padding-top: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid ${(props) => props.theme.primaryColor};
`;

const HelpSection = styled.div`
  text-align: left;
  margin-bottom: 2rem;
`;

const HelpTitle = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.primaryColor};

  .icon{
    margin-right: 5px;
  }
`;

const HelpContent = styled.p`
  font-size: 1rem;
  margin: 0.5rem 0;
  color: ${(props) => props.theme.textColor};
`;

const Help = () => {
    return (
        <Container>
            <SectionTitle>Help</SectionTitle>

            <HelpSection>
                <HelpTitle><FontAwesomeIcon icon={faSignInAlt} className="icon" /> Logging In</HelpTitle>
                <HelpContent>
                    To log in, click on the 'Login' button on the homepage. Enter your registered email and password in the provided fields. If you encounter any issues, ensure that your credentials are correct or use the 'Forgot Password' option to reset your password.
                </HelpContent>
                <HelpContent>
                    <strong>Steps:</strong>
                    <ol>
                        <li>Click 'Login' on the homepage.</li>
                        <li>Enter your registered email address.</li>
                        <li>Enter your password.</li>
                        <li>Click the 'Login' button.</li>
                        <li>If you forgot your password, click on the 'Forgot Password?' link and follow the instructions to reset it.</li>
                    </ol>
                </HelpContent>
            </HelpSection>

            <HelpSection>
                <HelpTitle><FontAwesomeIcon icon={faUserPlus} className="icon" /> Registering</HelpTitle>
                <HelpContent>
                    To register, click on the 'Sign Up' link on the login page. Fill in your name, email, and password in the registration form. Once completed, click 'Register'. You will be redirected to the login page upon successful registration.
                </HelpContent>
                <HelpContent>
                    <strong>Steps:</strong>
                    <ol>
                        <li>Click 'Sign Up' on the login page.</li>
                        <li>Enter your full name.</li>
                        <li>Enter your email address.</li>
                        <li>Create a password.</li>
                        <li>Click the 'Register' button.</li>
                        <li>Check your email for a confirmation link and follow the instructions.</li>
                    </ol>
                </HelpContent>
            </HelpSection>

            <HelpSection>
                <HelpTitle><FontAwesomeIcon icon={faCalendarAlt} className="icon" /> Booking Appointments</HelpTitle>
                <HelpContent>
                    Navigate to the 'Appointments' section from the main menu. Select a doctor and an available time slot. Fill in the required details and confirm your appointment. You will receive a confirmation email once the appointment is booked successfully.
                </HelpContent>
                <HelpContent>
                    <strong>Steps:</strong>
                    <ol>
                        <li>Go to the 'Appointments' section from the main menu.</li>
                        <li>Select a doctor from the list.</li>
                        <li>Choose an available time slot.</li>
                        <li>Enter any required details such as reason for appointment.</li>
                        <li>Click 'Confirm Appointment'.</li>
                        <li>Check your email for a confirmation message.</li>
                    </ol>
                </HelpContent>
            </HelpSection>

            <HelpSection>
                <HelpTitle><FontAwesomeIcon icon={faHospital} className="icon" /> Hospitals and Doctors</HelpTitle>
                <HelpContent>
                    Our platform provides detailed information about hospitals and doctors. Navigate to the 'Hospitals' or 'Doctors' section from the main menu to view the list of hospitals and doctors, including their specializations, contact information, and availability.
                </HelpContent>
                <HelpContent>
                    <strong>Steps:</strong>
                    <ol>
                        <li>Go to the 'Hospitals' or 'Doctors' section from the main menu.</li>
                        <li>Browse the list of hospitals or doctors.</li>
                        <li>Click on a hospital or doctor to view detailed information including specializations, contact info, and availability.</li>
                    </ol>
                </HelpContent>
            </HelpSection>

            <HelpSection>
                <HelpTitle><FontAwesomeIcon icon={faUserMd} className="icon" /> Messaging Doctors</HelpTitle>
                <HelpContent>
                    You can message your doctor directly through the platform. Navigate to the 'Doctors' section, select a doctor, and click on the 'Message' button. Enter your message and send it. Your doctor will respond as soon as possible.
                </HelpContent>
                <HelpContent>
                    <strong>Steps:</strong>
                    <ol>
                        <li>Go to the 'Doctors' section from the main menu.</li>
                        <li>Select the doctor you want to message.</li>
                        <li>Click the 'Message' button next to the doctor's information.</li>
                        <li>Enter your message in the text box.</li>
                        <li>Click 'Send'.</li>
                        <li>Wait for a response from your doctor.</li>
                    </ol>
                </HelpContent>
            </HelpSection>

            <HelpSection>
                <HelpTitle><FontAwesomeIcon icon={faCog} className="icon" /> Account Settings</HelpTitle>
                <HelpContent>
                    You can update your account settings such as your profile information, in the 'Profile' section.
                </HelpContent>
                <HelpContent>
                    <strong>Steps:</strong>
                    <ol>
                        <li>Go to the 'Profile' section from the main menu.</li>
                        <li>Update your profile information such as name, email, and phone number.</li>
                        <li>Change your password by entering your current password and a new password.</li>
                        <li>Click 'Save Changes' to update your account settings.</li>
                    </ol>
                </HelpContent>
            </HelpSection>

            <HelpSection>
                <HelpTitle><FontAwesomeIcon icon={faQuestionCircle} className="icon" /> General Inquiries</HelpTitle>
                <HelpContent>
                    For general inquiries, please contact our support team via email at support@email.com or call us at (+266) 456-7890. We are here to assist you with any questions or concerns you may have.
                </HelpContent>
                <HelpContent>
                    <strong>Steps:</strong>
                    <ol>
                        <li>Email us at support@email.com with your query.</li>
                        <li>Call our support line at (+266) 456-7890.</li>
                        <li>Provide your user details and describe your issue clearly.</li>
                        <li>Our support team will get back to you within 24 hours.</li>
                    </ol>
                </HelpContent>
            </HelpSection>
        </Container>
    );
}

export default Help;

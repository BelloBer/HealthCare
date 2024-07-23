import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey,faSave} from "@fortawesome/free-solid-svg-icons";

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

const ProfileSection = styled.div`
  text-align: left;
  margin-bottom: 2rem;
`;


const ProfileTitle = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.primaryColor};
`;

const ProfileContent = styled.div`
  font-size: 1rem;
  margin: 0.5rem 0;
  color: ${(props) => props.theme.textColor};
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin: 0.5rem 0;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid ${(props) => props.theme.textColor};
  border-radius: 4px;
  background-color: ${(props) => props.theme.inputBackgroundColor};
  color: ${(props) => props.theme.textColor};
`;



const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.buttonTextColor};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
  display: flex;
  align-items: center;

  &:hover {
    background-color: ${(props) => props.theme.primaryColorHover};
  }

  .icon {
    margin-right: 5px;
  }
`;

const Profile = () => {

    const [profileInfo, setProfileInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      });
      const [password, setPassword] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    
      const handleProfileChange = (e) => {
        const { name, value } = e.target;
        setProfileInfo((prev) => ({
          ...prev,
          [name]: value,
        }));
      };
    
      const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPassword((prev) => ({
          ...prev,
          [name]: value,
        }));
      };
    
      
    
      const handleSaveProfile = () => {
        // Implement save profile functionality
        console.log("Profile saved:", profileInfo);
      };
    
      const handleSavePassword = () => {
        // Implement save password functionality
        if (password.newPassword !== password.confirmPassword) {
          alert("New password and confirm password do not match.");
          return;
        }
        console.log("Password changed:", password);
      };


    return(
        <Container>
            <SectionTitle>Profile</SectionTitle>

            <ProfileSection>
            <ProfileTitle><FontAwesomeIcon icon={faUser} className="icon" /> Profile Information</ProfileTitle>
            <ProfileContent>
            <Label htmlFor="firstName">Firstname</Label>
            <Input
                type="text"
                id="firstName"
                name="firstName"
                value={profileInfo.firstName}
                onChange={handleProfileChange}
            />
            <Label htmlFor="lastName">Lastname</Label>
            <Input
                type="text"
                id="lastName"
                name="lastName"
                value={profileInfo.lastName}
                onChange={handleProfileChange}
            />
            <Label htmlFor="email">Email</Label>
            <Input
                type="email"
                id="email"
                name="email"
                value={profileInfo.email}
                onChange={handleProfileChange}
            />
            <Label htmlFor="phone">Phone</Label>
            <Input
                type="tel"
                id="phone"
                name="phone"
                value={profileInfo.phone}
                onChange={handleProfileChange}
            />
            <Button onClick={handleSaveProfile}>
                <FontAwesomeIcon icon={faSave} className="icon" /> Save Profile
            </Button>
            </ProfileContent>
            </ProfileSection>

        <ProfileSection>
            <ProfileTitle><FontAwesomeIcon icon={faKey} className="icon" /> Change Password</ProfileTitle>
            <ProfileContent>
            <Label htmlFor="currentPassword">Current Password</Label>
            <Input
                type="password"
                id="currentPassword"
                name="currentPassword"
                value={password.currentPassword}
                onChange={handlePasswordChange}
            />
            <Label htmlFor="newPassword">New Password</Label>
            <Input
                type="password"
                id="newPassword"
                name="newPassword"
                value={password.newPassword}
                onChange={handlePasswordChange}
            />
            <Label htmlFor="confirmPassword">Confirm New Password</Label>
            <Input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={password.confirmPassword}
                onChange={handlePasswordChange}
            />
            <Button onClick={handleSavePassword}>
                <FontAwesomeIcon icon={faSave} className="icon" /> Change Password
            </Button>
            </ProfileContent>
        </ProfileSection>


        </Container>
    );
}

export default Profile;






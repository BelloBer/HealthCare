// src/components/Settings.js
/*
import React, { useState, useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey, faBell, faAdjust, faSave, faEnvelope, faPhone, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

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

const SettingsSection = styled.div`
  text-align: left;
  margin-bottom: 2rem;
`;

const SettingsTitle = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.primaryColor};
`;

const SettingsContent = styled.div`
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

const Select = styled.select`
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

const Settings = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  
  const [profileInfo, setProfileInfo] = useState({
    name: "",
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

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
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

  return (
    <Container>
      <SectionTitle>Settings</SectionTitle>

      <SettingsSection>
        <SettingsTitle><FontAwesomeIcon icon={faUser} className="icon" /> Profile Information</SettingsTitle>
        <SettingsContent>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={profileInfo.name}
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
        </SettingsContent>
      </SettingsSection>

      <SettingsSection>
        <SettingsTitle><FontAwesomeIcon icon={faKey} className="icon" /> Change Password</SettingsTitle>
        <SettingsContent>
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
        </SettingsContent>
      </SettingsSection>

      <SettingsSection>
        <SettingsTitle><FontAwesomeIcon icon={faBell} className="icon" /> Notification Preferences</SettingsTitle>
        <SettingsContent>
          <Label htmlFor="emailNotifications">Email Notifications</Label>
          <Select id="emailNotifications">
            <option value="enabled">Enabled</option>
            <option value="disabled">Disabled</option>
          </Select>
          <Label htmlFor="smsNotifications">SMS Notifications</Label>
          <Select id="smsNotifications">
            <option value="enabled">Enabled</option>
            <option value="disabled">Disabled</option>
          </Select>
          <Button>
            <FontAwesomeIcon icon={faSave} className="icon" /> Save Preferences
          </Button>
        </SettingsContent>
      </SettingsSection>

      <SettingsSection>
        <SettingsTitle><FontAwesomeIcon icon={faAdjust} className="icon" /> Theme Settings</SettingsTitle>
        <SettingsContent>
          <Label htmlFor="theme">Choose Theme</Label>
          <Select id="theme" value={theme} onChange={handleThemeChange}>
            <option value="default">Default</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </Select>
          <Button>
            <FontAwesomeIcon icon={faSave} className="icon" /> Save Theme
          </Button>
        </SettingsContent>
      </SettingsSection>

      <SettingsSection>
        <SettingsTitle><FontAwesomeIcon icon={faQuestionCircle} className="icon" /> Help and Support</SettingsTitle>
        <SettingsContent>
          <p>If you need assistance, please contact our support team:</p>
          <p><FontAwesomeIcon icon={faEnvelope} className="icon" /> Email: support@example.com</p>
          <p><FontAwesomeIcon icon={faPhone} className="icon" /> Phone: (123) 456-7890</p>
        </SettingsContent>
      </SettingsSection>
    </Container>
  );
};

export default Settings;
*/



// src/components/Settings.js
import React, { useState, useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey, faBell, faAdjust, faSave, faEnvelope, faPhone, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

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

const SettingsSection = styled.div`
  text-align: left;
  margin-bottom: 2rem;
  
`;

const SettingsTitle = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.primaryColor};
`;

const SettingsContent = styled.div`
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

const Select = styled.select`
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

const Settings = () => {
  
  
  

  return (
    <Container>
      <SectionTitle>Settings</SectionTitle>

      

      <SettingsSection>
        <SettingsTitle><FontAwesomeIcon icon={faBell} className="icon" /> Notification Preferences</SettingsTitle>
        <SettingsContent>
          <Label htmlFor="emailNotifications">Email Notifications</Label>
          <Select id="emailNotifications">
            <option value="enabled">Enabled</option>
            <option value="disabled">Disabled</option>
          </Select>
          <Label htmlFor="smsNotifications">SMS Notifications</Label>
          <Select id="smsNotifications">
            <option value="enabled">Enabled</option>
            <option value="disabled">Disabled</option>
          </Select>
          <Button>
            <FontAwesomeIcon icon={faSave} className="icon" /> Save Preferences
          </Button>
        </SettingsContent>
      </SettingsSection>

      
      

      <SettingsSection>
        <SettingsTitle><FontAwesomeIcon icon={faQuestionCircle} className="icon" /> Help and Support</SettingsTitle>
        <SettingsContent>
          <p>If you need assistance, please contact our support team:</p>
          <p><FontAwesomeIcon icon={faEnvelope} className="icon" /><a href="mailto:tebellolenyatsabernice@gmail.com">Email: Click Here</a></p>
          <p><FontAwesomeIcon icon={faPhone} className="icon" /><a href="tel:+26656425332">Call Us</a></p>
        </SettingsContent>
      </SettingsSection>
    </Container>
  );
};

export default Settings;

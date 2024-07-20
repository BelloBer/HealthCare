// src/components/Hospitals.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';

const Container = styled.div`
  padding: 2rem;
  text-align: center;
  background-color: ${(props) => props.theme.bodyBackgroundColor};
  border-radius: 8px;
  margin-top: 2rem;
`;

const SectionTitle = styled.h3`
  color: ${(props) => props.theme.primaryColor};
  font-size: 2rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid ${(props) => props.theme.primaryColor};
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  background-color: ${(props) => props.theme.primaryColor};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 1rem;

  &:hover {
    background-color: ${(props) => props.theme.secondaryColor};
  }
`;

const Filters = styled.div`
  display: ${(props) => (props.show ? 'flex' : 'none')};
  text-align: left;
  margin-top: 1rem;

`;

const FilterOption = styled.div`
  margin: 0.5rem 0.5rem;

  .selection{
    font-size: 0.9rem;
    border-radius:8px;
    padding: 5px;
    
  }
`;

const FilterLabel = styled.label`
  font-size: 1rem;
  font-weight: bold;
  margin-right: 1rem;
  color: ${(props) => props.theme.primaryColor};
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Card = styled.div`
  background: #415161;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  padding: 1rem;
  text-align: center;
  width: 250px;
  margin: 1rem;

  p{
    color: #111;
  }
`;

const HospitalImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const hospitals = [
  { name: 'Hospital A', location: 'Maseru', type: 'Private', service: 'Cancer care', image: '/hospital1.jpg' },
  { name: 'Hospital B', location: 'Berea', type: 'Public', service: 'Neurosciences', image: '/hospital2.jpg' },
  { name: 'Hospital C', location: 'Leribe', type: 'Private', service: 'Dentals', image: '/hospital3.jpg' },
  { name: 'Hospital D', location: 'Berea', type: 'Public', service: 'Neurosciences', image: '/hospital4.jpg' },
  { name: 'Hospital E', location: 'Leribe', type: 'Private', service: 'Dentals', image: '/house.jpg' },
];

const Hospitals = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    location: '',
    type: '',
    service: '',
  });

  const handleFilterClick = () => {
    setShowFilters(!showFilters);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const filteredHospitals = hospitals.filter((hospital) => {
    return (
      (!selectedFilters.location || hospital.location === selectedFilters.location) &&
      (!selectedFilters.type || hospital.type === selectedFilters.type) &&
      (!selectedFilters.service || hospital.service === selectedFilters.service)
    );
  });

  return (
    <Container>
    <SectionTitle>Discover Hospitals Near You</SectionTitle>
      <FilterButton onClick={handleFilterClick}>
        <FontAwesomeIcon icon={faFilter} /> Filter by
      </FilterButton>
      <Filters show={showFilters}>
        <FilterOption>
          <FilterLabel>Location:</FilterLabel>
          <select className='selection' name="location" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="Maseru">Maseru</option>
            <option value="Berea">Berea</option>
            <option value="Leribe">Leribe</option>
          </select>
        </FilterOption>
        <FilterOption>
          <FilterLabel>Type:</FilterLabel>
          <select className='selection' name="type" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="Private">Private</option>
            <option value="Public">Public</option>
          </select>
        </FilterOption>
        <FilterOption>
          <FilterLabel>Service:</FilterLabel>
          <select className='selection' name="service" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="Neurosciences">Neurosciences</option>
            <option value="Cancer care">Cancer care</option>
            <option value="Dentals">Dentals</option>
          </select>
        </FilterOption>
      </Filters>
      <CardContainer>
        {filteredHospitals.map((hospital, index) => (
          <Card key={index}>
            <h3>{hospital.name}</h3>
            <HospitalImage src={hospital.image} alt={hospital.name} />
            <p>Location: {hospital.location}</p>
            <p>Type: {hospital.type}</p>
            <p>Service: {hospital.service}</p>
            <Button>View</Button>
          </Card>
        ))}
      </CardContainer>
    </Container>
  );
};

export default Hospitals;

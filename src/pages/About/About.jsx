import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Heading = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  background-image: url('https://images.unsplash.com/photo-1585713181935-d5f622cc2415?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80');
  hight: 100%;
  width: 100%;
`;

const Subheading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ListItem = styled.li`
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const About = () => {
  return (
    <Container>
      <Heading>About Our Company</Heading>
      <Subheading>Overview</Subheading>
      <List>
        <ListItem>Truck</ListItem>
        <ListItem>Train</ListItem>
        <ListItem>Shipping</ListItem>
        <ListItem>Air</ListItem>
      </List>
      <Subheading>Our Services</Subheading>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Subheading>Vision</Subheading>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Subheading>Mission</Subheading>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Subheading>Why Choose Us</Subheading>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Subheading>Our Teams</Subheading>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Subheading>Our Partners</Subheading>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Container>
  );
};

export default About;

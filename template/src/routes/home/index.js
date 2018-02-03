import { h } from 'preact';
import styled from 'styled-components';

const Main = styled.main`
  padding: 56px 20px;
  min-height: 100%;
  width: 100%;
`;

const Home = () => (
  <Main>
    <h1>Home</h1>
    <p>This is the Home component.</p>
  </Main>
);


export default Home

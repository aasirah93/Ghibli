import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

it('retrieves data', () => {
  const fetchData = () => {fetch('https://ghibliapi.herokuapp.com/films')};
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

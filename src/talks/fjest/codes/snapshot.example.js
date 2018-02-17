import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../Button';

test('render correctly', () => {
  const btn = renderer.create(<Button />);
  expect(btn).toMatchSnapshot();
});

test('big button', () => {
  const bigBtn = renderer.create(<Button big />);
  expect(bigBtn).toMatchSnapshot();
});

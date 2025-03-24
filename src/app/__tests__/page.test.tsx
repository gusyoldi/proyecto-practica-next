import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import Page from '../page';

test('Page', async () => {
  render(await Page());
  expect(screen.getByText('Home')).toBeInTheDocument();
});

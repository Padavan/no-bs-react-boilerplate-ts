import React from 'react';
import { App } from './App.js';
import { render } from '@testing-library/react'
import { describe, it } from 'node:test';
import assert from 'node:assert';

describe("app", () => {
  it('should render', () => {

    const component = render(<App />);

    assert.equal(component.container, "str");
  })
})

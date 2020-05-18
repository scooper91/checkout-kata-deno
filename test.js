'use strict';
import { assertEquals } from 'https://deno.land/std@0.51.0/testing/asserts.ts';
import checkout from './checkout.js';

Deno.test('returns 0 for no items', () => {
  assertEquals(checkout(''), 0);
});

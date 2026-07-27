import { describe, expect, it } from 'vitest';
import { normalizeRussianPhone, validateRussianPhone } from './phone.utils';

describe('phone utils', () => {
  it('normalizes a Russian number without showing a visible mask', () => {
    expect(normalizeRussianPhone('79991234567')).toBe('79991234567');
    expect(normalizeRussianPhone('89161234567')).toBe('89161234567');
  });

  it('accepts valid Russian numbers and rejects invalid ones', () => {
    expect(validateRussianPhone('+7 (999) 123-45-67')).toBe(true);
    expect(validateRussianPhone('89991234567')).toBe(true);
    expect(validateRussianPhone('12345')).toBe(false);
    expect(validateRussianPhone('+1 234 567 8900')).toBe(false);
  });
});

export function normalizeRussianPhone(value: string): string {
  const digits = (value ?? '').replace(/\D/g, '').slice(0, 11);

  if (!digits) {
    return '';
  }

  if (digits.startsWith('8')) {
    return digits.slice(0, 11);
  }

  if (digits.startsWith('7')) {
    return digits.slice(0, 11);
  }

  return digits;
}

export function validateRussianPhone(value: string): boolean {
  const digits = (value ?? '').replace(/\D/g, '');
  return /^8\d{10}$/.test(digits) || /^7\d{10}$/.test(digits);
}

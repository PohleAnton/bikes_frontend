import { defineRule } from 'vee-validate';
import { email, required, min, max } from '@vee-validate/rules';

defineRule('email', (value) => {
  if (email(value) && required(value)) {
    return true;
  }

  return 'A valid email address is required';
});

defineRule('password', (value) => {
  if (
    required(value) &&
    min(value, { length: 3 }) &&
    max(value, { length: 30 })
  ) {
    return true;
  }

  return 'Passwort muss zwischen 3 und 30 Zeichen lang sein';
});

defineRule('confirmPassword', (value, [target], ctx) => {
  if (required(value) && value === ctx.form[target]) {
    return true;
  }

  return 'Passwörter stimmen nicht überein';
});

defineRule('name', (value) => {
  return max(value, { length: 60 })
    ? true
    : 'Name may not exceed 60 characters';
});

// use regex patter for URL
defineRule('url', (value) => {
  const pattern = new RegExp(
    '^(https?:\\/\\/)' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$',
    'i'
  );

  return pattern.test(value) || value.length === 0
    ? true
    : 'Website must be a valid URL';
});

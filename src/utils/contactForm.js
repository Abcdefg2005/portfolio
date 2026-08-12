const LIMITS = {
  name: { min: 2, max: 100 },
  email: { max: 254 },
  message: { min: 10, max: 2000 },
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Strip control characters and trim whitespace. */
export function sanitizeField(value) {
  if (typeof value !== 'string') return '';
  return value.trim().replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '');
}

/**
 * Client-side validation before submission.
 * Returns { valid: true, data } or { valid: false, error }.
 */
export function validateContactForm({ name, email, message, botcheck }) {
  if (sanitizeField(botcheck)) {
    return { valid: false, error: 'Unable to send message. Please try again.' };
  }

  const cleanName = sanitizeField(name);
  const cleanEmail = sanitizeField(email);
  const cleanMessage = sanitizeField(message);

  if (cleanName.length < LIMITS.name.min || cleanName.length > LIMITS.name.max) {
    return { valid: false, error: `Name must be between ${LIMITS.name.min} and ${LIMITS.name.max} characters.` };
  }

  if (!cleanEmail || cleanEmail.length > LIMITS.email.max || !EMAIL_REGEX.test(cleanEmail)) {
    return { valid: false, error: 'Please enter a valid email address.' };
  }

  if (cleanMessage.length < LIMITS.message.min || cleanMessage.length > LIMITS.message.max) {
    return {
      valid: false,
      error: `Message must be between ${LIMITS.message.min} and ${LIMITS.message.max} characters.`,
    };
  }

  return {
    valid: true,
    data: { name: cleanName, email: cleanEmail, message: cleanMessage },
  };
}

/** Submit contact form via Web3Forms API. */
export async function submitContactForm({ name, email, message }) {
  const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

  if (!accessKey) {
    throw new Error('Contact form is not configured. Please email directly instead.');
  }

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: accessKey,
      name,
      email,
      message,
      subject: `Portfolio Contact from ${name}`,
      from_name: 'Kevin Portfolio',
      botcheck: '',
    }),
  });

  let data;
  try {
    data = await response.json();
  } catch {
    throw new Error('Unexpected response from the server. Please try again.');
  }

  if (!response.ok || !data.success) {
    throw new Error(data.message || 'Failed to send message. Please try again.');
  }

  return data;
}

/**
 * Returns error message if value does not exist, otherwise returns
 * undefined
 * @param {String} value - Email to validate
 * @example Required Field
 * <Field
 *   name="password"
 *   component={TextField}
 *   label="Password"
 *   type="password"
 *   validate={required}
 * />
 */
export function required(value) {
  return value ? undefined : '필수 입력입니다.'
}

/**
 * Returns error message if value is not a valid email, otherwise returns
 * undefined
 * @param {String} value - Email to validate
 * @example Basic
 * <Field
 *   name="email"
 *   component={TextField}
 *   label="Email"
 *   validate={validateEmail}
 * />
 */
export function validateEmail(value) {
  return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? '이메일 형식이 맞지않습니다.'
    : undefined
}

export const PASSWORD_RULE_IDS = ["length", "upper", "lower", "number", "allowedChars"] as const;

export type PasswordRuleId = (typeof PASSWORD_RULE_IDS)[number];

export type PasswordRuleChecks = Record<PasswordRuleId, boolean>;

export function checkPasswordRules(password: string): PasswordRuleChecks {
  return {
    length: password.length >= 6 && password.length <= 20,
    upper: /[A-Z]/.test(password),
    lower: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    allowedChars: password.length === 0 || /^[A-Za-z0-9!@#$%*]+$/.test(password),
  };
}

export function allPasswordRulesMet(checks: PasswordRuleChecks): boolean {
  return PASSWORD_RULE_IDS.every((id) => checks[id]);
}

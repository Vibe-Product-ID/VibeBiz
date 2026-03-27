type ClassValue =
  | string
  | number
  | null
  | undefined
  | false
  | ClassDictionary
  | ClassArray;

type ClassDictionary = Record<string, boolean | undefined | null>;
type ClassArray = ClassValue[];

function toClassString(input: ClassValue): string {
  if (!input) {
    return '';
  }

  if (typeof input === 'string' || typeof input === 'number') {
    return String(input);
  }

  if (Array.isArray(input)) {
    return input.map(toClassString).filter(Boolean).join(' ');
  }

  return Object.keys(input)
    .filter((key) => Boolean(input[key]))
    .join(' ');
}

export function cn(...inputs: ClassValue[]) {
  return inputs.map(toClassString).filter(Boolean).join(' ');
}

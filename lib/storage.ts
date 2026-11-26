export const PRODUCT_KEY = "apb:produkt";
export const checklistKey = (slug: string) => `apb:checklista:${slug}`;
export const CHANGE_EVENT = "apb:change";

export function read<T>(key: string, fallback: T): T {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function write(key: string, value: unknown) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    window.dispatchEvent(new Event(CHANGE_EVENT));
  } catch {
    /* lagring blockerad: sidan fungerar ändå */
  }
}

export function remove(key: string) {
  try {
    window.localStorage.removeItem(key);
  } catch {
    /* ignorera */
  }
}

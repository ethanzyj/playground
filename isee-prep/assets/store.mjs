// localStorage wrapper. Every key is prefixed with "isee-", reads never throw,
// and a failed write is remembered so the UI can warn instead of silently losing data.

const PREFIX = "isee-";

export function createStore(storage = globalThis.localStorage) {
  let writeFailed = false;
  return {
    read(key, fallback) {
      try {
        const raw = storage.getItem(PREFIX + key);
        return raw === null ? fallback : JSON.parse(raw);
      } catch (error) {
        console.error(`Unable to read saved "${key}".`, error);
        return fallback;
      }
    },
    readText(key, fallback = null) {
      try {
        const raw = storage.getItem(PREFIX + key);
        return raw === null ? fallback : raw;
      } catch (error) {
        console.error(`Unable to read saved "${key}".`, error);
        return fallback;
      }
    },
    write(key, value) {
      try {
        storage.setItem(PREFIX + key, JSON.stringify(value));
        return true;
      } catch (error) {
        console.error(`Unable to save "${key}".`, error);
        writeFailed = true;
        return false;
      }
    },
    writeText(key, value) {
      try {
        storage.setItem(PREFIX + key, value);
        return true;
      } catch (error) {
        console.error(`Unable to save "${key}".`, error);
        writeFailed = true;
        return false;
      }
    },
    remove(key) {
      try {
        storage.removeItem(PREFIX + key);
      } catch (error) {
        console.error(`Unable to remove "${key}".`, error);
      }
    },
    get failed() {
      return writeFailed;
    }
  };
}

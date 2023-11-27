/**
 * Модуль инициализации env-переменных
 * @remark Если не найдено значение хоть одной переменной,
 * Приложение сразу выбросит ошибку, при инициализации модуля
 * @module
 */

/**
 * Получение env-переменной
 * @throwable
 */
const getEnvVar = (key: string) => {
  if (import.meta.env[key] === undefined) {
    throw new Error(`Env variable '${key}' is required`);
  }
  return import.meta.env[key] || '';
};

/** API entrypoint */
export const API_URL = getEnvVar('VITE_BASE_URL');

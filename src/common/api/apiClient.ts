const BASE_URL = import.meta.env.VITE_API_URL || "";

export const ApiError = {
  Network: "ERR_NETWORK",
  Server: "ERR_SERVER",
  Unknown: "ERR_UNKNOWN",
} as const;

export type ApiErrorType = (typeof ApiError)[keyof typeof ApiError];

export const apiClient = {
  /**
   * Універсальний POST запит
   * @template T - Тип даних від сервера
   * @template D - Тип даних, що відправляються
   */
  async post<T, D = Record<string, unknown>>(
    endpoint: string,
    data: D,
  ): Promise<T> {
    try {
      const response = await fetch(`${BASE_URL}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));

        throw new Error(
          errorData.message || `${ApiError.Server}_${response.status}`,
        );
      }

      return response.json() as Promise<T>;
    } catch (error) {
      // Обробка відсутності інтернету або "лежачого" сервера
      if (error instanceof TypeError && error.message === "Failed to fetch") {
        throw new Error(ApiError.Network);
      }
      throw error instanceof Error ? error : new Error(ApiError.Unknown);
    }
  },

  /**
   * Універсальний GET запит
   * @template T - Тип даних, які ми очікуємо отримати
   */
  async get<T>(endpoint: string): Promise<T> {
    try {
      const response = await fetch(`${BASE_URL}${endpoint}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.message || `${ApiError.Server}_${response.status}`,
        );
      }

      return response.json() as Promise<T>;
    } catch (error) {
      if (error instanceof TypeError && error.message === "Failed to fetch") {
        throw new Error(ApiError.Network);
      }
      throw error instanceof Error ? error : new Error(ApiError.Unknown);
    }
  },
};

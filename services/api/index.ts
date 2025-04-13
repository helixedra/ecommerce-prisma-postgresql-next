interface ApiResponse<T> {
  data: T;
  error?: string;
}
const addRevalidateOption = (options: RequestInit): RequestInit => {
  return {
    ...options,
    next: { revalidate: 60 * 60 },
  };
};
const api = async <T>(
  url: string,
  options: RequestInit,
  caches?: boolean
): Promise<ApiResponse<T>> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/${url}`,
      addRevalidateOption(options)
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return { data, error: undefined };
  } catch (error) {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
};

export default api;

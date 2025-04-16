interface ApiResponse<T> {
  status: number;
  data: T;
  error?: string;
}
const addRevalidateOption = (options: RequestInit): RequestInit => {
  return {
    ...options,
    next: { revalidate: 60 * 60 },
    headers: {
      "Content-Type": "application/json",
    },
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
    return { status: response.status, data };
  } catch (error) {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
};

export default api;

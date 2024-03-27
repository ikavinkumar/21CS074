export const getProductById = async (productId) => {
    try {
      const response = await fetch(`/api/products/${productId}`); // Assuming your backend API endpoint for fetching product details by ID is /api/products/:productId
      if (!response.ok) {
        throw new Error('Failed to fetch product details');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  
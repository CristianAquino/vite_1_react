export const types = {
  getAllProducts: "getAllProducts",
  deleteProduct: "deleteProduct",
  refresh: "refresh",
};
export const initialUser = {
  user: { id: 1, name: "Cristian" },
  products: [
    { id: 1, name: "Naranja" },
    { id: 2, name: "Manzana" },
  ],
};

export const storeReducer = (state, action) => {
  switch (action.type) {
    case types.getAllProducts:
      return {
        ...state,
        products: [
          { id: 1, name: "Naranja" },
          { id: 2, name: "Manzana" },
        ],
      };
    case types.deleteProduct:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id != action.payload
        ),
      };
    case types.refresh:
      return initialUser;
    default:
      return state;
  }
};

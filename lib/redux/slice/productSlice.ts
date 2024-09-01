import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ProductState = {
  products: [],
  selectedProduct: null,
  isProductVisible: false,
  filter: {
    category: "",
    priceRange: [0, 1000],
  },
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductIsVisible(state, { payload }: PayloadAction<boolean>) {
      state.isProductVisible = payload;
    },
    setProduct(state: ProductState, { payload }: PayloadAction<Product[]>) {
      state.products = payload;
    },

    setSelectedProduct(
      state: ProductState,
      { payload }: PayloadAction<Product | null>,
    ) {
      state.selectedProduct = payload;
    },

    setFilter(
      state: ProductState,
      { payload }: PayloadAction<{ type: string; value: string | number[] }>,
    ) {
      let price = state.filter.priceRange;
      if (payload.type === "priceRange") {
      }
      state.filter[payload.type] = payload.value;
    },
  },
});

export const {
  setFilter,
  setProduct,
  setProductIsVisible,
  setSelectedProduct,
} = productSlice.actions;
export default productSlice.reducer;

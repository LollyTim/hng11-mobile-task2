import axios from 'axios';
import { create } from 'zustand';

interface Photo {
  url: string;
  // other properties of photo if any
}
interface Price {
  NGN: number;
  // other properties of photo if any
}

interface Product {
  id: string; // id is a string
  name: string;
  price: string | number;
  description: string;
  photos?: Photo[];
  is_available: boolean;
  selling_price: string;
  current_price?: Price[];
}

interface State {
  products: Product[];
  loading: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
}

const useStore = create<State>((set) => ({
  products: [],
  loading: true,
  error: null,
  fetchProducts: async () => {
    try {
      const response = await axios.get('https://api.timbu.cloud/products', {
        params: {
          organization_id: 'ccfa70ea38384767ac43639a6d0b6f4b',
          reverse_sort: false,
          page: 1,
          size: 10,
          Appid: 'IT9I7YZW1J9UAJD',
          Apikey: '34437e7c23a8452d9468fa6749b044cd20240705173142337285',
        },
      });
      //   console.warn(response.data);
      set({ products: response.data.items, loading: false });
    } catch (e: any) {
      set({ error: e.message, loading: false });
    }
  },
}));

export default useStore;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Bill } from '../../types';
import { parliamentService } from '../../services/parliamentService';
import { handleApiError } from '../../services/api';

interface ParliamentState {
  bills: Bill[];
  activeBills: Bill[];
  recentBills: Bill[];
  currentBill: Bill | null;
  isLoading: boolean;
  error: string | null;
  pagination: {
    count: number;
    next?: string;
    previous?: string;
  } | null;
}

const initialState: ParliamentState = {
  bills: [],
  activeBills: [],
  recentBills: [],
  currentBill: null,
  isLoading: false,
  error: null,
  pagination: null,
};

// Actions asynchrones
export const fetchBills = createAsyncThunk(
  'parliament/fetchBills',
  async (params?: {
    page?: number;
    status?: string;
    category?: string;
    search?: string;
  }, { rejectWithValue }) => {
    try {
      const response = await parliamentService.getBills(params);
      return response;
    } catch (error: any) {
      return rejectWithValue(handleApiError(error));
    }
  }
);

export const fetchActiveBills = createAsyncThunk(
  'parliament/fetchActiveBills',
  async (_, { rejectWithValue }) => {
    try {
      const bills = await parliamentService.getActiveBills();
      return bills;
    } catch (error: any) {
      return rejectWithValue(handleApiError(error));
    }
  }
);

export const fetchRecentBills = createAsyncThunk(
  'parliament/fetchRecentBills',
  async (_, { rejectWithValue }) => {
    try {
      const bills = await parliamentService.getRecentBills();
      return bills;
    } catch (error: any) {
      return rejectWithValue(handleApiError(error));
    }
  }
);

export const fetchBillDetail = createAsyncThunk(
  'parliament/fetchBillDetail',
  async (billId: number, { rejectWithValue }) => {
    try {
      const bill = await parliamentService.getBillDetail(billId);
      return bill;
    } catch (error: any) {
      return rejectWithValue(handleApiError(error));
    }
  }
);

const parliamentSlice = createSlice({
  name: 'parliament',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearCurrentBill: (state) => {
      state.currentBill = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch bills
      .addCase(fetchBills.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBills.fulfilled, (state, action) => {
        state.isLoading = false;
        state.bills = action.payload.results;
        state.pagination = {
          count: action.payload.count,
          next: action.payload.next,
          previous: action.payload.previous,
        };
      })
      .addCase(fetchBills.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      // Fetch active bills
      .addCase(fetchActiveBills.fulfilled, (state, action) => {
        state.activeBills = action.payload;
      })
      // Fetch recent bills
      .addCase(fetchRecentBills.fulfilled, (state, action) => {
        state.recentBills = action.payload;
      })
      // Fetch bill detail
      .addCase(fetchBillDetail.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBillDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentBill = action.payload;
      })
      .addCase(fetchBillDetail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearError, clearCurrentBill } = parliamentSlice.actions;
export default parliamentSlice.reducer;

import api, { PaginatedResponse } from './api';
import { Bill } from '../types';

class ParliamentService {
  async getBills(params?: {
    page?: number;
    status?: string;
    category?: string;
    search?: string;
  }): Promise<PaginatedResponse<Bill>> {
    const response = await api.get<PaginatedResponse<Bill>>('/parliament/bills/', {
      params,
    });
    return response.data;
  }

  async getBillDetail(billId: number): Promise<Bill> {
    const response = await api.get<Bill>(`/parliament/bills/${billId}/`);
    return response.data;
  }

  async getActiveBills(): Promise<Bill[]> {
    const response = await api.get<Bill[]>('/parliament/bills/active/');
    return response.data;
  }

  async getRecentBills(): Promise<Bill[]> {
    const response = await api.get<Bill[]>('/parliament/bills/recent/');
    return response.data;
  }

  async searchBills(query: string): Promise<PaginatedResponse<Bill>> {
    const response = await api.get<PaginatedResponse<Bill>>('/parliament/bills/', {
      params: { search: query },
    });
    return response.data;
  }

  async getBillsByCategory(category: string): Promise<PaginatedResponse<Bill>> {
    const response = await api.get<PaginatedResponse<Bill>>('/parliament/bills/', {
      params: { category },
    });
    return response.data;
  }

  async getBillsByStatus(status: string): Promise<PaginatedResponse<Bill>> {
    const response = await api.get<PaginatedResponse<Bill>>('/parliament/bills/', {
      params: { status },
    });
    return response.data;
  }
}

export const parliamentService = new ParliamentService();

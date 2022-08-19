
import axios from "axios";
import { createAsyncThunk, AsyncThunk } from '@reduxjs/toolkit';

export interface IPage {
  page?: number;
  value: string;
}

export const getData = createAsyncThunk(
  'slice/infoApi', 
  async ( page: IPage ) => {
    try {
      const res = await axios({
        method: 'get',
        url: `https://hn.algolia.com/api/v1/search_by_date?query=${page.value}&page=${page.page}&hitsPerPage=15`,
      });
      return res;
    } catch (err: any) {
      return err;
    }
  }
);
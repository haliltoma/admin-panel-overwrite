import { createAsyncThunk } from '@reduxjs/toolkit';
import AxiosInstance from '../../axios/base.service';
import { cookies } from 'next/headers';

export const authThunk = createAsyncThunk('auth', async () => {
    const token = 'exampleToken';
    const response = await AxiosInstance({ token }).get('/auth');
    return 'auth';
});

import Cookies from 'js-cookie';
import axios from 'axios';
import type { AxiosInstanceType } from './base.type';

const cleartoken = () => {
    Cookies.remove('token');
};

const AxiosInstance = ({ headers, data, baseURL, token }: AxiosInstanceType): any => {
    const defaultToken = Cookies.get('token');
    const instance = axios.create({
        baseURL: baseURL || 'https://api.laserkopf.com',
        headers: headers || {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token ? token : defaultToken}`
        },
        data: data || {}
    });
    instance.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response) {
                if (error.response.status === 401) {
                    console.log('İzinsiz istek');
                    cleartoken();
                } else if (error.response.status === 404) {
                    // Kaynak bulunamadı hatası
                    console.log('Kaynak bulunamadı');
                } else {
                    console.log('Hata', error.response.status);
                }
            } else if (error.request) {
                console.log('Request error:', error.request);
            } else {
                console.log('Error:', error.message);
            }
            return Promise.reject(error);
        }
    );
};

export default AxiosInstance;

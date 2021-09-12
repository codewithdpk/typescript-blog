import API from './index';

export const getAllBlogs = async () => {
    return await API.get(`/everything`);
};
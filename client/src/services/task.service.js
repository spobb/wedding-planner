import { fetchService } from "./fetch.service";
import storageService from "./storage.service";

export const getAllTasks = async (id = '') => {
    const token = storageService.get('wedding-user').token;
    const response = await fetchService(`/weddings/${id}/tasks`, 'GET', null, token);
    return await response;
}
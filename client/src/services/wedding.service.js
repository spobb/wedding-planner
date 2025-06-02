import { fetchService } from "./fetch.service";

export const getAllWeddings = async () => {
    const response = await fetchService(`/weddings`, 'GET');
    return response;
}
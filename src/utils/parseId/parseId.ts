import { ParseId } from './types';

export const parseId: ParseId = (paramId) => {
    const id = parseInt(paramId, 10);
    return isNaN(id) ? null : id;
}
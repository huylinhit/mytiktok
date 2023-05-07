
import * as request from '~/utils/httpRequest';
export const search = async (q, type = 'less') => {
    try {
        const res = await request.get('users/search', {
            params: {
                q: encodeURIComponent(q.trim()),
                type: 'less',
            },
        });
        return res.data;
    } catch(error) {
        console.log(error);
    }
};

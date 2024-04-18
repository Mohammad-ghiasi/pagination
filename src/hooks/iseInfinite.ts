import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useInfinit = (Url: string) => {
    const { data, isPending, hasNextPage, hasPreviousPage, fetchNextPage, fetchPreviousPage, isFetchingNextPage } = useInfiniteQuery({
        queryKey: ['infinit'],
        initialPageParam: 1,
        queryFn: async function ({ pageParam }: { pageParam: number }) {
            let url: string = Url;
            const result = await axios.get(url);
            return result.data;
        },
        getNextPageParam: function (lastPage, allPages, lastPageParam, allPageParams) {
            if (lastPage.next) {
                return lastPageParam + 1;
            } else {
                return null;
            }
        },
        select(result) {
            return result.pages.flatMap((page) => page.results);
        },
        
    });

    return { data, isPending, hasNextPage, hasPreviousPage, fetchNextPage, fetchPreviousPage, isFetchingNextPage };
};

import type { PageLoad } from './$types';

export const load: PageLoad = async ({fetch, params}) => {
    const id = params.id;
    // Todo: replace this later with what we actually want
    const url = `https://dummyjson.com/products/${id}`
    const res = await fetch(url)
    const issue = await res.json();

    if (res.ok) {
        return {issue}
    }
    return {
        status:res.status,
        error: new Error(`Could not retrieve issue ${id}`)
    }
}

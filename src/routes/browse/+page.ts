import type { PageLoad } from './$types';

export const load: PageLoad = async ({fetch, params}) => {
    // Todo: replace this later with the endpoint to get some issues
    console.log("Inside 'load'")
    const url = `https://dummyjson.com/products`;
    const res = await fetch(url);
    const data = await res.json();
    console.log("Got data: ", data)
    const issues = data.products
    console.log(data.products)

    if (res.ok) {
        console.log("All good to go...")
        return {issues};
    }
    console.log("Meh, had an error. Why?")
    return {
        status: res.status,
        error: new Error(`Could not retrieve issue`)
    };
}

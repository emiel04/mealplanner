export async function load() {
    const usersRes = await fetch('https://jsonplaceholder.typicode.com/users');
    const usersData = await usersRes.json();

    if(usersRes.ok){
        return {
            users: usersData
        };
    }
    return {
        status: usersRes.status,
        error: new Error('Could not fetch the users!')
    }


}
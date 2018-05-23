export async function authUser() {
    const token = localStorage.getItem('token');
    if (!token) {
        return false;
    }
    return true;
}
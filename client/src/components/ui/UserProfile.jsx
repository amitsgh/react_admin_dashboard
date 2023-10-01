import useApi from 'api';

const UserView = () => {
    const api = useApi();
    const userId = import.meta.env.VITE_USER_ID;

    const { data: user, isLoading, isError } = api.getUser(userId);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching user data</div>;
    }

    return (
        <div>
            <h1>User Profile</h1>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>City: {user.city}</p>
            <p>State: {user.state}</p>
            <p>Country: {user.country}</p>
            <p>Occupation: {user.occupation}</p>
            <p>Phone Number: {user.phoneNumber}</p>
            <p>Role: {user.role}</p>
        </div>
    );
};

export default UserView;

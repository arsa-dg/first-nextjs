import fetch from "isomorphic-unfetch"

function Users(props)
{
    return <div>
        <h1>fetch users data from API</h1>
{
    props.data.map(data=>(
        <div>
            <p>{data.name}</p>
            <p>{data.username}</p>
            <p>{data.email}</p>
            <p>{data.phone}</p>
            <p>{data.website}</p>
            <br />
        </div>
    ))
}
    </div>
}

Users.getInitialProps=async function()
{
    const res = await fetch('http://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return {
        data
    }
}

export default Users;
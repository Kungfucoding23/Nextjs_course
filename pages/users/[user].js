import {useRouter} from 'next/router';

export default function user1() {
    const router = useRouter();
    console.log(router);
    return (
        <div>
            <h2>User Details</h2>
            <p>User ID: {router.query.user}</p>
        </div>
    )
}

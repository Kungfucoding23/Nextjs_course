import {useRouter} from 'next/router';
import Layout from '../../components/layout';

export default function user1() {
    const router = useRouter();
    console.log(router);
    return (
        <Layout>            
            <h2>User Details</h2>
            <p>User ID: {router.query.id}</p>
        </Layout>
    )
}

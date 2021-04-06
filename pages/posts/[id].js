import { useRouter } from 'next/router';
import Layout from '../../components/layout';

export default function post1() {
    const router = useRouter();    
    return (
        <Layout>            
            <h2>Post Details</h2>            
            <p>User ID: {router.query.id}</p>
        </Layout>
    )
}

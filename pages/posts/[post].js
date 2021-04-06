import { useRouter } from "next/router"

export default function post1() {
    const router = useRouter();    
    return (
        <div>
            <h2>Post Details</h2>            
            <p>User ID: {router.query.post}</p>
        </div>
    )
}

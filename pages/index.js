import Layout from '../components/layout';
import Title from '../components/title';

export default function Home(){
    return (
        <Layout>
            <Title>Home Page</Title>
            <hr />
            <p>Aprendiendo NextJS con Webtutoriales</p>
            <style>
                {`
                    p {
                        color: darkgrey;
                    }
                    p:hover {
                        color: darkred;
                    }
                `}    
            </style>    
        </Layout>
    )
}
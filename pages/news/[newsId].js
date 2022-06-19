import { useRouter } from 'next/router';

function DetailPage() {
    const router = useRouter();
    const {newsId} = router.query;
    return (
        <>
            <h1>Hello from Detail Page</h1>
        </>
    );
}

export default DetailPage;
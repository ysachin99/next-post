import EditPostForm from "@/components/EditPostForm";

const getTopicById = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
            cache: "no-store"
        })

        if(!res.ok) {
            throw new Error('failed to fetch posts');
        }

        return res.json();
        
    } catch (error) {
        console.log(error);
    }
}

export default async function getServerSideProps({ params }) {
    const { id } = params;
    const { post } = await getTopicById(id);
    const { title, description, imageUrl } = post;

    return <EditPostForm id={id} title={title} description={description} />
}

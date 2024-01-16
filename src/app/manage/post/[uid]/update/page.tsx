const page = async ({ params }: { params: { uid: string } }) => {
    return <div className="flex h-screen items-center justify-center">{`${params.uid}`}</div>;
};

export default page;

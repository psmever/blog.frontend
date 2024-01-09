export default function Page({ params }: { params: { uid: string } }) {
    return <div className="flex w-full h-screen justify-center items-center">{params.uid}</div>;
}

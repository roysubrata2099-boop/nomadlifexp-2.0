interface YouTubeShortProps {
    id: string;
    title?: string;
}

export default function YouTubeShort({
    id,
    title = "YouTube Short",
}: YouTubeShortProps) {
    return (
        <div className="my-8 flex justify-center">
            <div className="relative aspect-[9/16] w-full max-w-[400px] overflow-hidden rounded-xl bg-black shadow-lg">
                <iframe
                    src={`https://www.youtube.com/embed/${id}`}
                    title={title}
                    className="absolute inset-0 h-full w-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </div>
        </div>
    );
}

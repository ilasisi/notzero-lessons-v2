export function Avatar({ name, width = 100, height = 100, imageId }) {
    return (
        <div>
            <img
                className="rounded-full"
                src={`https://i.imgur.com/${imageId}.jpg`}
                alt={name}
                width={width}
                height={height}
            />
        </div>
    );
}

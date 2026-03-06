export const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-NG", {
        month: "short",
        day: "2-digit",
        year: "numeric",
    });
};

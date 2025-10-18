// components/ui/Shimmer.js
export const Shimmer = ({ className }) => (
    <div
        className={`animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] ${className}`}
    />
);

/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: () => {
        return [
            {
                source: "/",
                destination: "/home",
            },
            {
                source: "/imc-calculo",
                destination: "/imc",
            }, 
            {
                source: "/media-calculo",
                destination:"/media"
            },
        ]
    }
};

export default nextConfig;

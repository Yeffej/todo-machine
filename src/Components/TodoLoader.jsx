import ContentLoader from "react-content-loader";


const TodoLoader = () => (
    <ContentLoader 
        speed={2}
        viewBox="0 0 500 260"
        backgroundColor="#f3f3f3"
        foregroundColor="#999999"
    >
        <circle cx="10" cy="30" r="10" />
        <rect x="40" y="35" rx="3" ry="3" width="420" height="6" /> 
        <rect x="40" y="22" rx="3" ry="3" width="420" height="6" />
        <circle cx="490" cy="30" r="10" />
    </ContentLoader>
)
    
export { TodoLoader }
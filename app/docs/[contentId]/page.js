import ContentDisplay from "@/components/ContentDisplay";

const Contentpage = ({ params: { contentId } }) => {
    return <ContentDisplay id={contentId} />;
};

export default Contentpage;

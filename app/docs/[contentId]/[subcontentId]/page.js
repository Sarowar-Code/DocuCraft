import ContentDisplay from "@/components/ContentDisplay";

const SubContentpage = ({ params: { subcontentId } }) => {
    return <ContentDisplay id={subcontentId} />;
};

export default SubContentpage;

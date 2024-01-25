const SubHeading = ({ title, subTitle }) => {
    return ( 
        <>
            <div className="vertical-line"></div>
            <h3 className="title">{title}</h3>
            <h1 className="sub-title">{subTitle}</h1>
        </>
     );
}
 
export default SubHeading;
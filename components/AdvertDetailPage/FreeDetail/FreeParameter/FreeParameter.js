import Text from "../../../Elementes/Text/Text";

const FreeParameter = ({categoryName}) => {
    return (
        <>
            <div className="detail-parameter">
                <h4 className="detail-title"><Text content="parameter" /></h4>

                <div className="detail-parameter__grid detail-parameter__grid--avto">
                    <p className="detail-tag-text">
                        <Text content="Category" />:<span className="detail-tag-text--black">{categoryName}</span>
                    </p>
                </div>
            </div>
        </>
    );
}

export default FreeParameter;
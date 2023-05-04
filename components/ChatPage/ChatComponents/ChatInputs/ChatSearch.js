import { useLanguage } from "../../../../locales/hooks/useLanguage";


const ChatSearch = ({control, isSerching, cancel}) => {
    const {t} = useLanguage();



    return (
        <>
            <div className="chat-serch-area">
                <div className="search chat-search">
                    <form className="search__form">
                        <div className="search__submit-btn">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.25 15.0005H2.5C1.25583 15.0005 0 14.0555 0 11.9455V7.74552C0.0175226 5.83066 0.734522 3.98828 2.01598 2.5653C3.29744 1.14233 5.05493 0.236961 6.9575 0.0196844C8.03113 -0.0582536 9.10896 0.0958358 10.1178 0.471482C11.1265 0.847128 12.0426 1.43553 12.8038 2.1967C13.565 2.95787 14.1534 3.87398 14.529 4.88277C14.9047 5.89155 15.0588 6.96939 14.9808 8.04302C14.7633 9.94637 13.8571 11.7044 12.4332 12.986C11.0092 14.2675 9.16567 14.984 7.25 15.0005ZM16.6667 7.56719H16.6567C16.6567 7.76469 16.6567 7.96219 16.6467 8.16052C16.325 12.6672 12.2058 16.4822 7.57 16.6514V16.6639C8.15384 17.6764 8.99364 18.5177 10.0052 19.1034C11.0167 19.689 12.1645 19.9984 13.3333 20.0005H17.5C18.163 20.0005 18.7989 19.7371 19.2678 19.2683C19.7366 18.7994 20 18.1636 20 17.5005V13.3339C19.9988 12.1648 19.6902 11.0166 19.1051 10.0044C18.5201 8.99224 17.6791 8.15173 16.6667 7.56719Z" fill="#BDBDBD"/></svg>
                        </div>
                        <div className="search__field search__field--product">
                            <input placeholder={t('Message search')} type="text" {...control} />
                        </div>
                    </form>

                    
                    
                </div>
                {
                        isSerching && <button className="search-cancel-btn" onClick={cancel}>
                            {t('Cancel')}
                        </button>
                    }
            </div>
            
        </>
    );
}

export default ChatSearch;
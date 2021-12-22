import {getPagesArray} from "../../utils/pages";

export const Pagination = ({totalPages, page, changePage}) => {
    const pagesArray = getPagesArray(totalPages)
    return (
        <div className={'paggination'}>
            {pagesArray.map(p =>
                <button
                    className={page === p ? 'page__current' : 'page'}
                    key={p}
                    onClick={() => changePage(p)}
                >{p}</button>
            )}
        </div>
    )
}

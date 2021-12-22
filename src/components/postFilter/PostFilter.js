import {Input} from "../UI/input/Input";
import {Select} from "../UI/select/Select";

export const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <Input
                value={filter.query}
                onChange={e => setFilter({ ...filter, query: e.target.value })}
                placeholder={'Пошук...'}
            />
            <Select
                value={filter.sort}
                onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
                defaultValue={'Сортування по'}
                options={[
                    { value: 'title', name: 'по заголовку' },
                    { value: 'body', name: 'по опису' }
                ]}
            />
        </div>
    )
}

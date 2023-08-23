import css from './Filter.module.css'

export default function Filter({ value, onChange }) {
    return(
        <>
            <label className={css.title}>Find contacts by name</label>
                <input
                    className={css.input_filter}
                    type="text"
                    name="filter"
                    value={value}
                    onChange={onChange}
                ></input>
        </> 
    )
}


import style from './search.module.scss'

const Search = () => {
  return (
    <div class={style.search}>
      <input
        type="text"
        placeholder="opc.tcp://<адрес_сервера>:<порт>"
        class={style.search__input}
      />
      <button type="submit" class={style.search__button} tabIndex="-1">
        Подключиться
      </button>
    </div>
  )
}
export default Search

import error from '../../assets/error_outline.png'
export function ErrorComponent() {
  return (
    <div className="error_cont">
      <h1>Что-то пошло не так... <br /> Ошибка 404: Страница не найдена.</h1>
      <img src={error} alt="" />
    </div>
  );
}

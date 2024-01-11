export function PaymentComponent() {
  return (
    <div className="payment_cont">
      <h2>Информация об оплате</h2>
      <label htmlFor="">Имя владельца карты</label>
      <input type="text" placeholder="Ваше имя" />
      <label htmlFor="">Номер карты</label>
      <input type="text" placeholder="12-значный код" />
      <div className="card_info_bot">
        <div className="card_inspire_info">
          <label htmlFor="">Срок действия карты</label>
          <div className="card_inspire_inputs">
            <input type="text" placeholder="YY" />
            <input type="text" placeholder="MM" />
          </div>
        </div>
        <div className="card_cvv_info">
          <label htmlFor="">CVV</label>
          <input type="text" placeholder="Код" />
        </div>
      </div>
      <button className="pay_btn"> Подтведить и оплатить 174.41 р.</button>
    </div>
  );
}

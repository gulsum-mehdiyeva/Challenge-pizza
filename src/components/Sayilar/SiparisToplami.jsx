export default function SiparisToplami({ secimler, toplam }) {
    return (
        <div className="SiparisToplami">
            <div className="siparis">Sipariş Toplamı</div>
            <p className="secim1">
                Seçimler <span className="fiyat1">{secimler}₺</span>
            </p>
            <p className="secim2">
                Toplam <span className="fiyat2">{toplam}₺</span>
            </p>
        </div>
    )
}
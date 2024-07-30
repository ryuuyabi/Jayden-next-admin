export default function UserDetail() {
    return (
        <div className="user_detail">
            <div className="user-detail__title">ユーザ情報詳細</div>
            <div className="user-detail__content">
                <div className="user-detail__content__item">
                    <div className="user-detail__content__item__label">ニックネーム</div>
                    <div>RUI</div>
                </div>
                <div className="user-detail__content__item">
                    <div className="user-detail__content__item__label">メールアドレス</div>
                    <div>ryuuyapro@gmail.com</div>
                </div>
                <div className="user-detail__content__item">
                    <div className="user-detail__content__item__label">出身都道府県</div>
                    <div>愛知県</div>
                </div>
                <div className="user-detail__content__item">
                    <div className="user-detail__content__item__label">登録日</div>
                    <div>2024年7月15日</div>
                </div>
            </div>
        </div>
    )
}

import Image from "next/image"
import Sample1Image from "@image/sample1.jpeg";
import Link from "next/link";
import HeaderSearchForm from "./Header/HeaderSearchForm";

export default function Header() {
    return (
        <div className="l-header">
            <div className="l-header__left">
                {/* <HeaderSearchForm /> */}
            </div>
            <div className="l-header__center"></div>
            <div className="l-header__right">
                <Link href="/profile" className="l-header__right__profile">
                    <Image className="l-header__right__profile__icon" src={Sample1Image} width={42} height={42} alt="管理者アイコン" />
                    <div>RUI</div>
                </Link>
            </div>
        </div>
    )
}

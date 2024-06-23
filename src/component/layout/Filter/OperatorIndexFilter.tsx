import FilterSearchButton from "@/component/element/Filter/FilterSearchButton";
import FilterInputText from "@/component/element/Filter/FilterInputText";
import FormFilter from "@/component/element/Filter/FormFilter";

export default function OperatorIndexFilter() {
    return (
        <FormFilter className="l-filter">
            <div className="l-filter__area">
                <FilterInputText name="id" className="l-filter__input-text" placeholder="ID" />
                <FilterInputText name="personal_name" className="l-filter__input-text" placeholder="個人番号" />
                <FilterInputText name="email" className="l-filter__input-text" placeholder="メールアドレス" />
            </div>
            <FilterSearchButton className="l-filter__search-button" />
        </FormFilter>
    )
}

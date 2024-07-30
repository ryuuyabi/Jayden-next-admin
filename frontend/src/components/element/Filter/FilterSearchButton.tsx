type Props = {
    className: string
}

export default function FilterSearchButton({ className }: Props) {
    return (
        <button type="submit" className={className}>検索</button>
    )
}

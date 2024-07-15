type Props = {
    displayText?: string
}

export default function NotFoundData({ displayText = 'データが見つかりませんでした' }: Props) {
    return (
        <div className="not-found-data">
            <i>{ displayText }</i>
        </div>
    )
}

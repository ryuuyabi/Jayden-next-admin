import Table from '@/components/element/Table/Table'
import Tbody from '@/components/element/Table/Tbody'
import Td from '@/components/element/Table/Td'
import Th from '@/components/element/Table/Th'
import Thead from '@/components/element/Table/Thead'
import Tr from '@/components/element/Table/Tr'
import TdFormModal from '@/components/element/Table/TdFormModal'
import DefaultModal from '../../Modal/DefaultModal'
import useDefaultModal from '@/features/modal/useDefaultModal'

export default function OperatorApplyIndexTable() {
    const { isOpen, onClickCloseModal, onClickModal } = useDefaultModal();
    return (
        <>
            <Table className="l-table">
                <Thead>
                    <Tr className="l-table__tr">
                        <Th className="l-table__tr__th" displayText="メールアドレス" />
                        <Th className="l-table__tr__th" displayText="申請ステータス" />
                        <Th className="l-table__tr__th" displayText="申請日時" />
                        <Th className="l-table__tr__th" displayText="承認" />
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr className="l-table__tr">
                        <Td className="l-table__tr__td" displayText='テスト' />
                        <Td className="l-table__tr__td" displayText='テスト' />
                        <Td className="l-table__tr__td" displayText='テスト' />
                        <TdFormModal className="l-table__tr__td" displayText='承認' closeModal={onClickCloseModal} />
                    </Tr>
                </Tbody>
            </Table>
            <DefaultModal isOpen={isOpen} modalClick={onClickModal}>
                <div className="l-modal--container">モーダル</div>
            </DefaultModal>
        </>
    );
}

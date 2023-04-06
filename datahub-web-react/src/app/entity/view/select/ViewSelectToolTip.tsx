import React from 'react';
import styled from 'styled-components';
import { Tooltip } from 'antd';

const HeaderText = styled.div`
    margin-bottom: 8px;
`;

type Props = {
    children: React.ReactNode;
    visible?: boolean;
};

export const ViewSelectToolTip = ({ children, visible = true }: Props) => {
    return (
        <Tooltip
            overlayStyle={{ display: !visible ? 'none' : undefined }}
            placement="right"
            title={
                <>
                    <HeaderText>검색 결과에 적용할 보기를 선택합니다.</HeaderText>
                    <div>보기를 사용하면 가장 중요한 항목으로 검색 결과를 좁힐 수 있습니다.</div>
                </>
            }
        >
            {children}
        </Tooltip>
    );
};

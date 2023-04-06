import React from 'react';
import { Typography } from 'antd';
import { OnboardingStep } from '../OnboardingStep';

export const BUSINESS_GLOSSARY_INTRO_ID = 'business-glossary-intro';
export const BUSINESS_GLOSSARY_CREATE_TERM_ID = 'business-glossary-create-term';
export const BUSINESS_GLOSSARY_CREATE_TERM_GROUP_ID = 'business-glossary-create-term-group';

export const BusinessGlossaryOnboardingConfig: OnboardingStep[] = [
    {
        id: BUSINESS_GLOSSARY_INTRO_ID,
        title: '비지니스 용어 사전 📖',
        content: (
            <Typography.Paragraph>
                <p>
                    환영합니다. <strong>비지니스 용어 사전</strong>!
                </p>
                <p>

                    비즈니스 용어 사전은 데이터 자산에 대해서 구조화되고 표준화 된 용어에 집합입니다.
                    <strong>비지니스 용어</strong> 및 <strong>비지니스 용어 그룹</strong> 조회와 생성이 가능합니다.
                </p>
            </Typography.Paragraph>
        ),
    },
    {
        id: BUSINESS_GLOSSARY_CREATE_TERM_ID,
        selector: `#${BUSINESS_GLOSSARY_CREATE_TERM_ID}`,
        title: 'Glossary Terms',
        content: (
            <Typography.Paragraph>
                <p>
                    Click here to create a new <strong>Term</strong> .
                </p>
                <p>
                    <strong>Terms</strong> are words or phrases with a specific business definition assigned to them.
                </p>
            </Typography.Paragraph>
        ),
    },
    {
        id: BUSINESS_GLOSSARY_CREATE_TERM_GROUP_ID,
        selector: `#${BUSINESS_GLOSSARY_CREATE_TERM_GROUP_ID}`,
        title: 'Glossary Term Groups',
        content: (
            <Typography.Paragraph>
                <p>
                    Click here to create a new <strong>Term Group</strong>.
                </p>
                <p>
                    <strong>Term Groups</strong> act as folders, containing Terms and nested Term Groups.
                </p>
                <p>
                    For example, there could be a <strong>PII Term Group</strong> containing Terms for different types
                    of PII, such as <strong>Email</strong> or <strong>Phone Number</strong>.
                </p>
                <p>
                    Learn more about the <strong>Business Glossary</strong>{' '}
                    <a
                        target="_blank"
                        rel="noreferrer noopener"
                        href="https://datahubproject.io/docs/glossary/business-glossary"
                    >
                        {' '}
                        here.
                    </a>
                </p>
            </Typography.Paragraph>
        ),
    },
];

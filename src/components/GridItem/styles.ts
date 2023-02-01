import styled from "styled-components";

type Custom = {
    alignCenter?: boolean;
};

export const Tr = styled.tr``;

export const Td = styled.td<Custom>`
    padding: 15px 0 0 0;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    word-break: break-all;

    svg {
        width: 18px;
        height: 18px;
    }
`;

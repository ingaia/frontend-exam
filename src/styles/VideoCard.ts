import styled from 'styled-components';

export const Block = styled.div<{ paddingTop?: boolean }>`
  margin-top: ${props => props.paddingTop ? '58px': 0 };
  border: 1px solid var(--hillary);
  background: var(--coldGray);
  position: relative;
`

export const Image = styled.img`
  width: 100%;
  height: auto;
`

export const Title = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  text-align: center;
  padding: 15px 0;
`

import styled from 'styled-components';
import loadingImg from '../../images/loading.gif';

const LoadingContainer = styled.section `
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 5rem;

    img {
        width: 30%;
        border-radius: 50%;
    }
`

const Loading = () => {
    return (
        <LoadingContainer>
            <img src={loadingImg} alt="Loading..." />
        </LoadingContainer>
    )
}

export default Loading

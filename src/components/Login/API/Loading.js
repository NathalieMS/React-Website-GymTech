import styled from "styled-components";

export const Body = styled.div` 
    background: #f6f8fa;
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
  `;
  
  export const Loading = styled.div`
  margin-top: 100px;
    width: 200px;
    height: 200px;
    border: 8px solid #fff;
    border-top-color: #ff7900;
    border-radius: 50%;
    animation: spin 1s linear infinite;

  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  `
  /* att */

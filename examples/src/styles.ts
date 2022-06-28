import styled from 'styled-components';

export const App = styled.div`
  text-align: center;
  .container {
      position: absolute;
      bottom: 0;
      left: 0;
      top: 0;
      right: 0;
      text-align: center;
      padding:1rem;
      background: #eee;
  }
  
  .select-btn {
      display: inline-block;
      border: 1px solid #ccc;
      padding: 1rem;
      margin: 1rem 0;
      cursor: pointer;
      background: #fff;
  }
  
  .select-btn.sm {
    margin: .5rem .5rem;
    padding: .5rem;
  }
  
  .select-time {
    margin-top: 1rem;
    font-size: 2rem;
  }
`;
